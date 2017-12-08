import {CastingList} from "./casting-list";
import {Component, OnInit} from "@angular/core";
import {CastingListService} from "./casting-list.service";
import {CastingDetailService} from "../casting-detail/casting-detail.service";
import {CastingDetailType} from "../casting-detail/casting-detail-type";
import {RoleService} from "../role/role.service";
import {Role} from "../role/role";



@Component({
    selector: 'casting-list-app',
    template:`<ul>
        <li *ngFor="let castingInfo of castingInfos" >
        <p >Имя : {{castingInfo?.name}}</p>
        <img [src]=castingInfo?.image style="width: 200px; height: 200px;">
        <p>тип : {{castingInfo?.type}}</p>
        <p>роли :</p>
            <ul>
                <li *ngFor="let role of castingInfo['new_role_set']" >
                       <p>{{role?.name}}</p>
                </li>
            </ul>
            <a [routerLink]="['/employer/castingDetail', castingInfo?.id]">Подробнее</a>   
        </li>
    </ul>`,
    providers: [CastingListService, CastingDetailService, RoleService]
})

export class CastingListComponent implements OnInit{

    castingInfos: CastingList[] = [];
    castingType:  CastingDetailType;
    user_id = localStorage.getItem('user_id');
    role: Role = new Role;
    role_list: Role[] = [];
    constructor(private httpService: CastingListService,
                private castingDetailService: CastingDetailService,
                private roleService: RoleService){}

    ngOnInit(){
        this.httpService.getCasting("?owner_id="+this.user_id).subscribe(data=> {
            this.castingInfos=data;
            for (let item of this.castingInfos){
                this.castingDetailService.getType(item.type).subscribe((data:CastingDetailType)=>{
                   this.castingType = data;
                    item['type'] = this.castingType.name;
                });
                item['new_role_set'] = [];
                for (let role of item.role_set){
                    this.roleService.getRole(role).subscribe((data: Role) => {
                        this.role=data;
                        console.log(this.role['name']);
                        item['new_role_set'].push(this.role);
                    });
                }
            }
        });
    }
}