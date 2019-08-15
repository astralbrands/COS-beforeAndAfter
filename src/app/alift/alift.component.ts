import { Component, OnInit} from '@angular/core';
import { BANNERS } from 'src/constants/strings';

@Component({
  selector: 'app-alift',
  templateUrl: './alift.component.html',
  styleUrls: ['./alift.component.css']
})
export class AliftComponent implements OnInit {

  banner = {
    mobile: BANNERS.alift.mobile,
    desktop: BANNERS.alift.desktop
  }
  constructor() { }

  ngOnInit() {
  }

}
