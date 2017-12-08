import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../models/user';
import {Host} from "../../host";

@Injectable()
export class RegService{
    host: Host = new Host;
    path: string = this.host.host;
    constructor(private http: HttpClient){ }

    postDataEmployee(user: User){
        const body = {username: user.username, password: user.password};
        return this.http.post(this.host+'employee/', body);
    }

    postDataEmployer(user: User){
        const body = {username: user.username, password: user.password};
        return this.http.post(this.host+'employer/', body);
    }
}