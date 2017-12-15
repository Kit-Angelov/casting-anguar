import { Component, OnInit} from '@angular/core';
import { HttpService} from './http.service';

@Component({
    selector: 'my-app',
    template: `
                <router-outlet></router-outlet>
                `,
    providers: [HttpService],
    styleUrls: ['./static/css/app.component.css']
})
export class AppComponent {

}
