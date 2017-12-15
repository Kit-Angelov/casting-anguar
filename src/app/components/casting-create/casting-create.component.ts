import {Casting} from "../../models/casting";
import {Component, OnInit} from "@angular/core";
import {CastingType} from "../../models/casting-type";
import {CastingCreateService} from "../../services/casting-create.service";
import { host } from "../../config";


@Component({
    selector: 'casting-create-app',
    template:`<input type="text" [(ngModel)]="addCasting.name" class="form-control" />
    <input type="file" [(ngModel)]="addCasting.img" (change)="FileChangeEvent($event)"  >
    <div *ngIf="CurrentFile">
        <img [src]="ImageSource">
    </div>
            <input type="text" [(ngModel)]="addCasting.description" class="form-control" />
    <select [(ngModel)]="addCasting.type">
    <option *ngFor="let castingType of castingTypes" value="{{castingType.id}}">{{castingType?.name}}</option>
    </select>
    <select [(ngModel)]="addCasting.ownder">
        <option *ngFor="let castingOwnder of castingOwnders" value="{{castingOwnder.password}}">{{castingOwnder?.username}}</option>
    </select>
    <button (click)="submit(addCasting)"> СОЗДАТЬ</button>`,
    providers: [CastingCreateService]
})


export class CastingCreateComponent implements OnInit{
    castingTypes: CastingType[] = [];
    addCasting: Casting = new Casting();
    receivedUser: Casting;
    user_id = localStorage.getItem('user_id');

constructor(private httpService:CastingCreateService){}


        ngOnInit(){
            this.httpService.getCasting_Type(host + 'castingtype/').subscribe(data => this.castingTypes=data);

    }
    submit(addCasting:Casting){

        this.httpService.postCasting(addCasting, host + 'castinglist/')
            .subscribe(
                (data: Casting) => {this.receivedUser = data},
            );


    }







}
