import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPlantationComponent } from './list-plantation.component';

describe('ListPlantationComponent', () => {
  let component: ListPlantationComponent;
  let fixture: ComponentFixture<ListPlantationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPlantationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPlantationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
