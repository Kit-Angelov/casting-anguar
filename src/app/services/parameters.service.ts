import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {ParametersDetail} from "../models/parametersDetail";
import 'rxjs/add/operator/map';
import {City} from "../models/city";
import {Country} from "../models/country";
import {Haircolor} from "../models/haircolor";
import {Gender} from "../models/gender";
import {Appearancetype} from "../models/appearancetype";
import {Eyecolor} from "../models/eyecolor";
import {Employmenttype} from "../models/employmenttype";
import {ParametersCreate} from "../models/parametersCreate";

@Injectable()
export class ParametersService{
    constructor(private http: HttpClient){ }

    getCountry(url: string) : Observable<Country[]> {
        return this.http.get(url).map(data=>{
            let usersList = data;
            if (usersList instanceof Array) {
                return usersList.map(function (contactCountry: any) {
                    return {name: contactCountry.name, id: contactCountry.id};
                });
            }
        });
    }
    getCity(url: string) : Observable<City[]> {
        return this.http.get(url).map(data=>{
            let usersList = data;
            if (usersList instanceof Array) {
                return usersList.map(function (contactCity: any) {
                    return {name: contactCity.name , id: contactCity.id};
                });
            }
        });
    }
    getAppearancetype(url: string) : Observable<Appearancetype[]> {
        return this.http.get(url).map(data => {
            let usersList = data;
            if (usersList instanceof Array) {
                return usersList.map(function (contactAppearancetype: any) {
                    return {name: contactAppearancetype.name, id: contactAppearancetype.id};
                });
            }
        });
    }
    getHaircolor(url: string) : Observable<Haircolor[]> {
        return this.http.get(url).map(data=>{
            let usersList = data;
            if (usersList instanceof Array) {
                return usersList.map(function (contactHaircolor: any) {
                    return {name: contactHaircolor.name, id: contactHaircolor.id};
                });
            }
        });
    }
    getGender(url: string) : Observable<Gender[]> {
        return this.http.get(url).map(data=>{
            let usersList = data;
            if (usersList instanceof Array) {
                return usersList.map(function (contactGender: any) {
                    return {name: contactGender.name, id: contactGender.id};
                });
            }
        });
    }
    getEyecolor(url: string) : Observable<Eyecolor[]> {
        return this.http.get(url).map(data=>{
            let usersList = data;
            if (usersList instanceof Array) {
                return usersList.map(function (contactEyecolor: any) {
                    return {name: contactEyecolor.name, id: contactEyecolor.id};
                });
            }
        });
    }
    getEmploymenttype(url: string) : Observable<Employmenttype[]> {
        return this.http.get(url).map(data=>{
            let usersList = data;
            if (usersList instanceof Array) {
                return usersList.map(function (contactEmploymenttype: any) {
                    return {name: contactEmploymenttype.name, id: contactEmploymenttype.id};
                });
            }
        });
    }
    postParameter(parameters: ParametersCreate, user_id: string, url: string) {
        const body = {
                user_id: user_id,
                age: parameters.age,
                growth: parameters.growth,
                clothsize: parameters.clothsize,
                chestsize: parameters.chestsize,
                waistsize: parameters.waistsize,
                thighsize: parameters.thighsize,
                footsize:   parameters.footsize,
                necksize: parameters.necksize,
                headsize: parameters.headsize,
                tatu: parameters.tatu,
                piercing: parameters.piercing,
                appearancetype: parameters.appearancetype,
                haircolor: parameters.haircolor,
                city: parameters.city,
                eyecolor: parameters.eyecolor,
                gender: parameters.gender,
                country: parameters.country,
                employmenttype: parameters.employmenttype
        };
        console.log(body);
        return this.http.post(url, body)
    }
    getParameters(url:string){
        return this.http.get(url)
    }
}