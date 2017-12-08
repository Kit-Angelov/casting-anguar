import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Host} from "../../host";

@Injectable()
export class CastingDetailService{

    host: Host = new Host;
    path: string = this.host.host;
    service: string = 'castinglist/';
    constructor(private http: HttpClient){ }

    getDetail(url: string){
        return this.http.get(url)
    }
    getDetailToId(id: string){
        return this.http.get(this.path+this.service+id+'/')
    }
    getType(url:string){
        return this.http.get(url)
    }
    getOwnder(url:string){
        return this.http.get(url)
    }
}