import { Component, Input, OnInit } from '@angular/core';
import { ContentService } from "../../services/content.service";

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  legend: any;

  constructor(private Content: ContentService) { }

  ngOnInit(): void {
    this.Content.changeNum();
    this.legend = "Person " + this.Content.num;
  }

  posli(txt: string,id: number){
    this.Content.changeMess(txt,id);
  }

}
