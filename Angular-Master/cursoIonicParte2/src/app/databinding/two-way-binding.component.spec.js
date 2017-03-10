"use strict";
var testing_1 = require('@angular/core/testing');
var two_way_binding_component_1 = require('./two-way-binding.component');
describe('TwoWayBindingComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [two_way_binding_component_1.TwoWayBindingComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(two_way_binding_component_1.TwoWayBindingComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=two-way-binding.component.spec.js.map