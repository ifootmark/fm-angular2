import { provideRouter, RouterConfig }  from '@angular/router';
import { BrandIndex } from '../component/brand-index.component';
import { BrandList } from '../component/brand-list.component';
import { BrandDetail } from '../component/brand-detail.component';
import { BrandAdd } from '../component/brand-add.component';
import { LoginIn } from '../component/login-in.component';

const routes: RouterConfig = [
    {
        path: '',
        redirectTo: '/index',
        pathMatch: 'full'
    },
    {
        path: 'index',
        component: BrandIndex
    },
    {
        path: 'list',
        component: BrandList
    },
    {
        path: 'add',
        component: BrandAdd
    },
    {
        path: 'detail/:key',
        component: BrandDetail
    },
    {
        path: 'login',
        component: LoginIn
    }
];

export const appRouterProviders = [
  provideRouter(routes)
];
