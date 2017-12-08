import {CastingDetail} from "./casting-detail";
import {Component, OnInit} from "@angular/core";
import {CastingDetailType} from "./casting-detail-type";
import {CastingDetailOwner} from "./casting-detail-owner";
import {HttpClient} from "@angular/common/http";
import {CastingDetailService} from "./casting-detail.service";
import { ActivatedRoute} from '@angular/router';

@Component({
    selector: 'casting-detail-app',
    template:`<div>
        <p>Имя : {{castDetail?.name}}</p>
        <img [src]=castDetail?.image style="width: 200px; height: 200px;">
        <p>описание : {{castDetail?.description}}</p>
        <p>тип : {{castType?.name}}</p>
    </div>`,
    providers: [CastingDetailService]
})

export class CastingDetailComponent implements OnInit{
    id: number;
    castDetail: CastingDetail;
    castType: CastingDetailType;
    castOwner: CastingDetailOwner;


    constructor(private httpService: CastingDetailService, private activateRoute: ActivatedRoute){
        this.id = activateRoute.snapshot.params['id'];
    }

    ngOnInit(){

        this.httpService.getDetailToId(this.id.toString()).subscribe((data:CastingDetail) => {
            this.castDetail=data;
            this.httpService.getType(this.castDetail.type).subscribe((data:CastingDetailType) => this.castType=data);
            this.httpService.getOwnder(this.castDetail.owner).subscribe((data:CastingDetailOwner) => this.castOwner=data);
        });

    }
}