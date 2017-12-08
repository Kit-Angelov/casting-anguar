import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Host} from "../../host";
import {filter} from "rxjs/operators";

@Injectable()
export class RequestListService{
    host: Host = new Host;
    path: string = this.host.host;
    constructor(private http: HttpClient){ }

    getRequest(user_id: string){
        return this.http.get(this.path+'request/'+'?'+'employee_id='+user_id)
    }
}