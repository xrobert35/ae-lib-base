import { OnInit, Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: 'ae-list-item'
})
export class AsiEsirListItemDirective implements OnInit {

  constructor() {}

  ngOnInit() {}
}

@Directive({
  selector: '[aeListData]'
})
export class AsiEsirListDataDirective {
  constructor(public templateRef: TemplateRef<any>) {}
}

