import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
        selector: 'app-authenticate',
        templateUrl: './authenticate.component.html',
        styleUrls: ['./authenticate.component.scss']
})
export class AuthenticateComponent implements OnInit {

        authForm = new FormGroup({
                serial: new FormControl('', Validators.required)
        });

        constructor(
        ) { }

        ngOnInit(): void {  
        }

        authenticate() {
                console.log(this.authForm.value);
        }

}
