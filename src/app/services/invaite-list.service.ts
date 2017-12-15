import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Invite} from "../models/invite";
import {Observable} from "rxjs/Observable";

@Injectable()
export class InvaiteListService{
    constructor(private http: HttpClient){ }

    getInviteList(url: string){
        return this.http.get(url)
    }
    getInviteLists(url: string) : Observable<Invite[]> {
        return this.http.get(url).map(data=>{
            let roleList = data;
            if (roleList instanceof Array) {
                return roleList.map(function (invite: any) {
                    return {url: invite.url,
                        creation_date: invite.creation_date,
                        employee: invite.employee,
                        employer: invite.employer,
                        role: invite.role};
                });
            }
        });
    }
}