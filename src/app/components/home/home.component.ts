import { Component, OnInit} from '@angular/core';
import { HttpService} from '../../http.service';

@Component({
    selector: 'home-app',
    templateUrl: './home.component.html',
    providers: [HttpService],
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    state: number;
    visibility: boolean;
    // переключаем переменную
    toggle_employee(){
        this.state = 1;
        this.visibility=!this.visibility;
    }
    toggle_employer(){
        this.visibility=!this.visibility;
        this.state = 2;
    }
    toggle_home(){
        this.state = 0;
        this.visibility=!this.visibility;
    }
    ngOnInit(){
        this.state = 0;
        this.visibility = true;
        console.log('state' + this.state);
        console.log('visibil' + this.visibility);
    }
}