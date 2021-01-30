import {ConfiguracionComponent} from './configuracion.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';


describe('ConfiguracionComponent', () => {
    let component: ConfiguracionComponent;
    let fixture: ComponentFixture<ConfiguracionComponent>;
  
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ ConfiguracionComponent ]
      })
      .compileComponents();
    }));
  
    beforeEach(() => {
      fixture = TestBed.createComponent(ConfiguracionComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
    it('should create', () => {
      expect(component).toBeTruthy();
    });

   
  });