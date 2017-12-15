import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Contacts} from "../models/contacts";


@Injectable()
export class ContactsService {
    constructor (private http:HttpClient){}

    getContacts(url:string){
        return this.http.get(url)
    }
    postContacts(contacts: Contacts, user_id: string, url:string) {
        const body = {
            user_id: user_id,
            email: contacts.email,
            phone_number: contacts.phone_number
        };
        console.log(body);
        return this.http.post(url, body)
    }
}