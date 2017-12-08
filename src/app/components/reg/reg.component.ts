import { Component} from '@angular/core';
import { RegService } from './reg.service';
import {HttpService} from "../../http.service";
import {User} from '../../models/user';
import {Auth} from '../../models/auth';
import {Router} from '@angular/router';
import { ActivatedRoute} from '@angular/router';

@Component({
    selector: 'reg-app',
    templateUrl: 'reg.component.html',
    providers: [RegService, HttpService]
})
export class RegComponent {
    state: number;

    type: boolean = true;

    user: User=new User();

    receivedUser: User;
    receivedAuth: Auth;
    done: boolean = false;
    constructor(private regService: RegService,
                private httpService: HttpService,
                private router: Router,
                private activateRoute: ActivatedRoute){
        this.state = activateRoute.snapshot.params['state'];
    }

    submit(user: User, type: boolean){
        if (type) {
            this.regService.postDataEmployee(user)
                .subscribe(
                    (data: User) => {
                        this.receivedUser = data;
                        this.httpService.postAuth(user)
                            .subscribe(
                                (data: Auth) => {
                                    this.receivedAuth = data;
                                    this.done = true;
                                    localStorage.setItem('token', this.receivedAuth.token);
                                    localStorage.setItem('user_type', '1');
                                    localStorage.setItem('user_id', this.receivedUser.id.toString());
                                    this.router.navigate(['']);
                                },
                                error => { console.log(error);
                                this.router.navigate(['']);
                                },
                            );
                    },
                    error => {console.log(error);
                        this.router.navigate(['']);
                    },
                );
        }
        else {
            this.regService.postDataEmployer(user)
                .subscribe(
                    (data: User) => {
                        this.receivedUser = data;
                        this.done = true;
                        this.httpService.postAuth(user)
                            .subscribe(
                                (data: Auth) => {
                                    this.receivedAuth = data;
                                    this.done = true;
                                    localStorage.setItem('token', this.receivedAuth.token);
                                    localStorage.setItem('user_type', '2');
                                    localStorage.setItem('user_id', this.receivedUser.id.toString());
                                    this.router.navigate(['']);
                                },
                                error => { console.log(error);
                                    this.router.navigate(['']);
                                },
                            );
                    },
                    error => {
                        console.log(error);
                        this.router.navigate(['']);
                    },
                );
        }
    }
}