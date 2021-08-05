import { Component } from '@angular/core';
import {EntityparserService} from './entityparser.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    textField: string = '';
    data: any;
    text: string = '';
    running: boolean = false;


    constructor(private entityParser: EntityparserService) {
    }

    onClick($event: MouseEvent) {
        this.running = true;
        this.entityParser.getEntity(this.textField).subscribe(success => {
            this.data = success;
            this.text = this.textField
            this.running = false;
        }, error => {
            console.log(error);
            this.running = false;
            alert(error.message);
        });
    }
}
