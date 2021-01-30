import {EditarPerfilMesaComponent} from './editar-perfil-mesa.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';


describe('EditarPerfilMesaComponent', () => {
    let component: EditarPerfilMesaComponent;
    let fixture: ComponentFixture<EditarPerfilMesaComponent>;
  
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ EditarPerfilMesaComponent ]
      })
      .compileComponents();
    }));
  
    beforeEach(() => {
      fixture = TestBed.createComponent(EditarPerfilMesaComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
    it('should create', () => {
      expect(component).toBeTruthy();
    });

   
  });