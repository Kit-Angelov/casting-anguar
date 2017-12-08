import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";



@Injectable()
export class StatusService {
    constructor(private http: HttpClient){}

        getStatus(url:string){
        return this.http.get(url)
        }
}