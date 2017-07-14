import { Component, OnInit, Input } from '@angular/core';
import { SchemaService } from 'app/core/shared/_data/schema.service';
import { BusService } from 'app/core/bus.service';

@Component({
  selector: 'ab-page',
  templateUrl: './page.component.html',
  styles: []
})
export class PageComponent implements OnInit {
  @Input() public name: string;
  public loadedMetadata;
  constructor(private schemaService: SchemaService, private bus: BusService) { }

  ngOnInit() {
    this.schemaService
      .getSchema(this.name)
      .subscribe(schemas => {
        this.bus.emitPageSchema(schemas);
        this.loadedMetadata = true;
      });
  }

}
