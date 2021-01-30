import {MainComponent} from './main.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';


describe('MainComponent', () => {
    let component: MainComponent;
    let fixture: ComponentFixture<MainComponent>;
  
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ MainComponent ]
      })
      .compileComponents();
    }));
  
    beforeEach(() => {
      fixture = TestBed.createComponent(MainComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
    it('should create', () => {
      expect(component).toBeTruthy();
    });

   
  });