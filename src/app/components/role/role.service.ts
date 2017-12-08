import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Host} from "../../host";


@Injectable()
export class RoleService{
    host: Host = new Host;
    path: string = this.host.host;
    constructor(private http: HttpClient){ }

    getRole(url: string){
        return this.http.get(url)
    }
}