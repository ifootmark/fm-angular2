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
var router_1 = require('@angular/router');
var brand_model_1 = require('../model/brand.model');
var brand_service_1 = require('../service/brand.service');
var BrandList = (function () {
    function BrandList(brandService) {
        this.brandService = brandService;
    }
    BrandList.prototype.ngOnInit = function () {
        var self = this;
        self.getDataList();
        $(".v-brand-list .v-clear").click(function () {
            self.clearData();
        });
    };
    BrandList.prototype.clearData = function () {
        if (confirm('确定要清空数据吗?')) {
            DS.clear();
            this.getDataList();
        }
    };
    BrandList.prototype.getDataList = function () {
        var _this = this;
        /*this.brandService.getDataList().subscribe(
           Brands => this.Brands = Brands,
           //error =>  this.errorMessage = <any>error
        );*/
        this.brandService.getDataList().then(function (list) { return _this.Brands = list; }).catch(function (error) { console.log(error); });
    };
    BrandList.prototype.onDelete = function (event, item) {
        this.brandService.delete(item);
        this.getDataList();
    };
    BrandList.prototype.getKeys = function (item) {
        var itemKeys = Object.keys(item);
        console.log(itemKeys);
        return itemKeys;
    };
    BrandList = __decorate([
        core_1.Component({
            selector: 'brand-list',
            templateUrl: 'app/template/brand-list.html',
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [brand_service_1.BrandService, brand_model_1.BrandModel]
        }), 
        __metadata('design:paramtypes', [brand_service_1.BrandService])
    ], BrandList);
    return BrandList;
}());
exports.BrandList = BrandList;
//# sourceMappingURL=brand-list.component.js.map