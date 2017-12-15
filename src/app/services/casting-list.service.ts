import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Casting} from "../models/casting";
import {Observable} from "rxjs/Observable";

@Injectable()
export class CastingListService {

    constructor(private http: HttpClient) {
    }


    getCasting(url: string) : Observable<Casting[]> {
        return this.http.get(url).map(data=>{
            let usersList = data;
            if (usersList instanceof Array) {
                return usersList.map(function (castingInfo: any) {
                    return {url: castingInfo.url,
                        id: castingInfo.id,
                        name: castingInfo.name,
                        image: castingInfo.image,
                        description: castingInfo.description,
                        type: castingInfo.type,
                        owner: castingInfo.owner,
                        role_set: castingInfo.role_set};
                });
            }
        });
    }

}