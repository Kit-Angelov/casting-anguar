import {Component, OnInit} from "@angular/core";
import {CastingListService} from "../../services/casting-list.service";
import {CastingDetailService} from "../../services/casting-detail.service";
import {RoleService} from "../../services/role.service";


@Component({
    selector: 'casting-list-app',
    templateUrl: './casting-list.component.html',
    providers: [CastingListService, CastingDetailService, RoleService],
    styleUrls: ['./casting-list.component.css']
})

export class CastingListComponent{

}