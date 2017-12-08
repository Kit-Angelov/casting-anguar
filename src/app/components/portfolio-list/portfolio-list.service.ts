import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Host} from "../../host";

@Injectable()
export class PortfolioListService{
    host: Host = new Host;
    path: string = this.host.host;
    constructor(private http: HttpClient){ }

    getPortfoliolist(){
        return this.http.get(this.path+'portfolioelem/')
    }
}