import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsiEsirListComponent } from './asi-esir-list.component';
import { AsiEsirListItemDirective, AsiEsirListDataDirective } from './asi-esir-list-item.directive';

export * from './asi-esir-list.component';
export * from './asi-esir-list-item.directive';

@NgModule({
  declarations: [AsiEsirListComponent, AsiEsirListItemDirective, AsiEsirListDataDirective],
  imports: [CommonModule],
  exports: [AsiEsirListComponent, AsiEsirListItemDirective, AsiEsirListDataDirective]
})
export class AsiEsirListModule { }
