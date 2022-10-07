import { AbstractControl } from "@angular/forms";

export function validateOnlyNumbers(control: AbstractControl) {
  console.log((Number.parseFloat(control.value)));
  if ((Number.parseFloat(control.value)).toString() === control.value) {
    return null;
  }
  else {
    return { validateOnlyNumbers: true };
  }
}
