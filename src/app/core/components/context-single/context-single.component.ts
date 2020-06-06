import { Component, ViewChild, ElementRef, AfterViewInit, OnInit } from '@angular/core'
import { COLORS } from '../../../../styles/variables/colors'

@Component({
  selector: 'app-context-single',
  templateUrl: './context-single.component.html',
  styleUrls: ['./context-single.component.scss']
})
export class ContextSingleComponent implements AfterViewInit, OnInit {
  @ViewChild('canvas')
  canvas: ElementRef<HTMLCanvasElement>
  ctx: CanvasRenderingContext2D

  constructor() {}

  ngOnInit() {
    let heightAtt = '1000'
    const body = document.getElementsByTagName('body')[0]
    const canvas = document.getElementsByTagName('canvas')[0]
    const containerLesson = document.getElementById('containerLesson')
    containerLesson.setAttribute('height', heightAtt )
    console.log('body',body )
    console.log('CONTAINER LESSON',containerLesson )
    console.log('canvas',canvas )
    canvas.width = 500
    canvas.height = +heightAtt
  }

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

  setPoint(lineWidth, centX, centY, radius, sAng, eAng, countClock, isCommited = true): void {
    this.ctx.lineWidth = lineWidth
    this.ctx.strokeStyle = isCommited ? '#22577a' : COLORS.green4
    this.ctx.beginPath()
    this.ctx.arc(centX, centY, radius, sAng, eAng, countClock)
    this.ctx.stroke()
  }
}
