import { Observable, Subscription, debounce, debounceTime, delay, delayWhen, from, interval, map, of, scan, take, takeUntil, takeWhile, timer, toArray } from "rxjs";

export function myOperator(delayTime: number) {
  return function <T>(source: Observable<T>): Observable<T> {
    return new Observable<T>(subscriber => {
      let timeout: ReturnType<typeof setTimeout> | undefined;
      let outputSubscription: Subscription;
      let result: T[] = [];
      let isSourceCompleted: boolean = false;
      function output(value: T) {
        outputSubscription = interval(delayTime * result.length).pipe(
          take(1),
          map(data => value),
        ).subscribe({
          complete: () => {
            result.pop();
            if (!result?.length && isSourceCompleted) {
              subscriber.complete();
            }
          },
          next: (data) => {
            subscriber.next(data);
            console.log(`${data} - added to subscriber`);
          },
        });
      }

      const sourceSubscription = source.subscribe({
        complete: () => {
          console.log("Source subscription completed.");
          isSourceCompleted = true;
        },
        next: (data) => {
          console.log(`myOperator:proceeded - ${data}`);
          result.push(data);
          output(data);
        },
      });

      return () => {
        clearTimeout(timeout);
        sourceSubscription.unsubscribe();
        outputSubscription.unsubscribe();
      };
    });
  };
}
