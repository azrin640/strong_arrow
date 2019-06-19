import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.scss']
})
export class AuthenticateComponent implements OnInit {

        form = new FormControl();

  constructor(
          private fb: FormBuilder
  ) { }

  ngOnInit() {

        this.form = this.fb.control( {serial: ['', Validators.required] });

  }

  authenticate()
  {
          console.log(this.form.value);
  }

}
