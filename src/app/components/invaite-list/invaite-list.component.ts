import { Component, OnInit} from '@angular/core';
import {InvaiteList} from "./invaite-list";
import {InvaiteListService} from "./invaite-list.service";


@Component({
    selector: 'invite-list-app',
    template: `<ul>
        <li *ngFor="let invite of invites">
                <p>Дата создания заявки: {{invite?.creation_date}}</p>
                <p>приглашаю: {{invite?.employee}}</p>
                <p>приглашает: {{invite?.creator}}</p>
                <p>роль: {{invite?.role}}</p>
        </li>
            </ul>
                `,
    providers: [InvaiteListService]
})
export class InvaiteListComponent implements OnInit{

    invites: InvaiteList;
    constructor(private httpService: InvaiteListService){}

    ngOnInit(){
        this.httpService.getInviteList().subscribe((data:InvaiteList) => this.invites=data);


    }

}