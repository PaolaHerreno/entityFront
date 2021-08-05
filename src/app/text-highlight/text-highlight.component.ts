import {Component, Input, OnInit} from '@angular/core';
import {Entity} from '../entity-table/entity-table.component';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

@Component({
  selector: 'app-text-highlight',
  templateUrl: './text-highlight.component.html',
  styleUrls: ['./text-highlight.component.scss']
})
export class TextHighlightComponent implements OnInit {

    @Input() text : string = "";
    @Input() entities : Entity[] = [];
    textFormatted : SafeHtml = "";

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
      if(this.entities){
          let tmp = this.text.replace("\n","<br\>");
          console.log(this.text)
          this.entities.forEach(ent => {
              tmp = tmp.replace(ent.value, '<span style="background-color: cadetblue" title="'+ent.type+'">'+ent.value+'</span>');
          });
          this.textFormatted = this.sanitizer.bypassSecurityTrustHtml(tmp);
      }
  }

}
