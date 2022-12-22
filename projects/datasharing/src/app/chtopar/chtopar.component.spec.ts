/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ChtoparComponent } from './chtopar.component';

describe('ChtoparComponent', () => {
  let component: ChtoparComponent;
  let fixture: ComponentFixture<ChtoparComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChtoparComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChtoparComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
