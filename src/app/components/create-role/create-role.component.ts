import {Component, OnInit} from "@angular/core";
import {Parameters} from "../parameters/parameters";
import {Appearancetype} from "../parameters/appearancetype";
import {ParametersService} from "../parameters/parameters.service";
import {City} from "../parameters/city";
import {Country} from "../parameters/country";
import {Haircolor} from "../parameters/haircolor";
import {Gender} from "../parameters/gender";
import {Eyecolor} from "../parameters/eyecolor";
import {Employmenttype} from "../parameters/employmenttype";
import {CreateRole} from "./create-role";
import {CreateRoleService} from "./create-role.service";
import {CastingList} from "../casting-list/casting-list";


@Component({
    selector:'create-role-app',
    template:`<div class="col-md-4 col-md-offset-4">
        <input type="text" [(ngModel)]="createrole.name" class="form-control" />
        <input type="number" [(ngModel)]="createrole.salary" class="form-control" />
        <input type="text" [(ngModel)]="createrole.start_date" class="form-control" />
        <input type="text" [(ngModel)]="createrole.expire_date" class="form-control" />
        <input type="text" [(ngModel)]="createrole.description" class="form-control" />
        <select [(ngModel)]="createrole.casting_id" >
            <option *ngFor="let casting of castings" value="{{casting?.id}}">{{casting?.name}}</option></select>
        
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
        <select [(ngModel)]="parameters.appearancetype" >
            <option *ngFor="let appearancetype of appearancetypes" value="{{appearancetype?.id}}">{{appearancetype?.name}}</option></select>
        <select [(ngModel)]="parameters.haircolor"><option *ngFor="let haircolor of haircolors" value="{{haircolor?.id}}">{{haircolor?.name}}</option></select>
        <select [(ngModel)]="parameters.city"><option *ngFor="let city of citys" value="{{city?.id}}">{{city?.name}}</option></select>
        <select [(ngModel)]="parameters.eyecolor"><option *ngFor="let eyecolor of eyecolors" value="{{eyecolor?.id}}">{{eyecolor?.name}}</option></select>
        <select [(ngModel)]="parameters.gender"><option *ngFor="let gender of genders" value="{{gender?.id}}">{{gender.name}}</option></select>
        <select [(ngModel)]="parameters.country"><option *ngFor="let country of countrys" value="{{country?.id}}">{{country?.name}}</option></select>
        <select [(ngModel)]="employmenttype_elem"><option *ngFor="let employmenttype of employmenttypes" value="{{employmenttype?.id}}">{{employmenttype?.name}}</option></select>
    </div>
        <div class="form-group">
            <button class="btn btn-default" (click)="submit(parameters,createrole)">Отправить</button>
        </div>`,
    providers:[CreateRoleService,ParametersService]
})



export  class  CreateRoleComponent implements OnInit{
    countrys: Country[] = [];
    createrole: CreateRole = new CreateRole();
    haircolors: Haircolor[] = [];
    castings: CastingList[] = [];
    employmenttypes: Employmenttype[] = [];
    genders: Gender[] = [];
    eyecolors: Eyecolor[] =[];
    citys: City[] = [];
    appearancetypes: Appearancetype[] = [];
    parameters: Parameters = new Parameters();
    tatu: boolean;
    piersing: boolean;
    role_id: number;
    paramrole_id:number;
    employmenttype_elem: number;
    constructor( private castingService: CreateRoleService,
                 private httpService: ParametersService) {}

    ngOnInit() {
        this.httpService.getCountry().subscribe(data => this.countrys=data);
        this.castingService.getCasting().subscribe(data => this.castings=data);
        this.httpService.getHaircolor().subscribe(data => this.haircolors=data);
        this.httpService.getGender().subscribe(data => this.genders=data);
        this.httpService.getEyecolor().subscribe(data => this.eyecolors=data);
        this.httpService.getCity().subscribe(data => this.citys=data);
        this.httpService.getAppearancetype().subscribe(data => this.appearancetypes=data);
        this.httpService.getEmploymenttype().subscribe(data => this.employmenttypes=data);
        this.tatu = false;
        this.piersing = false;
    }
    submit(parameters:Parameters, createrole:CreateRole){
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
        console.log(this.parameters);
        this.castingService.postRole(createrole).subscribe(
            data=>{
                this.role_id = data["role_id"];
                console.log(data["role_id"]);
                this.castingService.postParameter(parameters, this.role_id).subscribe(
                    data => {this.paramrole_id=data['paramrole_id']})
            }
        )

    }
}

