import { Component } from '@angular/core';
import { SecurityService } from "app/core/security.service";

@Component({
  selector: 'ab-root',
  template: `
    <ab-shell></ab-shell>
  `,
  styles: []
})
export class AppComponent {
  constructor(private security: SecurityService) {

  }
}
