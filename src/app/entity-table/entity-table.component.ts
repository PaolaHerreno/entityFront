import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-entity-table',
    templateUrl: './entity-table.component.html',
    styleUrls: ['./entity-table.component.scss']
})
export class EntityTableComponent implements OnInit {

    displayedColumns: string[] = ['value', 'type', 'pattern', 'start', 'end'];
    @Input() data: Entity[] = [];
    constructor() {
    }

    ngOnInit(): void {
    }

}

export interface Entity {
    value: string;
    type: string;
    pattern: string;
    start: number;
    end: number;
}
