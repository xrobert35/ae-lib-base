import { NgModule } from '@angular/core';
import { AsiEsirInputComponent } from './asi-esir-input.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

export * from './asi-esir-input.component';

@NgModule({
  declarations: [AsiEsirInputComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [AsiEsirInputComponent]
})
export class AsiEsirInputModule { }
