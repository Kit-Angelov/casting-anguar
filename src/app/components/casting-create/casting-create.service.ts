import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {CastingType} from "./casting-type";
import {Observable} from "rxjs/Observable";
import {Owner} from "./owner";
import {CastingCreate} from "./casting-create";
import {Host} from "../../host";


@Injectable()
export  class CastingCreateService {
    host: Host = new Host;
    path: string = this.host.host;
    constructor(private http: HttpClient){ }
    getCasting_Type() : Observable<CastingType[]> {
        return this.http.get(this.path+"castingtype/").map(data=>{
            let usersList = data;
            if (usersList instanceof Array) {
                return usersList.map(function (castingType: any) {
                    return {name: castingType.name, id: castingType.id};
                });
            }
        });
    }
    getUser_list() : Observable<Owner[]> {
        return this.http.get(this.path+"regemployer/").map(data=>{
            let owner = data;
            if (owner instanceof Array) {
                return owner.map(function (castingOwnder: any) {
                    return {username: castingOwnder.username, password: castingOwnder.password};
                });
            }
        });
    }
    postCasting(addCasting: CastingCreate) {
        const body = {
            name: addCasting.name,
            img: addCasting.img,
            description: addCasting.description,
            type: addCasting.type,
            ownder: addCasting.ownder
        };
        console.log(body);
        return this.http.post(this.path+"casting/", body)

    }

}