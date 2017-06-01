import { Component, OnInit } from '@angular/core';
import { IOrganization } from 'app/routes/home/_data/models/organization.model';
import { OrganizationsService } from 'app/routes/home/_data/organizations.service';

@Component({
  selector: 'ab-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  public organizations: IOrganization[];

  constructor(private organizationsService: OrganizationsService) { }

  ngOnInit() {
    this.organizationsService.getAll().subscribe(d => {
      if (d.length > 0) {
        this.organizations = d;
      } else {
        this.organizationsService.postSeed().subscribe(r => {
          this.organizationsService.getAll().subscribe(d2 => this.organizations = d2);
        })
      }
    });
  }

}
