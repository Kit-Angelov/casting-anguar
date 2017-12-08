import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EmployeeList} from "./employee-list";
import {Observable} from "rxjs/Observable";
import {Host} from "../../host";

@Injectable()
export class EmployeeListService {

    host: Host = new Host;
    path: string = this.host.host;
    constructor(private http: HttpClient) {
    }

    getEmploees() : Observable<EmployeeList[]> {
        return this.http.get(this.path+"employee/").map(data=>{
            let usersList = data;
            if (usersList instanceof Array) {
                return usersList.map(function (employer: any) {
                    return {url: employer.url,
                        username: employer.username,
                        avatar: employer.avatar,
                        // check_params: employer.check_params,
                        // check_contacts: employer.check_contacts
                        };
                });
            }
        });
    }
}