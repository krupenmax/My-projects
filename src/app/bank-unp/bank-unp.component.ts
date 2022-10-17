import { HttpClient } from "@angular/common/http";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { Observable, from, map } from "rxjs";
import { HttpService } from "./http.service";
import { myOperator } from "./my-operator";
import { row } from "./row";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-bank-unp",
  styleUrls: ["./bank-unp.component.scss"],
  templateUrl: "./bank-unp.component.html",
})
export class BankUnpComponent implements OnInit {
  public unpObservable: Observable<row> = new Observable();
  public bankInfo: row[] = [];
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
      map(data => this.httpService.request(`grp/getData?unp=${data}&charset=UTF-8&type=json`)),
      myOperator(1000),
    ).subscribe({
      next: (data) => {
        data.subscribe(value => {
          this.bankInfo.push(value);
          this.cdr.detectChanges();
        });
      },
    });
  }
}
