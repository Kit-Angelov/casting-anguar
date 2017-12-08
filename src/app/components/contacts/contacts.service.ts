import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Contacts} from "./contacts";
import {Host} from "../../host";


@Injectable()
export class ContactsService {
    host: Host = new Host;
    path: string = this.host.host;
    constructor (private http:HttpClient){}

    getContacts(url:string){
        return this.http.get(url)
    }
    postContacts(contacts: Contacts, user_id: string) {
        const body = {
            user_id: user_id,
            email: contacts.email,
            phone_number: contacts.phone_number
        };
        console.log(body);
        return this.http.post(this.path+"new_contacts/", body)
    }
}