import { Component, OnInit} from '@angular/core';
import { HttpService} from '../../http.service';
import {User} from '../../models/user';
import {Auth} from '../../models/auth';
import {Employee} from "../../models/employee";
import {Router} from '@angular/router';

@Component({
    selector: 'auth-app',
    templateUrl: 'auth.component.html',
    providers: [HttpService]
})
export class AuthComponent {
    user: User=new User();
    employee: Employee = new Employee();
    receivedAuth: Auth;
    done: boolean = false;
    constructor(private httpService: HttpService, private router: Router){}
    submit(user: User){
            this.httpService.postAuth(user)
                .subscribe(
                    (data: Auth) => {
                        this.receivedAuth = data;
                        this.done = true;
                        localStorage.setItem('token', this.receivedAuth.token);
                        localStorage.setItem('user_type', this.receivedAuth.user_type);
                        localStorage.setItem('user_id', this.receivedAuth.user_id);

                        this.router.navigate(['']);
                    },
                    error => {console.log(error);
                    this.router.navigate(['']);
                    },
                );
    }
}
