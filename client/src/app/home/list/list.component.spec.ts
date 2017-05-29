import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsListComponent } from './list.component';

describe('ListComponent', () => {
    let component: AdsListComponent;
    let fixture: ComponentFixture<AdsListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AdsListComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AdsListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
