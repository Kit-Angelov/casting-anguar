import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Host} from "../../host";


@Injectable()
export class EmployeeProfileService{

    host: Host = new Host;
    path: string = this.host.host;

    service_name: string = 'employee/';

    constructor(public http: HttpClient){ }

    getEmployee(id:string){
        return this.http.get(this.path + this.service_name + id + '/');
    }

}