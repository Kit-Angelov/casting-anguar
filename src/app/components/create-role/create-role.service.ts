import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {CastingList} from "../casting-list/casting-list";
import {CreateRole} from "./create-role";
import {Parameters} from "../parameters/parameters";
import {Host} from "../../host";



@Injectable()
export class CreateRoleService {

    host: Host = new Host;
    path: string = this.host.host;
    constructor(private http: HttpClient) {
    }

    getCasting(): Observable<CastingList[]> {
        return this.http.get(this.host+"castinglist/").map(data => {
            let usersList = data;
            if (usersList instanceof Array) {
                return usersList.map(function (casting: any) {
                    return {
                        url: casting.url,
                        id: casting.id,
                        name: casting.name,
                        type: casting.type,
                        owner: casting.owner,
                        image: casting.image,
                        role_set: casting.role_set
                    };
                });
            }
        });
    }

    postRole(createrole: CreateRole) {
        const body = {
            name: createrole.name,
            salary: createrole.salary,
            start_date: createrole.start_date,
            expire_date: createrole.expire_date,
            casting_id: createrole.casting_id,
            description: createrole.description
        };
        console.log(body);
        return this.http.post(this.host+"new_role/", body)
    }

    postParameter(parameters: Parameters, role_id: number) {
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
        return this.http.post(this.host+"new_paramrole/", body)
    }
}