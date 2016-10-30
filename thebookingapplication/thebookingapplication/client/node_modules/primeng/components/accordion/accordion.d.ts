import { ElementRef, EventEmitter } from '@angular/core';
import { BlockableUI } from '../common/api';
export declare class Accordion implements BlockableUI {
    protected el: ElementRef;
    multiple: boolean;
    onClose: EventEmitter<any>;
    onOpen: EventEmitter<any>;
    style: any;
    styleClass: string;
    tabs: AccordionTab[];
    constructor(el: ElementRef);
    addTab(tab: AccordionTab): void;
    getBlockableElement(): HTMLElement;
}
export declare class AccordionTab {
    protected accordion: Accordion;
    header: string;
    selected: boolean;
    disabled: boolean;
    selectedChange: EventEmitter<any>;
    headerFacet: any;
    protected animating: boolean;
    constructor(accordion: Accordion);
    toggle(event: any): void;
    findTabIndex(): number;
}
export declare class AccordionModule {
}
