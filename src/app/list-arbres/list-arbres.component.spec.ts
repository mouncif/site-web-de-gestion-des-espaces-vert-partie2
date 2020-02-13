import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListArbresComponent } from './list-arbres.component';

describe('ListArbresComponent', () => {
  let component: ListArbresComponent;
  let fixture: ComponentFixture<ListArbresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListArbresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListArbresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
