import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'logout-app',
    template: ``,
    providers: []
})
export class LogoutComponent {
    constructor(private router: Router){}
    ngOnInit(){
        localStorage.setItem('token', '');
        localStorage.setItem('user_id', '');
        localStorage.setItem('user_type', '');
        this.router.navigate(['/']);
    }
}
