import { Component, OnInit} from '@angular/core';
import { HttpService} from '../http.service';

@Component({
    selector: 'main-app',
    templateUrl: 'main.component.html',
    providers: [HttpService]
})
export class MainComponent {
}
