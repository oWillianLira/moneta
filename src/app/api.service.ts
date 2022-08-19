import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  headers = new HttpHeaders({
    apikey: 'pRqxsYlZQTB0VWvzdV8uvJNjV9tgBiPc',
  });

  public live(from: string, to: string, amount: number) {
    return this.httpClient.get(
      `https://api.apilayer.com/currency_data/convert?to=${to}&from=${from}&amount=${amount}`,
      { headers: this.headers }
    );
  }
}
