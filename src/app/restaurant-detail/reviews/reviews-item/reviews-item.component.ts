import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mt-reviews-item',
  templateUrl: './reviews-item.component.html'
})
export class ReviewsItemComponent implements OnInit {


  @Input() review: any

  constructor() { }

  ngOnInit() {

  }

}
