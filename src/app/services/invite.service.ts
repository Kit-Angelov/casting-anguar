import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Invite} from "../models/invite";


@Injectable()
export class InviteService{
    constructor(private http: HttpClient){ }

    getInvite(url: string){
        return this.http.get(url)
    }
    postInvite(invite : Invite, url: string){
        const body = {employee_id: invite.employee, employer_id: invite.employer, role_id: invite.role};
        console.log(body);
        return this.http.post(url, body);

    }

}