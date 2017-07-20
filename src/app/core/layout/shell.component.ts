import { Component, OnInit } from '@angular/core';
import { BusService } from 'app/core/bus.service';
import { Level, IMessage } from 'app/core/shared/_data/message.model';
import { IUser } from 'app/core/shared/_data/user.model';
import { IAction } from 'app/core/shared/_data/schema.model';
import { SchemaService } from 'app/core/shared/_data/schema.service';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { environment } from 'environments/environment';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Component({
  selector: 'ab-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css']
})
export class ShellComponent implements OnInit {
  public user: IUser = null;
  public show: boolean;
  public text = '';
  public title: string;
  public level: Level;
  public menuLinks: IAction[];
  public loadedMetadata: boolean;
  public showResponsive = false;
  private menuSchema;

  constructor(
    private bus: BusService,
    private schemaService: SchemaService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.loadMenu();
    this.onMessages();
    this.onPageRouteChange();
    this.onUserChange();
  }

  onPageRouteChange() {
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .map(() => this.activatedRoute)
      .map(route => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      })
      .filter(pageRoute => pageRoute.outlet === 'primary')
      .mergeMap(primaryRoute => primaryRoute.data)
      .subscribe(data => {
        if (data.title) {
          this.title = data.title;
        } else {
          this.title = environment.appTitle
        }
        if (data.name) {
          this.loadMetadata(data.name);
        } else {
          this.loadedMetadata = true;
        }
      }
      );
  }

  loadMetadata(pageName) {
    this.schemaService
      .getSchema(pageName)
      .subscribe(schemas => {
        console.log('pageName', pageName);
        this.bus.emitPageSchema(schemas);
        this.loadedMetadata = true;
      });
  }

  loadMenu() {
    this.schemaService
      .getSchema('menu')
      .subscribe(schema => {
        this.menuSchema = schema;
        this.menuByUserRole();
      });
  }

  onMessages() {
    this.bus
      .getMessage$()
      .subscribe((message: IMessage) => {
        this.text = message.text;
        this.level = message.level;
        this.show = true;
      });
  }

  onUserChange() {
    this.bus
      .getUser$()
      .subscribe((user: IUser) => {
        this.user = user;
        this.menuByUserRole();
      });
  }

  menuByUserRole() {
    this.menuLinks = [];
    if (this.menuSchema) {
      this.menuLinks = this.menuLinks.concat(this.menuSchema.common);
      if (this.user) {
        const userRole = this.user.roles[0];
        if (userRole) {
          const menuRole = this.menuSchema[userRole.toLowerCase()];
          if (menuRole) {
            this.menuLinks = this.menuLinks.concat(menuRole);
          }
        }
      }
    }
  }
}
