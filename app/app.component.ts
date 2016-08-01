import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'brand-app',
    templateUrl: 'app/template/app.html',
    directives: [ROUTER_DIRECTIVES]
})

export class BrandApp {
    constructor() {
    }
}
