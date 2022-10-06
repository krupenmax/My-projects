import { AbstractControl } from "@angular/forms";

export function validateOnlyNumbers(control: AbstractControl) {
  if (!isNaN(control.value) || control.value === "") {
    return null;
  }
  else {
    return { invalidInput: true };
  }
}

export function validateCoordinatesMax(control: AbstractControl) {
  return control.value > 180 ? { invalidMaxLength: true } : null;
}

export function validateCoordinatesMin(control: AbstractControl) {
  return control.value < -180 ? { invalidMinLength: true } : null;
}
