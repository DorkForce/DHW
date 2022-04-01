import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Modal } from '@dds/components';

@Component({
    selector: 'dds-modal',
    templateUrl: './modal.component.html'
})
export class ModalComponent implements OnInit, AfterViewInit {
    @Input() elementId: string = "";
    private ddsElement: any;
    private ddsComponent: any;

    ngOnInit() {
        // onInit, set or refine inputs and definitions
        this.elementId = this.elementId || 'modal';
    }

    ngAfterViewInit() {
        // interface with elements and DDS library
        this.ddsElement = document.getElementById(this.elementId);
        this.ddsComponent = new Modal(this.ddsElement);
    }

    open() {
        this.ddsComponent.open();
    }

    close() {
        this.ddsComponent.close();
    }
}