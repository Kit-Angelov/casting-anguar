import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './user';
import {TestImg} from './testimg';


@Injectable()
export class HttpService{


    constructor(private http: HttpClient){ }

    getTokenHeaders(){
        // localStorage.setItem('token', 'e130e8a775169088c0c132142bb02b8b5cd7ede3');
        let token: string;
        token = 'Token ' + localStorage.getItem('token');
        return {'Authorization': token};
    }

    getData(){
        const headers = {'Authorization': 'Token e130e8a775169088c0c132142bb02b8b5cd7ede3'};

        return this.http.get('http://192.168.1.68:8000/userview/1/', {headers: headers})
    }

    // postData(user: User){
    //     const headers = new HttpHeaders();
    //     headers.append('Authorization', 'Token e130e8a775169088c0c132142bb02b8b5cd7ede3');
    //     const body = {username: user.username, password: user.password};
    //     return this.http.post('http://192.168.1.68:8000/usernew/', body, {headers});
    // }
    postData(user: User){
        const body = {username: user.username, password: user.password};
        return this.http.post('http://192.168.1.68:8000/userview/', body);
    }
    postAuth(user: User){
        const body = {username: user.username, password: user.password};
        return this.http.post('http://192.168.1.68:8000/login/', body, {headers: this.getTokenHeaders()});
    }
    postImg(formData: FormData){
        console.log('send data');
        const body = formData;
        return this.http.post('http://192.168.1.68:8000/testimgviewnew/', body);
    }
}
