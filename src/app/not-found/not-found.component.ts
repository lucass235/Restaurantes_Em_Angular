import { Component, OnInit } from '@angular/core';
import {trigger, state, style, transition, animate, keyframes} from "@angular/animations";

@Component({
  selector: 'mt-not-found',
  templateUrl: './not-found.component.html',
  animations: [
    trigger('row',[
      state('ready', style({opacity: 1})),
      transition('void => ready', animate('500ms 0s ease-in', keyframes([
        style({opacity: 0, transform: 'translateY(-300px)', offset: 0}),
        style({opacity: 0.8, transform: 'translateY(0px)', offset: 0.8})
      ]))),
    ])
  ]

})
export class NotFoundComponent implements OnInit {

  rowState = 'ready'

  constructor() { }

  ngOnInit() {
  }

}
