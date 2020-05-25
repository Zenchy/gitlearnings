import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core'
import { COLORS } from '../../../../styles/variables/colors'

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
    this.ctx = this.canvas.nativeElement.getContext('2d')
    this.buildCanvas()
  }

  buildCanvas(): void {
    this.setLine(5, 300, 650, 300, 250, true)
    this.setPoint(3, 300, 650, 5, 0, Math.PI * 2, true)
    this.setPoint(3, 300, 250, 5, 0, Math.PI * 2, true)
  }

  setLine(lineWidth, initX, initY, endX, endY, isCommited): void {
    this.ctx.lineWidth = lineWidth
    this.ctx.strokeStyle = isCommited ? COLORS.greenPale : COLORS.green4
    this.ctx.beginPath()
    this.ctx.moveTo(initX, initY)
    this.ctx.lineTo(endX, endY)
    this.ctx.stroke()
  }

  setPoint(lineWidth, centX, centY, r, sAng, eAng, countClock, isCommited = true): void {
    this.ctx.lineWidth = lineWidth
    this.ctx.strokeStyle = isCommited ? '#22577a' : COLORS.green4
    this.ctx.beginPath()
    this.ctx.arc(centX, centY, r, sAng, eAng, countClock)
    this.ctx.stroke()
  }
}
