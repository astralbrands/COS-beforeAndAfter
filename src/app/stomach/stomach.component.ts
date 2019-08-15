import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { STOMACH } from 'src/constants/strings';

@Component({
  selector: 'app-stomach',
  templateUrl: './stomach.component.html',
  styleUrls: ['./stomach.component.css']
})
export class StomachComponent implements OnInit {

  constructor(private router: Router) { }
  before = STOMACH.before
  after = STOMACH.after
  beforeId = "sI1";
  afterId = "sI2";
  draggableId = "sD";
  switch() {
    this.router.navigateByUrl('/arm');
  }

  ngOnInit() {
  }

}
