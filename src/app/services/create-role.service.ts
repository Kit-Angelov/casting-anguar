import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Casting} from "../models/casting";
import {RoleCreate} from "../models/roleCreate";
import {ParametersCreate} from "../models/parametersCreate";



@Injectable()
export class CreateRoleService {

    constructor(private http: HttpClient) {
    }

    getCasting(url:string): Observable<Casting[]> {
        return this.http.get(url).map(data => {
            let usersList = data;
            if (usersList instanceof Array) {
                return usersList.map(function (casting: any) {
                    return {
                        url: casting.url,
                        id: casting.id,
                        name: casting.name,
                        type: casting.type,
                        description: casting.description,
                        owner: casting.owner,
                        image: casting.image,
                        role_set: casting.role_set
                    };
                });
            }
        });
    }

    postRole(createrole: RoleCreate, url:string) {
        const body = {
            name: createrole.name,
            salary: createrole.salary,
            start_date: createrole.start_date,
            expire_date: createrole.expire_date,
            casting_id: createrole.casting_id,
            description: createrole.description
        };
        console.log(body);
        return this.http.post(url, body)
    }

    postParameter(parameters: ParametersCreate, role_id: number, url: string) {
        const body = {
            role_id: role_id,
            age: parameters.age,
            growth: parameters.growth,
            clothsize: parameters.clothsize,
            chestsize: parameters.chestsize,
            waistsize: parameters.waistsize,
            thighsize: parameters.thighsize,
            footsize: parameters.footsize,
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
}