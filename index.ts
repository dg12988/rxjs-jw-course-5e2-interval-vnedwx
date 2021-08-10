import { Observable, timer, interval } from "rxjs";

console.log('App started');

const interval$ = new Observable<number>(subscriber => {
  let counter = 0;
  
  const intervalId = setInterval(() => {
    console.log('Timeout!');
    subscriber.next(counter++);
  }, 2000);

  return () => clearInterval(intervalId);
});

const subscription = interval$.subscribe({
  next: value => console.log(value),
  complete: () => console.log('Completed')
});

setTimeout(() => {
  subscription.unsubscribe();
  console.log('Unsubscribe');
}, 5000);
