import { Component, OnInit, ContentChild, Input } from '@angular/core';
import { AsiEsirListDataDirective } from './asi-esir-list-item.directive';

@Component({
  selector: 'ae-list',
  templateUrl: './asi-esir-list.component.html'
})
export class AsiEsirListComponent implements OnInit {

  @Input() data: Array<any>;

  @ContentChild(AsiEsirListDataDirective, {static : true}) itemTemplate: AsiEsirListDataDirective;

  constructor() {}

  ngOnInit() {}

}
