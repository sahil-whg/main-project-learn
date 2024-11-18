import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  signupForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private apiService: ApiService) {
    this.signupForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
    submitForm()
      {
        if (this.signupForm.valid) {
            this.apiService.signup(this.signupForm.value).subscribe({
        next: (response) => {
          console.log('Signup successful!', response);
          // Handle success (e.g., navigate to another page or show a success message)
        },
        error: (error) => {
          console.error('Signup failed', error);
          // Handle error (e.g., show an error message)
        }
      });
          console.log('Form Submitted!', this.signupForm.value);
          // Handle form submission logic here
        }
      }
}
