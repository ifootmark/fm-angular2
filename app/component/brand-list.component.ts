import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { BrandModel } from '../model/brand.model';
import { BrandService } from '../service/brand.service';

@Component({
    selector: 'brand-list',
    templateUrl: 'app/template/brand-list.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [BrandService,BrandModel]
})

export class BrandList {
    public Brands: BrandModel[];
    constructor(private brandService: BrandService<BrandModel>) {
    }
    ngOnInit() {
        let self=this;
        self.getDataList();
        $(".v-brand-list .v-clear").click(function(){
            self.clearData();
        });
    }
    clearData(){
        if(confirm('确定要清空数据吗?')){
            DS.clear();
            this.getDataList();
        }        
    }
    getDataList() {
        /*this.brandService.getDataList().subscribe(
           Brands => this.Brands = Brands,
           //error =>  this.errorMessage = <any>error
        );*/
        this.brandService.getDataList().then(list => this.Brands = list).catch(error => {console.log(error);});
    }
    onDelete(event,item){
        this.brandService.delete(item);
        this.getDataList();
    }
    getKeys(item){
        let itemKeys = Object.keys(item);
        console.log(itemKeys);
        return itemKeys;
    }
}