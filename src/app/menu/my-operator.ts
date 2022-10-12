import { Observable, toArray } from "rxjs";
let container: any[] = [];
export function myOperator(delayTime: number) {
  return function <T>(source: Observable<T>): Observable<T> {
    return new Observable<T>(subscriber => {
      if (container.length) {
        for (let i: number = 0; i < container.length; i++) {
          subscriber.next(container[i] as T);
        }
      }
      let result: T;
      let counter: number = 1;
      let length: number = 0;
      function getResult() {
        subscriber.next(result);
        console.log(`${result}-value is proceeded.`);
      }

      let tmp = source;
      tmp.pipe(
        toArray(),
      ).subscribe(data => length = data.length);

      const subscription = source.subscribe({
        complete: () => {
          setTimeout(() => {
            console.log("Time ellapsed " + length * delayTime / 1000 + "s");
            subscriber.complete();
          }, delayTime * length);
        },
        error: err => subscriber.error(err),
        next: value => {
          setTimeout(() => {
            result = value;
            container.push(value as unknown as T);
            getResult();
          }, delayTime * counter);
          counter++;
        },
      });

      return () => {
        subscription.unsubscribe();
      };
    });
  };
}
