import { Component,ComponentFactoryResolver, Input, OnInit, ViewChild,ViewContainerRef} from '@angular/core';
import { PersonComponent } from '../person/person.component';



@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.scss']
})
export class SceneComponent implements OnInit {
  @ViewChild('container', {read: ViewContainerRef})
  container!: ViewContainerRef;
  stav: boolean = false;
  constructor(private componentFactory: ComponentFactoryResolver){
    
  }
  
  @Input() brand: string = '';
  @Input() a: number = 0;
  add(): void {
    if(this.a==3){
      this.stav=true;
    } else {
      const dynamicComponentFactory = this.componentFactory.resolveComponentFactory(PersonComponent);
      const componentRef = this.container.createComponent(dynamicComponentFactory); 
      this.a++;
    }
   
  }
 
  ngOnInit(): void {
    
  }

}
