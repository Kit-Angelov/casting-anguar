import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Portfolio} from "../models/portfolio";
import {Observable} from "rxjs/Observable";

@Injectable()
export class PortfolioService{
    constructor(private http: HttpClient){ }

    getPortfolio(url: string){
        return this.http.get(url)
    }
    getPortfolios(url: string) : Observable<Portfolio[]> {
        return this.http.get(url).map(data=>{
            let usersList = data;
            if (usersList instanceof Array) {
                return usersList.map(function (portfolio: any) {
                    return {name: portfolio.name,
                        start_date: portfolio.start_date,
                        finish_date: portfolio.finish_date,
                        description: portfolio.description,
                        employee: portfolio.employee
                    };
                });
            }
        });
    }
}