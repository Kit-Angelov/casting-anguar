import {Component, OnInit} from "@angular/core";
import {PortfolioList} from "./portfolio-list";
import {PortfolioListService} from "./portfolio-list.service";
import {EmployeeProfile} from "../employee-profile/employee-profile";
import {EmployeeProfileService} from "../employee-profile/employee-profile.service";



@Component({
    selector:'portfolio-list-app',
    template:`<ul>
        <li *ngFor="let portfoliolist of portfolio_array">
        <p>имя: {{portfoliolist?.name}}</p>
            <p>начало: {{portfoliolist?.start_date}}</p>
            <p>окончание: {{portfoliolist?.finish_date}}</p>
            <p>описание: {{portfoliolist?.description}}</p>
            <p>кто то: {{empl?.username}}</p></li></ul>`,
    providers:[PortfolioListService, EmployeeProfileService]
})



export class PortfolioListComponent implements OnInit{
    sozdetel:string;
    portfoliolists:PortfolioList;
    empl:EmployeeProfile;
    elem_portfolio: any;
    portfolio_array: any;
    employee: EmployeeProfile = new EmployeeProfile;

    constructor(private httpService: PortfolioListService,
                private employeeService : EmployeeProfileService){    }


    ngOnInit(){
    //     this.httpService.getPortfoliolist().subscribe(data => this.portfoliolists=data);
    //     for (let item of this.portfoliolists) {
    //          this.elem_portfolio.push({employee: item.employee, name: item.name});
    //     for (let elem of this.elem_portfolio){
    //         this.httpService.getData(elem['employee']).subscribe(data => this.employee);
    //         this.portfolio_array.push({name: elem['name'], username: this.employee['username']})
    //     }
    //  }
    //
    //
    }
}