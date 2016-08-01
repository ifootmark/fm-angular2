import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BrandModel } from '../model/brand.model';
import { BrandService } from '../service/brand.service';
import { TextInput } from '../component/input-text.component';


@Component({
    selector: 'brand-add',
    templateUrl: 'app/template/brand-add.html',
    directives: [TextInput],
    providers: [BrandService,BrandModel]
})

export class BrandAdd {
    @Output() getList = new EventEmitter();
    constructor(private brandService: BrandService<BrandModel>) {}
    save(event) {
        this.brandService.addData();
        this.getList.emit();
    }
}