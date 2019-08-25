import { AbstractControl, ValidationErrors } from '@angular/forms';

export class PasswordValidators {

  static invalidOldPassword(control: AbstractControl) {
    return new Promise((resolve) => {
      if (control.value !== '1234')
        resolve({ invalidOldPassword: true });
      else
        resolve(null);
    });
  }

  static passwordsMatch(control: AbstractControl) {

    let newPass = control.get('newPass');
    let confPass = control.get('confPass');
    if (newPass.value !== confPass.value)
      return { passwordsMatch: true };
    else
      return null;
  }
}
