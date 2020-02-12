import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateExpertiseComponent } from './update-expertise.component';

describe('UpdateExpertiseComponent', () => {
  let component: UpdateExpertiseComponent;
  let fixture: ComponentFixture<UpdateExpertiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateExpertiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateExpertiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
