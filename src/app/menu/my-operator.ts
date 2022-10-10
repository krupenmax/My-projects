import { Observable, ObservableInput, OperatorFunction, concatMap, interval, map, mergeMap, take } from "rxjs";

export function myOperator<T, A extends ObservableInput<any>>(project: (value: T, index: number) => A, delayTime: number): OperatorFunction<T, A> {
  let counter: number = 0;
  let numArray: number [] = [1,2,3];
  numArray.forEach((item) => {
    counter++;
    setTimeout(() => {
      console.log(project);
    }, delayTime * counter);
  });
  return mergeMap(project);
}
