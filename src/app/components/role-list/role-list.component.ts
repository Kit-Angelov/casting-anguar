import { Component, OnInit} from '@angular/core';
import {RoleList} from "./role-list";
import {RoleListService} from "./role-list.service";
import {CastingDetailService} from "../casting-detail/casting-detail.service";
import {CastingDetail} from "../casting-detail/casting-detail";
import {ParametersService} from "../parameters/parameters.service";
import {ParametersDetail} from "../parameters/parametersDetail";



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
                        <p *ngFor="let type of role?.parameters.employmenttype| slice:0:1">Профиль {{type.name}}</p>
                    </div>
                    </div>
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
    role_list: RoleList[] = [];
    castingDetail: CastingDetail;
    parametersDetail: ParametersDetail;
    constructor(private httpService: RoleListService,
                private castingDetailService: CastingDetailService,
                private parametersService: ParametersService){}

    ngOnInit(){
        this.httpService.getRoleList().subscribe(data => {
            this.role_list=data;
            let i: number = 0;
            for (let role of this.role_list){
                this.visibility[i] = true;
                i += 1;
            }
            for (let role of this.role_list){
                this.castingDetailService.getDetail(role.casting).subscribe((castdata:CastingDetail) => {
                    this.castingDetail=castdata;
                    console.log(this.castingDetail);
                    role['casting'] = this.castingDetail['name'];
                    console.log(role['casting']);
                });
                if (role['parameters'] != null){
                    this.parametersService.getParameters(role['parameters']).subscribe((paramdata:ParametersDetail) => {
                        this.parametersDetail = paramdata;
                        console.log(this.parametersDetail);
                        role['parameters'] = this.parametersDetail;
                    });
                }
            }
        });
    }
}