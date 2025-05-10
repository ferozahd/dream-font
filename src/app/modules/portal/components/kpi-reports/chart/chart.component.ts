import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  Input,
  PLATFORM_ID,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-kpi-chart',
  standalone: false,
  template: '<canvas #chartCanvas height="40"></canvas>',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements AfterViewInit {
  @Input() data: number[] = [];
  @ViewChild('chartCanvas') chartCanvas!: ElementRef<HTMLCanvasElement>;
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  async ngAfterViewInit(): Promise<void> {
    if (this.isBrowser) {
      const { Chart } = await import('chart.js/auto'); // ✅ Lazy load Chart.js only in browser

      new Chart(this.chartCanvas.nativeElement, {
        type: 'line',
        data: {
          labels: this.data.map((_, i) => (i + 1).toString()),
          datasets: [
            {
              data: this.data,
              backgroundColor: '#0d6efd',
          
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            x: { display: false },
            y: { display: false }
          }
        }
      });
    }
  }
}
