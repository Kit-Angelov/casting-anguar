import {Component, OnInit} from "@angular/core";
import {EmployeeProfileService} from "./employee-profile.service";
import {ContactsService} from "../contacts/contacts.service";
import {EmployeeProfile} from "./employee-profile";
import {Contacts} from "../contacts/contacts";
import {ParametersService} from "../parameters/parameters.service";
import {ParametersDetail} from "../parameters/parametersDetail";

@Component({
    selector:'employee-profile-app',
    templateUrl: './employee-profile.component.html',
    providers:[EmployeeProfileService,ContactsService,ParametersService]
})

export class EmployeeProfileComponent implements  OnInit {
    user_id: string = localStorage.getItem('user_id');
    profile: EmployeeProfile = new EmployeeProfile;
    param: string;
    parameters: ParametersDetail = new ParametersDetail;
    cont: string;
    contacts: Contacts = new Contacts;

    constructor(private employeeProfileService: EmployeeProfileService,
                private contactsService: ContactsService,
                private parametersService: ParametersService) {
    }

    ngOnInit() {
        this.employeeProfileService.getEmployee(this.user_id).subscribe((data: EmployeeProfile) => {
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