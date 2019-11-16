import { NgModule } from '@angular/core';
import { AsiEsirInputModule } from './components/asi-esir-input/asi-esir-input.module';

const sharedModules = [AsiEsirInputModule];

@NgModule({
  declarations: [],
  imports: [...sharedModules],
  exports: [...sharedModules]
})
export class AsiEsirLibModule { }
