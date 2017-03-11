import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomBindingComponent } from './custom-binding.component';

describe('CustomBindingComponent', () => {
  let component: CustomBindingComponent;
  let fixture: ComponentFixture<CustomBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
