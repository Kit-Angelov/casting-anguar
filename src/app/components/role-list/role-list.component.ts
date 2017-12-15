import { Component, OnInit} from '@angular/core';
import {Role} from "../../models/role";
import {RoleListService} from "../../services/role-list.service";
import {CastingDetailService} from "../../services/casting-detail.service";
import {Casting} from "../../models/casting";
import {ParametersService} from "../../services/parameters.service";
import {ParametersDetail} from "../../models/parametersDetail";
import {ActivatedRoute} from "@angular/router";
import {RequestCreate} from "../../models/requestCreate";
import {ParamRole} from "../../models/param-role";
import {host} from "../../config";

@Component({
    selector: 'role-list-app',
    template: `<div>
                <ul>
                <li *ngFor="let role of role_list; let index = index">
                <p>Название кастинга: {{role?.casting}}</p>
                <p>Название роли: {{role?.name}}</p>
                <p>Гонорар: {{role?.salary}}</p>
                <p>Начало пробы на роль: {{role?.start_date}}</p>
                <p>Окончание пробы: {{role?.expire_date}}</p>
                <p>Описание: {{role?.description}}</p>
                    <div *ngIf="role['parameters'] != null">
                    <button (click)="toggle(index)">Требования</button>
                    <div [ngClass]="{invisible: visibility[index]}">
                        <p>Требования к кандидату:</p>
                        <p>Возраст {{role?.parameters?.age}}</p>
                        <p>Рос {{role?.parameters?.growth}}</p>
                        <p>Размер одежды {{role?.parameters?.clothsize}}</p>
                        <p>Обхват груди {{role?.parameters?.chestsize}}</p>
                        <p>Обхват талии {{role?.parameters?.waistsize}}</p>
                        <p>Обхват бедер {{role?.parameters?.thighsize}}</p>
                        <p>Размер ног {{role?.parameters?.footsize}}</p>
                        <p>Размер ног {{role?.parameters?.footsize}}</p>
                        <p *ngIf="role?.parameters?.necksize">Обхват шеи {{role?.parameters?.necksize}}</p>
                        <p *ngIf="role?.parameters?.headsize">Обхват головы {{role?.parameters?.headsize}}</p>
                        <p>Пирсинг:</p>
                        <p *ngIf="role?.parameters?.piercing == true">Да</p>
                        <p *ngIf="role?.parameters?.piercing == false">Нет</p>
                        <p>Тату:</p>
                        <p *ngIf="role?.parameters?.tatu == true">Да</p>
                        <p *ngIf="role?.parameters?.tatu == false">Нет</p>
                        <p>Тип внешности {{role?.parameters?.appearancetype?.name}}</p>
                        <p>Цвет волос {{role?.parameters?.haircolor?.name}}</p>
                        <p>Город {{role?.parameters?.city?.name}}</p>
                        <p>Цвет глаз {{role?.parameters?.eyecolor?.name}}</p>
                        <p>Пол {{role?.parameters?.gender?.name}}</p>
                        <p>Страна {{role?.parameters?.country?.name}}</p>
                        <p>Профиль  {{role?.parameters?.employmenttype?.name}} </p>
                    </div>
                    </div>
                    <button (click)="CreateRequest(role?.id)">отправить заявку</button>
                </li>
            </ul>
    </div>`,
    styles: [ `.invisible{display:none;}`],
    providers: [RoleListService, CastingDetailService, ParametersService]
})
export class RoleListComponent implements OnInit{

    visibility: boolean[] = [];
    toggle(i: number){
        this.visibility[i]=!this.visibility[i];
    }
    role_list: Role[] = [];
    castingDetail: Casting;
    parametersDetail: ParamRole;
    request: RequestCreate = new RequestCreate();
    user_id: string = localStorage.getItem('user_id');
    id: string;
    request_id: number;
    constructor(private httpService: RoleListService,
                private castingDetailService: CastingDetailService,
                private parametersService: ParametersService){
    }
    CreateRequest(role_id: number){
        this.request.employee_id = this.user_id;
        this.request.role_id = role_id.toString();
        console.log(this.request);
        this.httpService.CreateRequest(this.request).subscribe(data => this.request_id = data['request_id']);
    }

    ngOnInit(){
        this.httpService.getRoleList(host+'role/').subscribe(data => {
            this.role_list=data;
            let i: number = 0;
            for (let role of this.role_list){
                this.visibility[i] = true;
                i += 1;
            }
            for (let role of this.role_list){
                this.castingDetailService.getDetail(role.casting).subscribe((castdata:Casting) => {
                    this.castingDetail=castdata;
                    console.log(this.castingDetail);
                    role['casting'] = this.castingDetail['name'];
                    console.log(role['casting']);
                });
                if (role['parameters'] != null){
                    this.parametersService.getParameters(role['parameters']).subscribe((paramdata:ParamRole) => {
                        this.parametersDetail = paramdata;
                        console.log(this.parametersDetail);
                        role['parameters'] = this.parametersDetail;
                    });
                }
            }
        });
    }

}