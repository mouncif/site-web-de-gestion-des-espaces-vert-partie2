import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePlantationComponent } from './update-plantation.component';

describe('UpdatePlantationComponent', () => {
  let component: UpdatePlantationComponent;
  let fixture: ComponentFixture<UpdatePlantationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePlantationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePlantationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
