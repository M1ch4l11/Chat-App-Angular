import { Component, OnInit,ComponentFactoryResolver} from '@angular/core';
import { SceneComponent } from "../app/components/scene/scene.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  Show: number = 0;
  index: number = 1;
  disable: boolean = false;
  private refScene: SceneComponent;
  constructor(private componentFactory: ComponentFactoryResolver){
    this.refScene = new SceneComponent(componentFactory);
   }

  sendData(){
    if(this.index==3){
      this.disable=true;
    } else {
      console.log("fungujeme");
      this.index++;
       this.refScene.add();
    }
    
  }
}
