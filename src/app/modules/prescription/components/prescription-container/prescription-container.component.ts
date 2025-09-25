import { Component, inject, OnInit, signal } from '@angular/core';
 import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prescription-container',
  standalone:false,
  templateUrl: './prescription-container.component.html',
  styleUrl: './prescription-container.component.scss'
})
export class PrescriptionContainerComponent implements OnInit {

  private readonly route = inject(ActivatedRoute);
  public user_id=signal<'not_found'|string>('not_found');

  
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.user_id.set(params.get('userId')?params.get('userId')!:'not_found');
    });
  }

}
