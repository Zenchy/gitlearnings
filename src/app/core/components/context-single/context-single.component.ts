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
    const body = document.body
    // const bodyHeight = document.documentElement.offsetHeight-120
    const html = document.documentElement
    console.log('body scrollHeight', body.scrollHeight, 'body offsetHeight', body.offsetHeight,'html clientHeight', html.clientHeight,'html scrollHeight', html.scrollHeight,'html offsetHeight' , html.offsetHeight );
    // const canvas = document.getElementsByTagName('canvas')[0]
    // const containerLesson = document.getElementById('containerLesson')
    // const containerRepresentation = document.getElementById('representation')
    // containerLesson.setAttribute('height', bodyHeight.toString())
    // containerRepresentation.setAttribute('height', bodyHeight.toString())
    // // console.log('body', bodyHeight)
    // console.log('CONTAINER LESSON', bodyHeight)
    // console.log('canvas', canvas)
    // canvas.width = 500
    // canvas.height = +bodyHeight
    const canvas = document.getElementsByTagName('canvas')[0]
    canvas.style.height = '100%'
    canvas.style.width = '100%'
    canvas.height = body.scrollHeight*0.9

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
