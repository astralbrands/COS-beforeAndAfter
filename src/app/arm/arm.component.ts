import { Component, OnInit, HostListener, Input } from '@angular/core';
import { ARM } from 'src/constants/strings';
import { Router } from '@angular/router';

@Component({
  selector: 'app-arm',
  templateUrl: './arm.component.html',
  styleUrls: ['./arm.component.css']
})
export class ArmComponent implements OnInit {

  constructor(private router:Router) { }
  before = ARM.before
  after = ARM.after
  beforeId="aI1"
  afterId="aI2"
  draggableId = "aD";



  @HostListener('click') clickHide() {
    if(this.displayInstructions){
      this.hideInstructions()
    }
  }

  @HostListener('touchstart') touchHide() {
    if(this.displayInstructions){
      this.hideInstructions()
    }
  }

  @HostListener('mousedown') mouseHide() {
    if(this.displayInstructions){
      this.hideInstructions()
    }
  }

  hideInstructions(){
    this.displayInstructions = false;
  }

  @Input() displayInstructions = false;

  switch(){
    this.router.navigateByUrl('/stomach');
  }

  ngOnInit() {
  }

}
