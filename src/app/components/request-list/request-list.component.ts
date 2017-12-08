import {Request_list} from "./request_list";
import {Component, OnInit} from "@angular/core";
import {RequestListService} from "./request-list.service";


@Component({
    selector:'request-app',
    template:`<ul>
         <li *ngFor="let request of requests">
            <p>дата: {{request?.creation_date}}</p>
            <p>кто: {{request?.role}}</p>
            <p>кому: {{request?.employee}}</p>
            <p>статус {{request?.status}}</p>
        </li>
            </ul>
    `,
    providers:[RequestListService]
})

export class RequestListComponent implements OnInit{

    user_id: string;
    requests:Request_list;

    constructor(private httpService:RequestListService){    }


    ngOnInit(){
        this.user_id = localStorage.getItem('user_id');
        this.httpService.getRequest(this.user_id).subscribe((data: Request_list)=> this.requests=data)
    }
}