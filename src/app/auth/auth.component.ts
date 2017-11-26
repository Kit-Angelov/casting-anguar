import { Component, OnInit} from '@angular/core';
import { HttpService} from '../http.service';
import {User} from '../user';
import {Token} from '../token';

@Component({
    selector: 'auth-app',
    template: `
                <div class="form-group">
                    <label>Name</label>
                    <input class="form-control" name="username" [(ngModel)]="user.username" />
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <input class="form-control" type="password" name="password" [(ngModel)]="user.password" />
                </div>
                <div class="form-group">
                    <button class="btn btn-default" (click)="submit(user)">Отправить</button>
                </div>
                <div *ngIf="done">
                    <div>Получено от сервера:</div>
                    <div>Имя: {{receivedUser.token}}</div>
                </div>`,
    providers: [HttpService]
})
export class AuthComponent {
    user: User=new User(); // данные вводимого пользователя

    receivedUser: Token; // полученный пользователь
    done: boolean = false;
    constructor(private httpService: HttpService){}
    submit(user: User){
            this.httpService.postAuth(user)
                .subscribe(
                    (data: Token) => {
                        this.receivedUser = data;
                        this.done = true;
                    },
                    error => console.log(error)
                );
    }
}
