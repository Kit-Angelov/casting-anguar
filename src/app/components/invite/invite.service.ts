import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Host} from "../../host";


@Injectable()
export class InviteService{
    host: Host = new Host;
    path: string = this.host.host;
    constructor(private http: HttpClient){ }

    getInvite(){
        return this.http.get(this.path+'invite/3/')
    }
}