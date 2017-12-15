import {Component, OnInit} from "@angular/core";
import {Employer} from "../../models/employer";
import {EmployerProfileService} from "../../services/employer-profile.service";

@Component({
    selector: 'employer-profile-app',
    template: `<p>логин{{employer?.username}}</p>
    <p>имя{{employer?.first_name}}</p>
    <p>фамилия{{employer?.last_name}}</p>
    <p>ава{{employer?.avatar}}</p>
    `,
    providers: [EmployerProfileService]
})
export class EmployerProfileComponent implements OnInit{

    url: string = localStorage.getItem('user_id');
    employer: Employer;
    constructor(private httpService: EmployerProfileService){}

    ngOnInit(){
        this.httpService.getCreator(this.url).subscribe((data:Employer)=> this.employer=data )
    }

}