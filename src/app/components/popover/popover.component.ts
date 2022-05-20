import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Popover } from '@dds/components';

@Component({
    selector: 'dds-popover',
    templateUrl: './popover.component.html'
})
export class PopoverComponent implements OnInit, AfterViewInit {
    @Input() elementId: string = "";
    @Input() trigger: string = "";
    @Input() title: string = "";

    public ddsElement: any;
    public ddsComponent: any;

    ngOnInit() {
        // onInit, set or refine inputs and definitions
        this.elementId = this.elementId || 'popover';
    }

    ngAfterViewInit() {
        // interface with elements and DDS library
        this.ddsElement = document.getElementById(this.elementId);
        this.ddsComponent = new Popover(this.ddsElement);
        //        this.ddsComponent = new Popover(this.ddsElement, { trigger: '#triggerId' });

    }

}