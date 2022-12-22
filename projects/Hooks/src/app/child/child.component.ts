import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,OnDestroy,OnChanges{
  //DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked

  counter = 0;
  interval:any ; 
  @Input()
  name =   ''; 
  @ContentChild('childcontent') childcontent:any; 
  constructor() {
    console.log("child component workinggggg")
   }
  
  ngOnInit():void {
    console.log("this is child oninit.....");
    this.interval=setInterval(()=>{
      this.counter=this.counter +1;
      console.log(this.counter)
    },1000)
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    console.log("child changessss")
  }
  ngOnDestroy(){
    clearInterval(this.interval);
    console.log("Destroy")
  }
    // ngDoCheck(): void {
    //   console.log("child do check");
    // }
    // ngAfterContentInit(): void {
    //   console.log("child after content init method")
      
    // }
    // ngAfterContentChecked(): void {
    //   console.log("child after content checked")
    // }
    // ngAfterViewInit(): void {
    //   console.log("Afterviewinit")
    // }
    // ngAfterViewChecked(): void {
    //   console.log("after view chked")
    // }
  }
