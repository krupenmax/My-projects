import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from "@angular/core";
import { Observable, Subject, buffer, from, map, takeUntil, toArray } from "rxjs";
import { HttpService } from "./http.service";
import { myOperator } from "./my-operator";
import { Row } from "./row";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-bank-unp",
  styleUrls: ["./bank-unp.component.scss"],
  templateUrl: "./bank-unp.component.html",
})
export class BankUnpComponent implements OnInit, OnDestroy {
  public unsubscribe$: Subject<void> = new Subject();
  public unpObservable: Observable<Row> = new Observable();
  public companies: Row[] = [];
  private UNP: string[] = [
    "491625265",
    "290954125",
    "490087269",
    "691379465",
    "200056225",
    "291563006",
    "193361610",
    "191111948",
    "193545149",
    "491625265",
    "290954125",
    "490087269",
    "691379465",
    "200056225",
    "291563006",
    "193361610",
    "191111948",
    "193545149",
  ];
  public constructor(private httpService: HttpService, private cdr: ChangeDetectorRef) { }

  public ngOnInit(): void {
    from(this.UNP).pipe(
      takeUntil(this.unsubscribe$),
      map(data => this.httpService.request(`grp/getData?unp=${data}&charset=UTF-8&type=json`)),
      myOperator(1000),
    ).subscribe(data => data.subscribe(value => {
      this.companies.push(value);
      this.cdr.detectChanges();
    }));
  }

  public ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
