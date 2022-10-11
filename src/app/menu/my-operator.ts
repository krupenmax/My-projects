import { Observable } from "rxjs";

export function myOperator(delayTime: number) {
  return function <T>(source: Observable<T[]>): Observable<T[]> {
    return new Observable<T[]>(subscriber => {
      let result: T[] = new Array();
      let counter: number = 0;
      function getResult() {
        subscriber.next(result);
      }

      const subscription = source.subscribe({
        complete: () => {
          getResult();
          subscriber.complete();
        },
        error: err => subscriber.error(err),
        next: value => {
          value.forEach(item => {
            setTimeout(() => result.push(item), counter * delayTime);
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
