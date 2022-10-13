import { Observable, Subscription, debounce, debounceTime, delay, delayWhen, from, interval, map, of, scan, take, takeUntil, takeWhile, timer, toArray } from "rxjs";

export function myOperator(delayTime: number) {
  return function <T>(source: Observable<T>): Observable<T> {
    return new Observable<T>(subscriber => {
      let result: T[] = [];
      let isSourceCompleted: boolean = false;
      function output(value: T) {
        setTimeout(() => {
          subscriber.next(value);
          result.pop();
          if (!result?.length && isSourceCompleted) {
            subscriber.complete();
          }
        }, delayTime * result.length);
      }

      const sourceSubscription = source.subscribe({
        complete: () => {
          console.log("Source subscription completed.");
          isSourceCompleted = true;
        },
        next: (data) => {
          console.log(`myOperator: proceeded - ${data}`);
          result.push(data);
          output(data);
        },
      });

      return () => {
        sourceSubscription.unsubscribe();
      };
    });
  };
}
