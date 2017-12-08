import {Component, OnInit} from '@angular/core';
import {ContactsService} from "./contacts.service";
import {Contacts} from "./contacts";


@Component({
    selector: 'contacts-app',
    template: `<div class="col-md-4 col-md-offset-4">
                <input type="email" [(ngModel)]="contacts.email" class="form-control" />
                <input type="tel" [(ngModel)]="contacts.phone_number" class="form-control" />
                <button class="btn btn-default" (click)="submit(contacts)">Отправить</button>
    </div>`,
    providers: [ContactsService]
})
export  class  ContactsComponent implements OnInit{
    contacts: Contacts = new Contacts;
    received: string;
    constructor(private httpService:ContactsService){}

    ngOnInit() {
    }
    submit(contacts:Contacts){
        console.log(this.contacts.email);
        console.log(this.contacts.phone_number);
        let user_id: string;
        user_id = localStorage.getItem('user_id');
        this.httpService.postContacts(contacts, user_id)
            .subscribe(
                data => {this.received = data["contacts_id"]},
            );
    }
}


