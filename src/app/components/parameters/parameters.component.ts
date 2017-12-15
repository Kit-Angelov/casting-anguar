import {Component, OnInit} from '@angular/core';
import {ParametersCreate} from '../../models/parametersCreate';
import {Appearancetype} from "../../models/appearancetype";
import {ParametersService} from "../../services/parameters.service";
import {City} from "../../models/city";
import {Country} from "../../models/country";
import {Haircolor} from "../../models/haircolor";
import {Gender} from "../../models/gender";
import {Eyecolor} from "../../models/eyecolor";
import {FormGroup, FormControl} from "@angular/forms";
import {Employmenttype} from "../../models/employmenttype";
import {host} from "../../config";

@Component({
    selector: 'parameters-app',
    template: `<div class="col-md-4 col-md-offset-4">
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
    parameters: ParametersCreate = new ParametersCreate();
    tatu: boolean;
    piersing: boolean;
    received: number;
    employmenttype_elem: number;
    constructor(private httpService:ParametersService){}

     ngOnInit() {
         this.httpService.getCountry(host+'country/').subscribe(data => this.countrys=data);
         this.httpService.getHaircolor(host+'haircolor/').subscribe(data => this.haircolors=data);
         this.httpService.getGender(host+'gender/').subscribe(data => this.genders=data);
         this.httpService.getEyecolor(host+'eyecolor/').subscribe(data => this.eyecolors=data);
         this.httpService.getCity(host+'city/').subscribe(data => this.citys=data);
         this.httpService.getAppearancetype(host+'appearancetype/').subscribe(data => this.appearancetypes=data);
         this.httpService.getEmploymenttype(host+'employmenttype/').subscribe(data => this.employmenttypes=data);
        this.tatu = false;
        this.piersing = false;
    }
    submit(parameters:ParametersCreate){
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
        this.httpService.postParameter(parameters, user_id, host+'new_parameters/')
                 .subscribe(
                     data => {this.received = data["parameters_id"]},
                 );
    }
}


