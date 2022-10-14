import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, from, map, toArray } from "rxjs";
import { row } from "./row";

@Injectable({
  providedIn: "root",
})
export class HttpService {
  public companyObservable: Observable<row> = new Observable();
  public unpObservable: Observable<string> = new Observable();

  public constructor(private http: HttpClient) { }

  public request(url: string): Observable<row> {
    return this.http.get<row>(url);
  }
}
