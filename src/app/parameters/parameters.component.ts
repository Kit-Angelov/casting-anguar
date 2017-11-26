import {Component, OnInit} from '@angular/core';
import {Parameters} from './parameters';
import {Appearancetype} from "./appearancetype";
import {ParametersService} from "./parameters.service";
import {City} from "./city";
import {Country} from "./country";
import {Haircolor} from "./haircolor";
import {Gender} from "./gender";
import {Eyecolor} from "./eyecolor";
import {FormGroup, FormControl} from "@angular/forms";
import {Employmenttype} from "./employmenttype";

@Component({
    selector: 'parameters-app',
    template: `<div class="col-md-6 col-md-offset-3">
                <input type="text" [(ngModel)]="parameters.age" class="form-control" />
                <input type="text" [(ngModel)]="parameters.growth" class="form-control" />
                <input type="text" [(ngModel)]="parameters.clothsize" class="form-control" />
                <input type="text" [(ngModel)]="parameters.chestsize" class="form-control" />
                <input type="text" [(ngModel)]="parameters.waistsize" class="form-control" />
                <input type="text" [(ngModel)]="parameters.thighsize" class="form-control" />
                <input type="text" [(ngModel)]="parameters.footsize" class="form-control" />
                <input type="text" [(ngModel)]="parameters.necksize" class="form-control" />
                <input type="text" [(ngModel)]="parameters.headsize" class="form-control" />
                <input type="checkbox" [(ngModel)]="tatu" class="form-control" />
                <input type="checkbox" [(ngModel)]="piercing" class="form-control" />
                <select [(ngModel)]="parameters.appearancetype" ><option *ngFor="let appearancetype of appearancetypes" value="{{appearancetype?.id}}">{{appearancetype?.name}}</option></select>
                <select [(ngModel)]="parameters.haircolor"><option *ngFor="let haircolor of haircolors" value="{{haircolor?.id}}">{{haircolor?.name}}</option></select>
                <select [(ngModel)]="parameters.city"><option *ngFor="let city of citys" value="{{city?.id}}">{{city?.name}}</option></select>
                <select [(ngModel)]="parameters.eyecolor"><option *ngFor="let eyecolor of eyecolors" value="{{eyecolor?.id}}">{{eyecolor?.name}}</option></select>
                <select [(ngModel)]="parameters.gender"><option *ngFor="let gender of genders" value="{{gender?.id}}">{{gender.name}}</option></select>
                <select [(ngModel)]="parameters.country"><option *ngFor="let country of countrys" value="{{country?.id}}">{{country?.name}}</option></select>
                <select [(ngModel)]="employmenttype_elem"><option *ngFor="let employmenttype of employmenttypes" value="{{employmenttype?.id}}">{{employmenttype?.name}}</option></select>
                <div class="form-group">
                    <button class="btn btn-default" (click)="submit(parameters)">Отправить</button>
                </div>
    </div>`,
    providers: [ParametersService]
})
export  class  ParametersComponent implements OnInit{
    countrys: Country[] = [];
    haircolors: Haircolor[] = [];
    employmenttypes: Employmenttype[] = [];
    genders: Gender[] = [];
    eyecolors: Eyecolor[] =[];
    citys: City[] = [];
    appearancetypes: Appearancetype[] = [];
    parameters: Parameters = new Parameters();
    tatu: boolean;
    piersing: boolean;
    received: number;
    employmenttype_elem: number;
    constructor(private httpService:ParametersService){}

     ngOnInit() {
        this.httpService.getCountry().subscribe(data => this.countrys=data);
        this.httpService.getHaircolor().subscribe(data => this.haircolors=data);
        this.httpService.getGender().subscribe(data => this.genders=data);
        this.httpService.getEyecolor().subscribe(data => this.eyecolors=data);
        this.httpService.getCity().subscribe(data => this.citys=data);
        this.httpService.getAppearancetype().subscribe(data => this.appearancetypes=data);
        this.httpService.getEmploymenttype().subscribe(data => this.employmenttypes=data);
        this.tatu = false;
        this.piersing = false;
    }
    submit(parameters:Parameters){
        this.parameters.employmenttype.push(this.employmenttype_elem);
        if (this.tatu == true){
            this.parameters.tatu = 'true';
        }
        else {
            this.parameters.tatu = 'false';
        }
        if (this.piersing == true){
            this.parameters.piercing = 'true';
        }
        else {
            this.parameters.piercing = 'false';
        }
        console.log(this.parameters.tatu);
        console.log(this.parameters.piercing);
        let user_id: string;
        user_id = localStorage.getItem('user_id');
        this.httpService.postParameter(parameters, user_id)
                 .subscribe(
                     data => {this.received = data["parameters_id"]},
                 );
    }
}


