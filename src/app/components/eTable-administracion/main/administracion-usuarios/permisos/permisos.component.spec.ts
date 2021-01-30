import {PermisosComponent} from './permisos.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';


describe('PermisosComponent', () => {
    let component: PermisosComponent;
    let fixture: ComponentFixture<PermisosComponent>;
  
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ PermisosComponent ]
      })
      .compileComponents();
    }));
  
    beforeEach(() => {
      fixture = TestBed.createComponent(PermisosComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
    it('should create', () => {
      expect(component).toBeTruthy();
    });

   
  });