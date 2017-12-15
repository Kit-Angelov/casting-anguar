import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {CastingType} from "../models/casting-type";
import {Observable} from "rxjs/Observable";
import {Casting} from "../models/casting";


@Injectable()
export  class CastingCreateService {
    constructor(private http: HttpClient){ }
    getCasting_Type(url: string) : Observable<CastingType[]> {
        return this.http.get(url).map(data=>{
            let usersList = data;
            if (usersList instanceof Array) {
                return usersList.map(function (castingType: any) {
                    return {name: castingType.name, id: castingType.id};
                });
            }
        });
    }
    postCasting(addCasting: Casting, url:string) {
        const body = {
            name: addCasting.name,
            img: addCasting.image,
            description: addCasting.description,
            type: addCasting.type,
            owner: addCasting.owner
        };
        console.log(body);
        return this.http.post(url, body)

    }

}