import {CastingCreate} from "./casting-create";
import {Component, OnInit} from "@angular/core";
import {Owner} from "./owner";
import {CastingType} from "./casting-type";
import {CastingCreateService} from "./casting-create.service";



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
    castingOwnders: Owner[] = [];
    castingTypes: CastingType[] = [];
    addCasting: CastingCreate = new CastingCreate();
    receivedUser: CastingCreate;


constructor(private httpService:CastingCreateService){}


        ngOnInit(){
            this.httpService.getUser_list().subscribe(data => this.castingOwnders=data);
            this.httpService.getCasting_Type().subscribe(data => this.castingTypes=data);

    }
    submit(addCasting:CastingCreate){

        this.httpService.postCasting(addCasting)
            .subscribe(
                (data: CastingCreate) => {this.receivedUser = data},
            );


    }







}
