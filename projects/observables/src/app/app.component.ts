import { Component } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { CustomobservablesComponent } from './customobservables/customobservables.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'observables';
  test$=null;
  // constructor()
  // {
  //   const test$=new Observable(Subscriber=>{
  //     console.log("test")
  //     Subscriber.next('1')
  //     Subscriber.next('2')
  //     Subscriber.next('3')
  //     // Subscriber.error('error occured')
  //     setTimeout(() => {
  //       Subscriber.next('4')
  //     }, 2000);
  //     Subscriber.complete();
  //   });
  //   console.log("start")
  //   test$.subscribe(x=>{
  //     console.log('1st',x)
  //   }
  //   );
  //   console.log('last')
    
  //   test$.subscribe(x=>{
  //     console.log('2nd',x)
  //   });
  //   test$.subscribe(x=>{
  //     console.log('3rdt',x)
  //   });
  //   const test= () =>
  //   {
  //     console.log("Nrml Test")
  //   }
  //   var y=test()
  //   console.log(y)
  // }
  constructor () {
    this.fromEvent (document.body, 'click')
    .subscribe (x => {
    console.log('body clicked');
    })
    }
    
    fromEvent (target: HTMLElement, eventName: string) {
    return new Observable (observer => {
    const handler = (e: unknown) => observer.next (e);
    // Add the event handler to the target
    target.addEventListener (eventName, handler);
    return () => {
    // Detach the event handler from the target
    target.removeEventListener (eventName,
    handler);

}
    })
    }
  }
