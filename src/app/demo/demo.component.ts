import { Component, OnInit, Input } from '@angular/core';
import { BEFORE, AFTER } from 'src/constants/strings';
import * as jQuery from 'jquery';
import { i18n } from '@angular/core/src/render3';
// import * as ui from 'jquery-ui-dist'

@Component({
  selector: 'demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  @Input() before;
  @Input() after;
  @Input() beforeId;
  @Input() afterId;
  @Input() draggableId;
  containerHidden = true;

  constructor() {
    if (!this.before && !this.after) {
      this.before = BEFORE;
      this.after = AFTER;
    }
  }

  xPos1 = 0;
  xPos2 = 0;
  afterImage;
  beforeImage;

  imgsLoaded = {
    before: false,
    after: false
  }

  listeners() {

  }

  dragElement(el) {
    let that = this
    el.style.left = that.afterImage.width / 2 + 'px';
    that.beforeImage.width = that.afterImage.width / 2;

    el.onmousedown = dragMouseDown;
    el.ontouchstart = dragMouseDown;



    function dragMouseDown(e) {
      e = e || window.event;
      // get the mouse cursor position at startup:
      try {
        if (!e.clientX) {
          if (!e.pageX) {
            that.xPos2 = e.changedTouches[0].clientX
          } else {
            that.xPos2 = e.pageX
            try {
              e.preventDefault();
            } catch (err) {

            }
          }
        } else {
          that.xPos2 = e.clientX;
          try {
            e.preventDefault();
          } catch (err) {

          }
        }
      } catch (clX) {
        this.xPos2 = e.pageX;
      }
      // this.xPos4 = e.clientY;
      document.onmouseup = closeDragElement;
      document.ontouchend = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
      document.ontouchmove = touchDrag;
    }

    function touchDrag(e) {
      e = e || window.event;

      if (!e.clientX) {
        if (!e.pageX) {
          e.clientX = e.changedTouches[0].clientX
        } else {
          e.clientX = e.pageX
          try {
            e.preventDefault();
          } catch (err) {

          }
        }
      }
      let thatOffset = that.getOffset(that.afterImage).left
      let thatParentOffset = that.getOffset(that.afterImage.parentNode).left

      if ((e.clientX - 1 - thatParentOffset) > ((thatOffset - thatParentOffset) * 2 + 20) && (e.clientX + 1) < (that.afterImage.width + thatParentOffset - 20)) {
        // calculate the new cursor position:
        that.xPos1 = that.xPos2 - e.clientX;
        that.xPos2 = e.clientX;
        el.style.left = (el.offsetLeft - that.xPos1) + "px";
        that.beforeImage.width = el.offsetLeft
      }
    }

    function elementDrag(e) {
      e = e || window.event;
      try {
        e.preventDefault();
      } catch (err) {

      }
      let thatOffset = that.getOffset(that.afterImage).left
      let thatParentOffset = that.getOffset(that.afterImage.parentNode).left
      if ((e.clientX - 1 - thatParentOffset) > ((thatOffset - thatParentOffset) * 2 + 20) && (e.clientX + 1) < (that.afterImage.width + thatParentOffset - 20)) {
        // calculate the new cursor position:
        that.xPos1 = that.xPos2 - e.clientX;
        that.xPos2 = e.clientX;
        // set the element's new position:
        el.style.left = (el.offsetLeft - that.xPos1) + "px";
        that.beforeImage.width = el.offsetLeft
      }
    }

    function closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
    }

  }

  getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY
    };
  }


  resize() {
    this.dragElement(document.getElementById(this.draggableId))
  }

  loadImg(bOa){
    this.imgsLoaded[bOa] = true;
    if(this.imgsLoaded.after === true && this.imgsLoaded.before === true){
      this.afterImage = document.getElementById(this.afterId)
      this.beforeImage = document.getElementById(this.beforeId)
      this.setDrag()
    }
  }

  setDrag(){
    this.dragElement(document.getElementById(this.draggableId))
    setTimeout(() => {
      this.containerHidden = false;
    }, 400);
  }

  ngOnInit() {

  }

}
