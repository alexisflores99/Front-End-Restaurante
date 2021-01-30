import {EditarMesaComponent} from './editar-mesa.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';


describe('EditarMesaComponent', () => {
    let component: EditarMesaComponent;
    let fixture: ComponentFixture<EditarMesaComponent>;
  
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ EditarMesaComponent ]
      })
      .compileComponents();
    }));
  
    beforeEach(() => {
      fixture = TestBed.createComponent(EditarMesaComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
    it('should create', () => {
      expect(component).toBeTruthy();
    });

   
  });