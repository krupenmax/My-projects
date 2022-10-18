import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { Subject, concatMap, from, map } from "rxjs";
import { HttpService } from "./http.service";
import { myOperator } from "./my-operator";
import { Row } from "./row";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-bank-unp",
  styleUrls: ["./bank-unp.component.scss"],
  templateUrl: "./bank-unp.component.html",
})
export class BankUnpComponent implements OnInit {
  public unsubscribe$: Subject<void> = new Subject();
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
  ];
  public constructor(private httpService: HttpService, private cdr: ChangeDetectorRef) { }

  public ngOnInit(): void {
    from(this.UNP).pipe(
      map(data => `grp/getData?unp=${data}&charset=UTF-8&type=json`),
      myOperator(1000),
      concatMap(data => {
        return this.httpService.request(data);
      }),
    ).subscribe({
      error: (e) => alert(e.message),
      next: (data) => {
        this.companies.push(data);
        this.cdr.detectChanges();
      },
    });
  }

  protected trackByFn(index: number, item: Row) {
    return item.ROW.VUNP;
  }
}
