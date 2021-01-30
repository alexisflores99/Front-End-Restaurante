import {MesaComponent} from './mesas.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';


describe('MesaComponent', () => {
    let component: MesaComponent;
    let fixture: ComponentFixture<MesaComponent>;
  
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ MesaComponent ]
      })
      .compileComponents();
    }));
  
    beforeEach(() => {
      fixture = TestBed.createComponent(MesaComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
    it('should create', () => {
      expect(component).toBeTruthy();
    });

   
  });