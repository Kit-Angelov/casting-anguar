import {Component, OnInit} from "@angular/core";
import {EmployeeProfileService} from "../../services/employee-profile.service";
import {ContactsService} from "../../services/contacts.service";
import {Employee} from "../../models/employee";
import {Contacts} from "../../models/contacts";
import {ParametersService} from "../../services/parameters.service";
import {ParametersDetail} from "../../models/parametersDetail";
import {ActivatedRoute} from "@angular/router";
import {Employy_foto_listService} from "../../services/employy_foto_list.service";
import {Employee_foto} from "../../models/employee_foto";
import {PortfolioService} from "../../services/portfolio.service";
import {Portfolio} from "../../models/portfolio";

@Component({
    selector:'employee-profile-app',
    templateUrl: './employee-profile.component.html',
    providers:[EmployeeProfileService,ContactsService,ParametersService,Employy_foto_listService,PortfolioService]
})

export class EmployeeProfileComponent implements  OnInit {
    user_id: string = localStorage.getItem('user_id');
    profile: Employee = new Employee;
    param: string;
    parameters: ParametersDetail = new ParametersDetail;
    cont: string;
    photos:Employee_foto[]=[];
    contacts: Contacts = new Contacts;
    portfolios: Portfolio[]=[];

    constructor(private employeeProfileService: EmployeeProfileService,
                private contactsService: ContactsService,
                private parametersService: ParametersService,
                private activateRoute: ActivatedRoute,
                private fotoService: Employy_foto_listService,
                private portfolioService: PortfolioService) {
        this.user_id = this.activateRoute.snapshot.params['id'];
    }

    ngOnInit() {
        this.employeeProfileService.getEmployee(this.user_id).subscribe((data: Employee) => {
            this.profile = data;
            if (this.profile.check_params){
                this.param = this.profile.param_list;
                this.parametersService.getParameters(this.param).subscribe((dataparam: ParametersDetail) => this.parameters = dataparam);
            }
            if (this.profile.check_contacts){
                this.cont = this.profile.contacts;
                this.contactsService.getContacts(this.cont).subscribe((datacontact: Contacts) => this.contacts = datacontact);
            }
        });
        this.fotoService.getFotos(this.user_id).subscribe(datafoto => this.photos = datafoto);
        this.portfolioService.getPortfolios(this.user_id).subscribe(portfoliodata=> this.portfolios =portfoliodata)

    }
}