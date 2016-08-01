import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { BrandAdd } from '../component/brand-add.component';
import { BrandList } from '../component/brand-list.component';

@Component({
    selector: 'brand-index',
    templateUrl: 'app/template/brand-index.html',
    directives: [BrandList,BrandAdd]
})

export class BrandIndex {
    constructor() {
    }
}
