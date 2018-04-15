import { Component, OnInit, Directive } from '@angular/core';
import { AuthService } from '../auth.service';
import {
  FormBuilder,
  FormGroup,
  AbstractControl,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  // tslint:disable-next-line:no-inferrable-types
  public sumitted: boolean = false;
  public loginForm: FormGroup;
  public username: AbstractControl;
  public password: AbstractControl;

  constructor(
    private formBuiler: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.initFormLogin();
  }

  private initFormLogin() {
    this.loginForm = this.formBuiler.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.username = this.loginForm.controls['username'];
    this.password = this.loginForm.controls['password'];
  }

  public formOnSubmit(e: Event, form: any) {
    e.stopPropagation();
    this.sumitted = true;
    if (this.loginForm.valid ) {
      this.formSandbox(form);
    }
  }

  private formSandbox(form) {
   // submit to server
   this.authService.login(form);
  }

}
