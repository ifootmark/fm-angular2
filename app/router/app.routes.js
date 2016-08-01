"use strict";
var router_1 = require('@angular/router');
var brand_index_component_1 = require('../component/brand-index.component');
var brand_list_component_1 = require('../component/brand-list.component');
var brand_detail_component_1 = require('../component/brand-detail.component');
var brand_add_component_1 = require('../component/brand-add.component');
var login_in_component_1 = require('../component/login-in.component');
var routes = [
    {
        path: '',
        redirectTo: '/index',
        pathMatch: 'full'
    },
    {
        path: 'index',
        component: brand_index_component_1.BrandIndex
    },
    {
        path: 'list',
        component: brand_list_component_1.BrandList
    },
    {
        path: 'add',
        component: brand_add_component_1.BrandAdd
    },
    {
        path: 'detail/:key',
        component: brand_detail_component_1.BrandDetail
    },
    {
        path: 'login',
        component: login_in_component_1.LoginIn
    }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map