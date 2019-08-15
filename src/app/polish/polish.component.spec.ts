import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolishComponent } from './polish.component';

describe('PolishComponent', () => {
  let component: PolishComponent;
  let fixture: ComponentFixture<PolishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
