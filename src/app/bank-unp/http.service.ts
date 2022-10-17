import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, from, map, toArray } from "rxjs";
import { Row } from "./row";

@Injectable({
  providedIn: "root",
})
export class HttpService {
  public companyObservable: Observable<Row> = new Observable();
  public unpObservable: Observable<string> = new Observable();

  public constructor(private http: HttpClient) { }

  public request(url: string): Observable<Row> {
    return this.http.get<Row>(url);
  }
}
