import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ContextGroupComponent } from './context-group.component'

describe('ContextGroupComponent', () => {
  let component: ContextGroupComponent
  let fixture: ComponentFixture<ContextGroupComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContextGroupComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ContextGroupComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
