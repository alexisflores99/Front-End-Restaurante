import {GeneralComponent} from './general.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';


describe('GeneralComponent', () => {
    let component: GeneralComponent;
    let fixture: ComponentFixture<GeneralComponent>;
  
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ GeneralComponent ]
      })
      .compileComponents();
    }));
  
    beforeEach(() => {
      fixture = TestBed.createComponent(GeneralComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
    it('should create', () => {
      expect(component).toBeTruthy();
    });

   
  });