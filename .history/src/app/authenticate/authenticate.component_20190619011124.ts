import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.scss']
})
export class AuthenticateComponent implements OnInit {

        form: FormGroup;

  constructor(
          private fb: FormBuilder
  ) { }

  ngOnInit(): void
  {

        this.form = this.fb.group({
                serial: ['', Validators.required] 
        });

  }

  authenticate()
  {
          console.log(this.form.value);
  }

}
