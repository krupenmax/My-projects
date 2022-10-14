import { Observable } from "rxjs";

export function myOperator(delayTime: number) {
  return function <T>(source: Observable<T>): Observable<T> {
    return new Observable<T>(subscriber => {
      let queue: T[];
      let isSourceCompleted: boolean = false;
      let timeout: ReturnType<typeof setTimeout> | undefined;

      function output(value: T) {
        if (!queue.length) {
          subscriber.next(value);
          clearInterval(timeout);
          timeout = undefined;
          if (isSourceCompleted) {
            subscriber.complete();
          }
        }
        else {
          subscriber.next(value);
          let tmp = queue.shift() as T;
          setTimeout(() => {
            output(tmp);
          }, delayTime);
        }
      }

      const sourceSubscription = source.subscribe({
        complete: () => {
          isSourceCompleted = true;
          if (!queue.length) {
            subscriber.complete();
          }
        },
        error: (e) => subscriber.error(e),
        next: (data) => {
          if (timeout === undefined) {
            queue = [];
            timeout = setTimeout(() => {
              output(data);
            }, 0);
          }
          else {
            queue.push(data);
          }
        },
      });

      return () => {
        clearTimeout(timeout);
        sourceSubscription.unsubscribe();
      };
    });
  };
}
