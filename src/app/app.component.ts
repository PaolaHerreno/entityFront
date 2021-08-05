import { Component } from '@angular/core';
import {EntityparserService} from './entityparser.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    text: string = '';


    constructor(private entityParser: EntityparserService) {
    }

    onClick($event: MouseEvent) {
        this.entityParser.getEntity(this.text).subscribe(success => {
            console.log(success);
        }, error => {
            console.log(error)
            alert(error.message);
        });
    }
}
