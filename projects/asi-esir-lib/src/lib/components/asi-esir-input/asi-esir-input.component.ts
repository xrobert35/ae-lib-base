import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';

@Component({
  selector: 'ae-input',
  templateUrl: './asi-esir-input.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AsiEsirInputComponent),
      multi: true
    }
  ]
})
export class AsiEsirInputComponent implements OnInit, ControlValueAccessor {

  @Input() id: string;
  @Input() label: string;
  @Input() name: string;
  disabled = false;

  inputControl = new FormControl();

  onChange = (_val: string) => {};
  onTouched = () => {};

  constructor() { }

  ngOnInit() {
    this.inputControl.valueChanges.subscribe((value) => {
      this.onTouched();
      this.onChange(value);
    });
  }

  /**
   * Appellée lors d'un changement de valeur depuis l'exterieur
   * @param obj nouvelle valeur
   */
  writeValue(value: any): void {
    this.inputControl.setValue(value, {emitEvent: false});
  }

  /**
   * Mise en lecture seule ou non du composant
   * @param isDisabled true ou false
   */
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  /**
   * Enregistrement d'une methode indiquant que le valeur du composant à changer
   * @param fn la methode
   */
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  /**
   * Enregistrement d'une methode indiquant que le composant a été touché
   * @param fn la methode
   */
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

}
