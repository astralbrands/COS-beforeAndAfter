import { Component, OnInit } from '@angular/core';
import { DISCLAIMER } from 'src/constants/strings';

@Component({
  selector: 'app-disclaimer',
  templateUrl: './disclaimer.component.html',
  styleUrls: ['./disclaimer.component.css']
})
export class DisclaimerComponent implements OnInit {

  constructor() { }
  disclaimer = DISCLAIMER;

  ngOnInit() {
  }

}
