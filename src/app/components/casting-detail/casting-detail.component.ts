import {Casting} from "../../models/casting";
import {Component, OnInit} from "@angular/core";
import {CastingType} from "../../models/casting-type";
import {Employer} from "../../models/employer";
import {HttpClient} from "@angular/common/http";
import {CastingDetailService} from "../../services/casting-detail.service";
import { ActivatedRoute} from '@angular/router';
import {Role} from "../../models/role";
import {RoleService} from "../../services/role.service";

@Component({
    selector: 'casting-detail-app',
    template:`<div>
        <p>Имя : {{castDetail?.name}}</p>
        <img [src]=castDetail?.image style="width: 200px; height: 200px;">
        <p>описание : {{castDetail?.description}}</p>
        <p>тип : {{castType?.name}}</p>
        <ul>
            <li *ngFor="let role of castDetail['new_role_set']" >
                <p>роли {{role?.name}}</p>
            </li>
        </ul>
    </div>`,
    providers: [CastingDetailService,RoleService]
})

export class CastingDetailComponent implements OnInit{
    id: number;
    castDetail: Casting;
    castType: CastingType;
    castOwner: Employer;
    role:Role;



    constructor(private httpService: CastingDetailService,
                private activateRoute: ActivatedRoute,
                private roleService: RoleService){
        this.id = activateRoute.snapshot.params['id'];
    }

    ngOnInit(){

        this.httpService.getDetail(this.id.toString()).subscribe((data:Casting) => {
            this.castDetail=data;
           this.castDetail["new_role_set"] = [];
            for (let role of this.castDetail.role_set){
                this.roleService.getRole(role).subscribe((data: Role) => {
                    this.role=data;
                    console.log(this.role['name']);
                    this.castDetail["new_role_set"].push(this.role);
                });
            }


            this.httpService.getType(this.castDetail.type).subscribe((data:CastingType) => this.castType=data);
            this.httpService.getOwner(this.castDetail.owner).subscribe((data:Employer) => this.castOwner=data);
        });

    }
}