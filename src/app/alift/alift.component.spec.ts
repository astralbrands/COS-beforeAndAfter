import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AliftComponent } from './alift.component';

describe('AliftComponent', () => {
  let component: AliftComponent;
  let fixture: ComponentFixture<AliftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AliftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AliftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
