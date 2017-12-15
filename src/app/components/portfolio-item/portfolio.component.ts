import {Portfolio} from "../../models/portfolio";
import {PortfolioService} from "../../services/portfolio.service";
import {Component, OnInit} from "@angular/core";
import {host} from "../../config";


@Component({
    selector:'portfolio-item-app',
    template:`<p>Название кастинга: {{portfolio?.name}}</p>
            <p>Название роли: {{portfolio?.start_date}}</p>
            <p>Гонорар: {{portfolio?.finish_date}}</p>
            <p>Начало пробы на роль: {{portfolio?.start_date}}</p>
            <p>Окончание пробы: {{portfolio?.description}}</p>
            <p>Описание: {{portfolio?.employee?.username}}</p>`,
    providers:[PortfolioService]
})



export class PortfolioComponent implements OnInit{

    portfolio:Portfolio;

    constructor(private httpService:PortfolioService){    }


    ngOnInit(){
        this.httpService.getPortfolio(host+'portfolioelem/').subscribe((data:Portfolio)=> this.portfolio=data)
    }
}