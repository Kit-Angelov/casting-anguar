import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";


@Injectable()
export class EmployerProfileService{

    constructor(private http: HttpClient){}

    getCreator(url:string){
        return this.http.get(url)
    }
}