import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-counter-control',
  templateUrl: './counter-control.component.html',
  styleUrls: ['./counter-control.component.css']
})
export class CounterControlComponent implements OnInit {
  @Input() label: string;
  @Input() clicked: any;

  constructor() {
  }

  ngOnInit() {
  }
}
