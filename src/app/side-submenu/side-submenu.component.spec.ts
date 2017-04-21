import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideSubmenuComponent } from './side-submenu.component';

describe('SideSubmenuComponent', () => {
  let component: SideSubmenuComponent;
  let fixture: ComponentFixture<SideSubmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideSubmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideSubmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
