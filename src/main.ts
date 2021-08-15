import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

//import { Observable,interval, of, from,fromEvent} from 'rxjs';

//interval(1000).subscribe((n:number)=>{console.log(`number : ${n}`);})
/*let name:string = "AjayKumar";
let name$:Observable<string>=of(name);
name$.subscribe((name:string)=>{console.log(`Name : ${name}`)},null,()=>{
  console.log("task completed")
})*/

/*from([54,82,37,45]).subscribe((n:number)=>{
  console.log(`Number : ${n}`)
}, null, ()=>{
  console.log("task Completed")
})*/

/*from(Promise.resolve(5)).subscribe((n:number)=>{
  console.log(`Number : ${n}`)
}, null, ()=>{
  console.log("task Completed")
})*/

/*let event$:Observable<MouseEvent> = <Observable<MouseEvent>>fromEvent(document,'mousemove')

event$.subscribe((event: MouseEvent)=>{
  var element = document.getElementById('target');
  (<HTMLElement>element).innerText=`X:${event.x} Y :${event.y}`;
}); */

import { Observable, range,of } from 'rxjs';
import{catchError, map,skip,take,} from 'rxjs/operators'
import { throwError } from 'rxjs';

/*let number$:Observable<number> = range(1, 10).pipe(
  skip(5),
  take(4),
  map(function(n){return n*3})
)

number$.subscribe((n: number)=>{
  console.log(`Number : ${n}`)
}, null, ()=>{
  console.log("Task Completed")
}) */

/*let source$ = throwError("some Error has occured");
source$.pipe(catchError(function(error) {
  return of(error)
}));
source$.subscribe((data)=>{
  console.log("No Error occured");
  console.log(data);
}, (err)=>{
  console.log('Error: '+err)
}) */