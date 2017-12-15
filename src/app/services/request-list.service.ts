import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {filter} from "rxjs/operators";
import {Observable} from "rxjs/Observable";
import {RequestDetail} from "../models/requestDetail";

@Injectable()
export class RequestListService{
    constructor(private http: HttpClient){ }

    getRequest(url: string){
        return this.http.get(url)
    }
    getRequestLists(url: string) : Observable<RequestDetail[]> {
        return this.http.get(url).map(data=>{
            let roleList = data;
            if (roleList instanceof Array) {
                return roleList.map(function (request: any) {
                    return {creation_date: request.creation_date, role: request.role, employee: request.employee,
                        status: request.status, url: request.url};
                });
            }
        });
    }
}