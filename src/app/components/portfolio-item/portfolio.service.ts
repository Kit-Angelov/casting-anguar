import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Host} from "../../host";

@Injectable()
export class PortfolioService{
    host: Host = new Host;
    path: string = this.host.host;
    constructor(private http: HttpClient){ }

    getPortfolio(){
        return this.http.get(this.host+'portfolioelem/1/')
    }
}