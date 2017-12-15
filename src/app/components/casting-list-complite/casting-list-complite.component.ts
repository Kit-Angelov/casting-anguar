import {Casting} from "../../models/casting";
import {Component, OnInit} from "@angular/core";
import {CastingListService} from "../../services/casting-list.service";
import {CastingDetailService} from "../../services/casting-detail.service";
import {CastingType} from "../../models/casting-type";
import {RoleService} from "../../services/role.service";
import {Role} from "../../models/role";
import {host} from "../../config";


@Component({
    selector: 'casting-list-complite-app',
    templateUrl: './casting-list-complite.component.html',
    providers: [CastingListService, CastingDetailService, RoleService],
    styleUrls: ['../casting-list/casting-list.component.css']
})

export class CastingListCompliteComponent implements OnInit{

    castingInfos: Casting[] = [];
    castingType:  CastingType;
    user_id = localStorage.getItem('user_id');
    role: Role = new Role;
    role_list: Role[] = [];
    constructor(private httpService: CastingListService,
                private castingDetailService: CastingDetailService,
                private roleService: RoleService){}

    ngOnInit(){
        this.httpService.getCasting(host+"castinglist/?owner_id="+this.user_id).subscribe(data=> {
            this.castingInfos=data;
            for (let item of this.castingInfos){
                this.castingDetailService.getType(item.type).subscribe((data:CastingType)=>{
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