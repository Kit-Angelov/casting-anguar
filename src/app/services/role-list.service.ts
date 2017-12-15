import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Role} from "../models/role";
import {Observable} from "rxjs/Observable";
import {CastingDetailService} from "./casting-detail.service";
import {RequestDetail} from "../models/requestDetail";
import {RequestCreate} from "../models/requestCreate";

@Injectable()
export class RoleListService {


    constructor(private http: HttpClient) {
    }

    getRoleList(url: string) : Observable<Role[]> {
        return this.http.get(url).map(data=>{
            let roleList = data;
            if (roleList instanceof Array) {
                return roleList.map(function (role: any) {
                    return {name: role.name, salary: role.salary, start_date: role.start_date,
                        expire_date: role.expire_date, description: role.description, parameters: role.parameters,
                    casting: role.casting, id: role.id};
                });
            }
        });
    }
    CreateRequest(request: RequestCreate){
        const body = { role_id: request.role_id, employee_id: request.employee_id};
        console.log(body);
        return this.http.post('http://192.168.1.64:8000/new_request/', body)

    }
}