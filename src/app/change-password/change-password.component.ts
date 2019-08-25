import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { PasswordValidators } from './oldPass.validators';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {

  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      oldPass: ['',
        Validators.required,
        PasswordValidators.invalidOldPassword
      ],
      newPass: ['', Validators.required],
      confPass: ['', Validators.required]
    }, {
      validator: PasswordValidators.passwordsMatch
    });
  }

  get oldPass() {
    return this.form.get('oldPass');
  }

  get newPass() {
    return this.form.get('newPass');
  }

  get confPass() {
    return this.form.get('confPass');
  }

  changePass() {
  }

}
