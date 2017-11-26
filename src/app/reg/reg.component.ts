import { Component} from '@angular/core';
import { HttpService} from '../http.service';
import {User} from '../user';

@Component({
    selector: 'reg-app',
    template: `<div class="form-group">
                    <label>Type</label>
                    <input class="form-control" #type_id type="number" name="type_id" placeholder="type_id" />
                </div>
                <div class="form-group">
                    <label>Name</label>
                    <input class="form-control" name="username" [(ngModel)]="user.username" />
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <input class="form-control" type="password" name="password" [(ngModel)]="user.password" />
                </div>
                <div class="form-group">
                    <button class="btn btn-default" (click)="submit(user, type_id.value)">Отправить</button>
                </div>
                <div *ngIf="done">
                    <div>Получено от сервера:</div>
                    <div>Имя: {{receivedUser.username}}</div>
                    <div>Возраст: {{receivedUser.password}}</div>
                </div>`,
    providers: [HttpService]
})
export class RegComponent {

    user: User=new User(); // данные вводимого пользователя

    receivedUser: User; // полученный пользователь
    done: boolean = false;
    constructor(private httpService: HttpService){}
    submit(user: User, type_id: number){
        if (type_id == 1) {
            this.httpService.postData(user)
                .subscribe(
                    (data: User) => {
                        this.receivedUser = data;
                        this.done = true;
                    },
                    error => console.log(error)
                );
        }
        else {
            console.log(user);
        }
    }
}