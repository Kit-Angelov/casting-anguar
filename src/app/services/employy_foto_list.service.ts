import {Employee_foto} from "../models/employee_foto";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";



@Injectable()
export class Employy_foto_listService {
    constructor(private http:HttpClient){}

    getFoto(url: string){
        return this.http.get(url)
    }
    getFotos(url: string) : Observable<Employee_foto[]> {
        return this.http.get(url).map(data=>{
            let usersList = data;
            if (usersList instanceof Array) {
                return usersList.map(function (photolist: any) {
                    return {url: photolist.url,
                        photo: photolist.photo,
                        employee: photolist.employee
                       };
                });
            }
        });
    }
}