import { ContextSingleComponent } from './context-single.component'
import { ComponentFixture, async, TestBed } from '@angular/core/testing'

describe('ContextSingleComponent', () => {
  let component: ContextSingleComponent
  let fixture: ComponentFixture<ContextSingleComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContextSingleComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ContextSingleComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
