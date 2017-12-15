import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class PortfolioListService{

    constructor(private http: HttpClient){ }

    getPortfoliolist(url: string){
        return this.http.get(url)
    }
}