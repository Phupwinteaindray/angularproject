import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './event.component.html',
})
export class EventComponent  {

  from=['JavaScript','TypeScript','Angular','Spring']
  to:string[]=[];
  private dragValue?:string
  dragged:any
  singleClass:boolean=false;
  
  drag(event:any){
    this.dragValue=event.target.innerText
    this.dragged=event.target
    event.target.style.opacity = .5;
    this.singleClass=false;
    console.log(this.dragValue)
  }
  drop(event:any){
    console.log(event)
    if(event.target.id=="to" && this.dragValue){
      this.to.push(this.dragValue);
      this.from=this.from.filter(a=>a!=this.dragValue)
      this.singleClass=true;
      if(event.target.className=="card-body"){
        
        this.dragged.parentNode.removeChild(this.dragged)
        event.target.appendChild(this.dragged);
      }
      this.dragValue=undefined
      console.log(`Drag from to ${event.target.id}`);
      
    }
    if(event.target.id=="from" && this.dragValue){
      this.from.push(this.dragValue);
      this.to=this.to.filter(a=>a!=this.dragValue)
      
      if(event.target.className=="card-body"){
        
        this.dragged.parentNode.removeChild(this.dragged)
        event.target.appendChild(this.dragged);
      }

      this.dragValue=undefined
      console.log(`Drag from to ${event.target.id}`);
      
    }
    console.log(event);
  }
 
}
