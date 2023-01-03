/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CallobserComponent } from './callobser.component';

describe('CallobserComponent', () => {
  let component: CallobserComponent;
  let fixture: ComponentFixture<CallobserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallobserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallobserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
