import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let el: DebugElement;



  beforeEach(waitForAsync(() => {

    TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [ RouterTestingModule.withRoutes([])],
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(AppComponent);
      // cardsListcomponent = fixture.componentInstance;
      el = fixture.debugElement;
      fixture.detectChanges();
    });;
  }));

  it('should create the app', waitForAsync(() => {
    // const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  }));

  fit('should have menu labels', waitForAsync(() => {
    // const fixture = TestBed.createComponent(AppComponent);
    const menuItems = el.queryAll(By.css('ion-label'));
    expect(menuItems.length).toEqual(12);
    expect(menuItems[0].nativeElement.textContent).toContain('Inbox');
    expect(menuItems[1].nativeElement.textContent).toContain('Outbox');
  }));

  it('should have urls', waitForAsync(() => {
    // const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.nativeElement;
    const menuItems = app.querySelectorAll('ion-item');
    expect(menuItems.length).toEqual(12);
    expect(menuItems[0].getAttribute('ng-reflect-router-link')).toEqual('/folder/Inbox');
    expect(menuItems[1].getAttribute('ng-reflect-router-link')).toEqual('/folder/Outbox');
  }));

});
