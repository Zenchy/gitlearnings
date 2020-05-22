import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloGitComponent } from './hello-git.component';

describe('HelloGitComponent', () => {
  let component: HelloGitComponent;
  let fixture: ComponentFixture<HelloGitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloGitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloGitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
