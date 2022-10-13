import { Observable, debounce, debounceTime, delay, delayWhen, from, interval, map, of, scan, take, takeUntil, takeWhile, timer } from "rxjs";

export function myOperator(delayTime: number) {
  return function <T>(source: Observable<T>): Observable<T> {
    return new Observable<T>(subscriber => {
      let result: T[] = [];

      source.subscribe({
        complete: () => {
          console.log("Source subscription completed.");
        },
        next: (data) => {
          result.push(data);
        },
      });

      const result$ = interval(1000 * result.length + 1);

      const sources = interval(1000).pipe(
        takeUntil(result$),
        map(x => result[x]),
      );

      const outPut = sources;

      outPut.subscribe({
        complete: () => subscriber.complete(),
        next: (data) => {
          subscriber.next(data as unknown as T);
          console.log(data);
        },
      });
    });
  };
}
