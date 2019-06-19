import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.scss']
})
export class AuthenticateComponent implements OnInit {

        authForm: FormGroup;

  constructor(
          private fb: FormBuilder
  ) { }

  ngOnInit(): void
  {

        this.authForm = new FormGroup({
                serial: new FormControl(['', [Validators.required]])
        });

  }

  authenticate()
  {
          console.log(this.authForm.value);
  }

}
