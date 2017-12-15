import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CastingDetailService{

    constructor(private http: HttpClient){ }

    getDetail(url: string){
        return this.http.get(url)
    }
    getType(url:string){
        return this.http.get(url)
    }
    getOwner(url:string){
        return this.http.get(url)
    }
}