import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppyforleaveComponent } from './appyforleave.component';

describe('AppyforleaveComponent', () => {
  let component: AppyforleaveComponent;
  let fixture: ComponentFixture<AppyforleaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppyforleaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppyforleaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
