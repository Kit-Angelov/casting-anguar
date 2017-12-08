import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CastingList} from "./casting-list";
import {Observable} from "rxjs/Observable";
import {Host} from "../../host";


@Injectable()
export class CastingListService {
    host: Host = new Host;
    path: string = this.host.host;

    constructor(private http: HttpClient) {
    }


    getCasting(filter: string) : Observable<CastingList[]> {
        return this.http.get(this.path+"castinglist/"+filter).map(data=>{
            let usersList = data;
            if (usersList instanceof Array) {
                return usersList.map(function (castingInfo: any) {
                    return {url: castingInfo.url,
                        id: castingInfo.id,
                        name: castingInfo.name,
                        image: castingInfo.image,
                        type: castingInfo.type,
                        owner: castingInfo.owner,
                        role_set: castingInfo.role_set};
                });
            }
        });
    }

}