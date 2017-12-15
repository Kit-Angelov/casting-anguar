import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class RoleService{
    constructor(private http: HttpClient){ }

    getRole(url: string){
        return this.http.get(url)
    }
}