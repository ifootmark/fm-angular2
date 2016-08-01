import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { FormBuilder, Validators } from '@angular/common';


@Component({
    selector: 'login',
    templateUrl: 'app/template/login-in.html',
    directives: [ROUTER_DIRECTIVES]
})

export class LoginIn {
    private userInfo: any;
    constructor(fb: FormBuilder) {
        this.loginForm = fb.group({
            email: ["", Validators.required],
            password: ["", Validators.required]
        });
    }
    doLogin(event) {
        this.userInfo=JSON.stringify(this.loginForm.value);
        event.preventDefault();
    }
}