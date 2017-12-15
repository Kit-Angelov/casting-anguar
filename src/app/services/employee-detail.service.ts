import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class EmployeeDetailService{

    constructor(public http: HttpClient){ }

    getEmployee(url: string){
        return this.http.get(url);
    }

}