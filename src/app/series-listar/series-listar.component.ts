import { Component, OnInit } from '@angular/core';
import { SeriesService } from './series.service';
import { Serie } from './serie';

@Component({
  selector: 'app-series-listar',
  templateUrl: './series-listar.component.html',
  styleUrls: ['./series-listar.component.css']
})
export class SeriesListarComponent implements OnInit {

  series: Array<Serie> = [];
  totalSum: number = 0;
  seasonAvg: number = 6;

  constructor(private seriesService: SeriesService) { }

  getSeries(): void {
    this.seriesService.getSeries().subscribe({next: apiData => this.series = apiData});
  }

  ngOnInit() {
    this.getSeries();
  }

}
