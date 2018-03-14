import { Component } from '@angular/core';

@Component({
    selector: 'ion-wrapper',
    styleUrls: ['./ion-wrapper.scss'],
    templateUrl: 'ion-wrapper.html'
})
export class IonWrapperComponent {

    private message: string;

    constructor() {
        console.log('Hello StopWatchWrapperComponent Component');
    }

    public handleMessageEvent(ev: any) {
        this.message = ev.detail;
        console.log('Received event from StopWatch component: ', this.message);
    }

}
