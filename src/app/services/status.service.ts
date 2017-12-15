import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Status} from "../models/status";
import {Observable} from "rxjs/Observable";


@Injectable()
export class StatusService {
    constructor(private http: HttpClient){}
    getStatus(url:string){
    return this.http.get(url)
    }

    getStatuss(url: string) : Observable<Status[]> {
    return this.http.get(url).map(data=>{
        let usersList = data;
        if (usersList instanceof Array) {
            return usersList.map(function (status: any) {
                return {id: status.id,
                    name: status.name,
                    status_id: status.status_id};
            });
        }
    });
    }
}