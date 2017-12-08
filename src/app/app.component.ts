import { Component, OnInit} from '@angular/core';
import { HttpService} from './http.service';

@Component({
    selector: 'my-app',
    template: `<div class="main_wrapper">
                <router-outlet></router-outlet>
                </div>`,
    providers: [HttpService],
    styleUrls: ['./static/css/app.component.css']
})
export class AppComponent {

}
