import { Injectable } from '@angular/core';
import { BrandModel } from '../model/brand.model';

@Injectable()
export class BrandService<T> {
    constructor(private brandModel: BrandModel){
    }
    addData(){
        addBrand(this.brandModel);
    }
    getBrand(brandName) :T {
        return getBrand(brandName);
    }
    getBrandPromise(brandName) :T {
        return getBrandPromise(brandName);
    }
    getDataList(){
        return getDataList();
    }
    delete(item: T){
        DS.remove(item.brandName);
    }
    clone (item: T) :T {
        return JSON.parse(JSON.stringify(item));
    }
}

function addBrand(model){
    var o_name=$('#brandName');
    var o_code=$('#brandCode');
    var o_remark=$('#remark');
    model.brandName=o_name.val();
    model.brandCode=o_code.val();
    model.remark=o_remark.val();
    if(model.brandName==""){
        o_name.focus();
        return false;
    }
    if(model.brandCode==""){
        o_code.focus();
        return false;
    }
    var o=DS.get(model.brandName);
    if(!!o){
        alert('此品牌名称已存在');
        return false;
    }
    DS.set(model.brandName,model);

    o_name.val('');
    o_code.val('');
    o_remark.val('');
}

function getDataList(){
    return new Promise(function (resolve, reject) {
        try{
            let data=DS.getAll();
            if (data.list && data.list.length>0) {
                $('.v-brand-list').show();
                resolve(data.list);
            }else{
                $('.v-brand-list').hide();
                resolve([]);
            }
        }catch(e){
            reject(e.name + ": " + e.message);
        }
    });  
}

function getBrandPromise(key){
    return new Promise(function (resolve, reject) {
        try{
            let o=DS.get(key);
            if(!!o){
                resolve(o);
            }else{
                resolve(null);
            }
        }catch(e){
            reject(e.name + ": " + e.message);
        }
    });  
}

function getBrand(key){
    var o=DS.get(key);
    if(!!o){
        return o;
    }
}