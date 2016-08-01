"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var brand_model_1 = require('../model/brand.model');
var brand_service_1 = require('../service/brand.service');
var input_text_component_1 = require('../component/input-text.component');
var BrandAdd = (function () {
    function BrandAdd(brandService) {
        this.brandService = brandService;
        this.getList = new core_1.EventEmitter();
    }
    BrandAdd.prototype.save = function (event) {
        this.brandService.addData();
        this.getList.emit();
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], BrandAdd.prototype, "getList", void 0);
    BrandAdd = __decorate([
        core_1.Component({
            selector: 'brand-add',
            templateUrl: 'app/template/brand-add.html',
            directives: [input_text_component_1.TextInput],
            providers: [brand_service_1.BrandService, brand_model_1.BrandModel]
        }), 
        __metadata('design:paramtypes', [brand_service_1.BrandService])
    ], BrandAdd);
    return BrandAdd;
}());
exports.BrandAdd = BrandAdd;
//# sourceMappingURL=brand-add.component.js.map