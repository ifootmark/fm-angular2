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
var brand_add_component_1 = require('../component/brand-add.component');
var brand_list_component_1 = require('../component/brand-list.component');
var BrandIndex = (function () {
    function BrandIndex() {
    }
    BrandIndex = __decorate([
        core_1.Component({
            selector: 'brand-index',
            templateUrl: 'app/template/brand-index.html',
            directives: [brand_list_component_1.BrandList, brand_add_component_1.BrandAdd]
        }), 
        __metadata('design:paramtypes', [])
    ], BrandIndex);
    return BrandIndex;
}());
exports.BrandIndex = BrandIndex;
//# sourceMappingURL=brand-index.component.js.map