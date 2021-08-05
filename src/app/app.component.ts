import { Component } from '@angular/core';
import {EntityparserService} from './entityparser.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    text: string = '';
    data: any;
    running: boolean = false;


    constructor(private entityParser: EntityparserService) {
    }

    onClick($event: MouseEvent) {
        this.running = true;
        this.entityParser.getEntity(this.text).subscribe(success => {
            this.data = success;
            this.running = false;
        }, error => {
            console.log(error);
            this.running = false;
            alert(error.message);
        });
    }
}
