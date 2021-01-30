import {EditarPermisoComponent} from './editar-permiso.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';


describe('EditarPermisoComponent', () => {
    let component: EditarPermisoComponent;
    let fixture: ComponentFixture<EditarPermisoComponent>;
  
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ EditarPermisoComponent ]
      })
      .compileComponents();
    }));
  
    beforeEach(() => {
      fixture = TestBed.createComponent(EditarPermisoComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
    it('should create', () => {
      expect(component).toBeTruthy();
    });

   
  });