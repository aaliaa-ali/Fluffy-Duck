import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/_shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  registerForm!: FormGroup;

  constructor(private AuthService:AuthService) {}
  ngOnInit(): void {
    this.registerForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(
        null,
        [Validators.required,
        Validators.minLength(6),
        Validators.maxLength(16),
        ]),
        password_confirmation: new FormControl(null, [Validators.required]),
    });
  }
  submit(){
    console.log(this.registerForm.value) 
    this.AuthService.login(this.registerForm.value)
  }
}
