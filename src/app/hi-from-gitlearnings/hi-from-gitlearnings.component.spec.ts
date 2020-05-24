import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { HiFromGitlearningsComponent } from './hi-from-gitlearnings.component'

describe('HiFromGitlearningsComponent', () => {
  let component: HiFromGitlearningsComponent
  let fixture: ComponentFixture<HiFromGitlearningsComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HiFromGitlearningsComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(HiFromGitlearningsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
