import { Component, OnInit } from '@angular/core';
import { DISCLAIMER, BANNERS } from 'src/constants/strings';

@Component({
  selector: 'app-polish',
  templateUrl: './polish.component.html',
  styleUrls: ['./polish.component.css']
})
export class PolishComponent implements OnInit {

  banner = {
    mobile: BANNERS.polish.mobile,
    desktop: BANNERS.polish.desktop
  }
  constructor() { }
  ngOnInit() {
  }

}
