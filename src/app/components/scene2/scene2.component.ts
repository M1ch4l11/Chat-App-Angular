import { Component, OnInit } from '@angular/core';
import { ContentService } from "../../services/content.service";
import { User } from "../../Interface/user";


@Component({
  selector: 'app-scene2',
  templateUrl: './scene2.component.html',
  styleUrls: ['./scene2.component.scss']
})

export class Scene2Component implements OnInit{
  index: number = 3;
  reload: boolean = true;
  
  messages: User[] = []

  constructor(private dataContent: ContentService) { }
  
  ngOnInit(): void {
    this.createMess();
  }
  
  createMess(){
    this.dataContent.message.subscribe(mess => {
      this.messages = [];
      mess.forEach(mess => {
        if(mess.mess != ''){
          this.messages.push({
            id: mess.id,
            mess: mess.mess,
          })
        }
      });
      
    });
    console.dir(this.messages);
  }
  clearWindow(): void {
    this.messages = [];
    this.dataContent.clearMess();
  }
  
}
