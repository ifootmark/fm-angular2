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
var BrandDetail = (function () {
    function BrandDetail(route, router, brandService) {
        this.route = route;
        this.router = router;
        this.brandService = brandService;
    }
    BrandDetail.prototype.ngOnInit = function () {
        var _this = this;
        var self = this;
        var key;
        this.sub = this.route.params.subscribe(function (params) {
            //let id = +params['id']; // (+) converts string 'id' to a number
            _this.key = params['key'];
            self.Brand = self.brandService.getBrand(_this.key);
            self.brandService.getBrandPromise(_this.key)
                .then(function (o) {
                self.brandInfo = JSON.stringify(o);
            })
                .catch(function (error) { console.log(error); });
        });
    };
    BrandDetail.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    BrandDetail.prototype.goback = function () {
        this.router.navigate(['/index', { key: this.Brand.brandName }]);
    };
    BrandDetail = __decorate([
        core_1.Component({
            selector: 'brand-detail',
            templateUrl: 'app/template/brand-detail.html',
            providers: [brand_service_1.BrandService, brand_model_1.BrandModel]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, brand_service_1.BrandService])
    ], BrandDetail);
    return BrandDetail;
}());
exports.BrandDetail = BrandDetail;
//# sourceMappingURL=brand-detail.component.js.map