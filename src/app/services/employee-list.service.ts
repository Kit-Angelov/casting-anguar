import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Employee} from "../models/employee";
import {Observable} from "rxjs/Observable";

@Injectable()
export class EmployeeListService {

    constructor(private http: HttpClient) {
    }

    getEmploees(url: string) : Observable<Employee[]> {
        return this.http.get(url).map(data=>{
            let usersList = data;
            if (usersList instanceof Array) {
                return usersList.map(function (employee: any) {
                    return {url: employee.url,
                        username: employee.username,
                        is_active: employee.is_active,
                        check_params: employee.check_params,
                        check_contacts: employee.check_contacts,
                        id: employee.id,
                        avatar: employee.avatar,
                        param_list: employee.param_list,
                        first_name: employee.first_name,
                        last_name: employee.last_name,
                        email: employee.email,
                        date_joined: employee.date_joined,
                        contacts: employee.contacts};
                });
            }
        });
    }

    getEmployeeDetail(url: string){
        return this.http.get(url)
    }
}