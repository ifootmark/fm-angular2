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
var BrandService = (function () {
    function BrandService(brandModel) {
        this.brandModel = brandModel;
    }
    BrandService.prototype.addData = function () {
        addBrand(this.brandModel);
    };
    BrandService.prototype.getBrand = function (brandName) {
        return getBrand(brandName);
    };
    BrandService.prototype.getBrandPromise = function (brandName) {
        return getBrandPromise(brandName);
    };
    BrandService.prototype.getDataList = function () {
        return getDataList();
    };
    BrandService.prototype.delete = function (item) {
        DS.remove(item.brandName);
    };
    BrandService.prototype.clone = function (item) {
        return JSON.parse(JSON.stringify(item));
    };
    BrandService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [brand_model_1.BrandModel])
    ], BrandService);
    return BrandService;
}());
exports.BrandService = BrandService;
function addBrand(model) {
    var o_name = $('#brandName');
    var o_code = $('#brandCode');
    var o_remark = $('#remark');
    model.brandName = o_name.val();
    model.brandCode = o_code.val();
    model.remark = o_remark.val();
    if (model.brandName == "") {
        o_name.focus();
        return false;
    }
    if (model.brandCode == "") {
        o_code.focus();
        return false;
    }
    var o = DS.get(model.brandName);
    if (!!o) {
        alert('此品牌名称已存在');
        return false;
    }
    DS.set(model.brandName, model);
    o_name.val('');
    o_code.val('');
    o_remark.val('');
}
function getDataList() {
    return new Promise(function (resolve, reject) {
        try {
            var data = DS.getAll();
            if (data.list && data.list.length > 0) {
                $('.v-brand-list').show();
                resolve(data.list);
            }
            else {
                $('.v-brand-list').hide();
                resolve([]);
            }
        }
        catch (e) {
            reject(e.name + ": " + e.message);
        }
    });
}
function getBrandPromise(key) {
    return new Promise(function (resolve, reject) {
        try {
            var o = DS.get(key);
            if (!!o) {
                resolve(o);
            }
            else {
                resolve(null);
            }
        }
        catch (e) {
            reject(e.name + ": " + e.message);
        }
    });
}
function getBrand(key) {
    var o = DS.get(key);
    if (!!o) {
        return o;
    }
}
//# sourceMappingURL=brand.service.js.map