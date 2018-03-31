import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyfirstComponent } from './Myfirst.component';

describe('HomeComponentComponent', () => {
  let component: MyfirstComponent;
  let fixture: ComponentFixture<MyfirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyfirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyfirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
