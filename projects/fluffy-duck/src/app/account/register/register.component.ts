import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/_shared/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private AuthService:AuthService) {}

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(16),
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(
        null,
        [Validators.required,
        Validators.minLength(6),
        Validators.maxLength(16),
        ]),
        password_confirmation: new FormControl(null, [Validators.required,this.passMatch.bind(this)]),
    });
  }
  passMatch(control:any){
    if(control.value == this.registerForm?.get('password')?.value){
      return {'valid':true}
    }
    else
    return {'invalid':true}
  }
  submit(){
    console.log(this.registerForm.value) 
    this.AuthService.register(this.registerForm.value)
  }
}
