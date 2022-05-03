import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { User } from "../Interface/user";

@Injectable({
  providedIn: 'root'
})
export class ContentService {
 public num: number = 0;
 messages: User[] = []
  constructor() {}

  private messOb = new BehaviorSubject<User[]>(this.messages);
  message = this.messOb.asObservable();


  changeNum(): void{
    this.num++;
  }


  changeMess(mess: string,id: number){
    this.messages.push({id: id,mess: mess});
    this.messOb.next(this.messages);
  }
  clearMess(): void {
    this.messages = [];
    this.messOb.next(this.messages);
  }
}
