import { Component, OnChanges, Input } from '@angular/core';
import { ApiService } from '../../api.service';

interface Currency {
  name: string;
  value: string;
}

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css'],
})
export class ConverterComponent implements OnChanges {
  @Input() amount: number = 1;

  currency: Currency[] = [
    { value: 'BRL', name: 'Brazilian Real' },
    { value: 'CAD', name: 'Canadian Dollar' },
    { value: 'EUR', name: 'European Euro' },
    { value: 'JPY', name: 'Japanese Yen' },
    { value: 'RUB', name: 'Russian Rouble' },
    { value: 'KRW', name: 'South Korean Won' },
    { value: 'USD', name: 'United States Dollar' },
  ];
  @Input() from = this.currency[0].value;
  @Input() to = this.currency[1].value;

  result: any;

  constructor(private apiService: ApiService) {}

  ngOnChanges() {
    this.apiService.live(this.from, this.to, this.amount).subscribe((data) => {
      this.result = data;
    });
  }
}
