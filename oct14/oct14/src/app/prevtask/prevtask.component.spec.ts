import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevtaskComponent } from './prevtask.component';

describe('PrevtaskComponent', () => {
  let component: PrevtaskComponent;
  let fixture: ComponentFixture<PrevtaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrevtaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrevtaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
