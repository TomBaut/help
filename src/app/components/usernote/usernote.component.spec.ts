import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsernoteComponent } from './usernote.component';

describe('UsernoteComponent', () => {
  let component: UsernoteComponent;
  let fixture: ComponentFixture<UsernoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsernoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsernoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
