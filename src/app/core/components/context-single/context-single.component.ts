import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core'

@Component({
  selector: 'app-context-single',
  templateUrl: './context-single.component.html',
  styleUrls: ['./context-single.component.scss']
})
export class ContextSingleComponent implements AfterViewInit {

  @ViewChild('canvas')
  canvas: ElementRef<HTMLCanvasElement>
  ctx: CanvasRenderingContext2D

  constructor() {}

  ngAfterViewInit() {
    this.buildCanvas()
  }

  buildCanvas() {
    this.ctx = this.canvas.nativeElement.getContext('2d')
    this.ctx.fillStyle = 'red'
    this.ctx.fillRect(5, 5, 150, 50)
  }

}
