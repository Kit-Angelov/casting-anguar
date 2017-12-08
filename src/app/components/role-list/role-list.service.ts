import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RoleList} from "./role-list";
import {Observable} from "rxjs/Observable";
import {CastingDetailService} from "../casting-detail/casting-detail.service";
import {Host} from "../../host";

@Injectable()
export class RoleListService {

    host: Host = new Host;
    path: string = this.host.host;

    constructor(private http: HttpClient) {
    }

    getRoleList() : Observable<RoleList[]> {
        return this.http.get(this.path+"role/").map(data=>{
            let roleList = data;
            if (roleList instanceof Array) {
                return roleList.map(function (role: any) {
                    return {name: role.name, salary: role.salary, start_date: role.start_date,
                        expire_date: role.expire_date, description: role.description, parameters: role.parameters,
                    casting: role.casting};
                });
            }
        });
    }
}