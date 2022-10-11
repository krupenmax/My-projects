import { Observable, ObservableInput, OperatorFunction, concatMap, interval, map, mergeMap, take } from "rxjs";

export function myOperator() {
  return function <T>(source: Observable<T[]>): Observable<T[]> {
    return new Observable<T[]>(subscriber => {
      let result: T[] = new Array();
      let counter: number = 0;
      function flush() {
        subscriber.next(result);
      }

      const subscription = source.subscribe({
        complete: () => {
          flush();
          subscriber.complete();
        },
        error: err => subscriber.error(err),
        next: value => {
          value.forEach(item => {
            setTimeout(() => result.push(item), counter * 1000);
            counter++;
          });
        },
      });

      return () => {
        subscription.unsubscribe();
      };
    });
  };
}
