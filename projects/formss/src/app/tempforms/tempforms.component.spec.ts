/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TempformsComponent } from './tempforms.component';

describe('TempformsComponent', () => {
  let component: TempformsComponent;
  let fixture: ComponentFixture<TempformsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempformsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
