import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { BrandModel } from '../model/brand.model';
import { BrandService } from '../service/brand.service';


@Component({
    selector: 'brand-detail',
    templateUrl: 'app/template/brand-detail.html',
    providers: [BrandService,BrandModel]
})

export class BrandDetail {
    private sub: any;
    public Brand: BrandModel;
    public brandInfo: any;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private brandService: BrandService<BrandModel>) {
    }

    ngOnInit() {
        let self=this;
        let key:any;
        this.sub = this.route.params.subscribe(params => {
            //let id = +params['id']; // (+) converts string 'id' to a number
            this.key = params['key'];
            self.Brand=self.brandService.getBrand(this.key);
            self.brandService.getBrandPromise(this.key)
            .then(o => {
                self.brandInfo=JSON.stringify(o);
            })
            .catch(error => {console.log(error);});
        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    goback(){
        this.router.navigate(['/index', { key: this.Brand.brandName }]);
    }
}