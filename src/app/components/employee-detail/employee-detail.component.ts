import {Component, OnInit} from "@angular/core";
import {EmployeeDetailService} from "../../services/employee-detail.service";
import {ContactsService} from "../../services/contacts.service";
import {Employee} from "../../models/employee";
import {Contacts} from "../../models/contacts";
import {ParametersService} from "../../services/parameters.service";
import {ParametersDetail} from "../../models/parametersDetail";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector:'employee-detail-app',
    templateUrl: './employee-detail.component.html',
    providers:[EmployeeDetailService,ContactsService,ParametersService]
})

export class EmployeeDetailComponent implements  OnInit {
    user_id: string = localStorage.getItem('user_id');
    profile: Employee = new Employee;
    param: string;
    parameters: ParametersDetail = new ParametersDetail;
    cont: string;
    contacts: Contacts = new Contacts;

    constructor(private employeeDetailService: EmployeeDetailService,
                private contactsService: ContactsService,
                private parametersService: ParametersService,
                private activateRoute: ActivatedRoute) {
        this.user_id = this.activateRoute.snapshot.params['id'];
    }

    ngOnInit() {
        this.employeeDetailService.getEmployee(this.user_id).subscribe((data: Employee) => {
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
    }
}