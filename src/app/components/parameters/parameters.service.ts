import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Parameters} from "./parameters";
import 'rxjs/add/operator/map';
import {City} from "./city";
import {Country} from "./country";
import {Haircolor} from "./haircolor";
import {Gender} from "./gender";
import {Appearancetype} from "./appearancetype";
import {Eyecolor} from "./eyecolor";
import {Employmenttype} from "./employmenttype";
import {Host} from "../../host";


@Injectable()
export class ParametersService{
    host: Host = new Host;
    path: string = this.host.host;
    constructor(private http: HttpClient){ }

    getCountry() : Observable<Country[]> {
        return this.http.get(this.path+"country/").map(data=>{
            let usersList = data;
            if (usersList instanceof Array) {
                return usersList.map(function (contactCountry: any) {
                    return {name: contactCountry.name, id: contactCountry.id};
                });
            }
        });
    }
    getCity() : Observable<City[]> {
        return this.http.get(this.path+"city/").map(data=>{
            let usersList = data;
            if (usersList instanceof Array) {
                return usersList.map(function (contactCity: any) {
                    return {name: contactCity.name , id: contactCity.id};
                });
            }
        });
    }
    getAppearancetype() : Observable<Appearancetype[]> {
        return this.http.get(this.path+"appearancetype/").map(data => {
            let usersList = data;
            if (usersList instanceof Array) {
                return usersList.map(function (contactAppearancetype: any) {
                    return {name: contactAppearancetype.name, id: contactAppearancetype.id};
                });
            }
        });
    }
    getHaircolor() : Observable<Haircolor[]> {
        return this.http.get(this.path+"haircolor/").map(data=>{
            let usersList = data;
            if (usersList instanceof Array) {
                return usersList.map(function (contactHaircolor: any) {
                    return {name: contactHaircolor.name, id: contactHaircolor.id};
                });
            }
        });
    }
    getGender() : Observable<Gender[]> {
        return this.http.get(this.path+"gender/").map(data=>{
            let usersList = data;
            if (usersList instanceof Array) {
                return usersList.map(function (contactGender: any) {
                    return {name: contactGender.name, id: contactGender.id};
                });
            }
        });
    }
    getEyecolor() : Observable<Eyecolor[]> {
        return this.http.get(this.path+"eyecolor/").map(data=>{
            let usersList = data;
            if (usersList instanceof Array) {
                return usersList.map(function (contactEyecolor: any) {
                    return {name: contactEyecolor.name, id: contactEyecolor.id};
                });
            }
        });
    }
    getEmploymenttype() : Observable<Employmenttype[]> {
        return this.http.get(this.path+"employmenttype/").map(data=>{
            let usersList = data;
            if (usersList instanceof Array) {
                return usersList.map(function (contactEmploymenttype: any) {
                    return {name: contactEmploymenttype.name, id: contactEmploymenttype.id};
                });
            }
        });
    }
    postParameter(parameters: Parameters, user_id: string) {
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
        return this.http.post(this.path+"new_parameters/", body)
    }
    getParameters(url:string){
        return this.http.get(url)
    }
}