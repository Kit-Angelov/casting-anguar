import { Component} from '@angular/core';
import { HttpService} from '../../http.service';
import { TestImg } from "../../models/testimg";

@Component({
    selector: 'testimg-app',
    template: `<div>
                <input type="file" (change)="FileChangeEvent($event)"/>
                <div *ngIf="CurrentFile">
                    <img style="width: 200px; height: 200px;" [src]="imageSource">
                </div>
                <button (click)="ClickBut()">send</button>
                </div>`,
    providers: [HttpService]
})
export class TestimgComponent {

   CurrentFile: File;
   imageSource: string;
   // testImage: TestImg = new TestImg;
   formData: FormData = new FormData();
   public FileChangeEvent(fileinput: any){
       this.CurrentFile = fileinput.target.files[0];
       this.formData.append( 'name', this.CurrentFile.name);

       let reader = new FileReader();
       reader.onload = () => {
           this.imageSource = reader.result;
           console.log('image', this.imageSource);
           this.formData.append('image', this.CurrentFile);
           //     ({
           //     filename: this.CurrentFile.name,
           //     filetype: this.CurrentFile.type,
           //     value: this.imageSource.split(',')[1]
           // })
       };
       reader.readAsDataURL(this.CurrentFile);
   }

    constructor(private httpService: HttpService){}

    ClickBut(){
        console.log(this.formData);
        this.httpService.postImg(this.formData)
            .subscribe(
                data => {
                    console.log('ok');
                },
                error => console.log(error)
            );
    }
}