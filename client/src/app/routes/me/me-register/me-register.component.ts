import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { IFormSchema, IWidgetSchema } from 'app/core/shared/_data/schema.model';
import { SecurityService, IInvitationCredential } from 'app/core/security.service';

@Component({
  selector: 'ab-me-register',
  templateUrl: './me-register.component.html',
  styles: []
})
export class MeRegisterComponent implements OnInit {
  loadedMetadata = false;
  loadingPanelSchema = {
    loading: true,
    empty: false
  };
  public panelSchema: IWidgetSchema;
  public formSchema: IFormSchema;
  public userId: string;
  constructor(private route: ActivatedRoute, private http: Http, private securityService: SecurityService) { }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        this.userId = params['hash'];
      });
    this.http
      .get('assets/schemas/accept_invitation.json')
      .subscribe(res => {
        const schemas = res.json();
        this.panelSchema = schemas.panel;
        this.formSchema = schemas.form;
        this.loadedMetadata = true;
      });
  }


  onSend(credentials: IInvitationCredential) {
    if (credentials.password === credentials.passwordBis) {
      credentials.hash = this.userId;
      this.securityService.acceptInvitation(credentials);
    }
    else {
      //TODO show dont match message
    }
  }
}
