import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './models/user';
import {TestImg} from './models/testimg';
import {Host} from "./host";


@Injectable()
export class HttpService{

    constructor(private http: HttpClient){ }

    host: Host = new Host;
    path: string = this.host.host;

    getTokenHeaders(){
        // localStorage.setItem('token', 'e130e8a775169088c0c132142bb02b8b5cd7ede3');
        let token: string;
        token = 'Token ' + localStorage.getItem('token');
        return {'Authorization': token};
    }

    getData(){
        const headers = {'Authorization': 'Token e130e8a775169088c0c132142bb02b8b5cd7ede3'};
        return this.http.get(this.path+'userview/1/', {headers: headers})
    }

    postAuth(user: User){
        const body = {username: user.username, password: user.password};
        return this.http.post(this.path+'login/', body);
    }
    postImg(formData: FormData){
        console.log('send data');
        const body = formData;
        return this.http.post(this.path+'testimgviewnew/', body);
    }

    getEmployee(user_id: string){
        return this.http.get(this.path+'employee/' + user_id + '/');
    }
}
