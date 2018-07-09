import { Component, Input } from '@angular/core';
import { Passenger } from './../../models/passenger.interface';

@Component ({
    selector: 'passenger-count',
    template: `
        <div>
            <h3> Airline Passengers! </h3>
            <div>
                Total Checked in : {{checkedInCount() }} / {{ items?.length}}
            </div>
            <div *ngFor="let passenger of items;"> 
                {{passenger.fullname}}
            </div>
         </div>
    `
})
export class PassengerCountComponent {
    @Input()
    items: Passenger[];
    
    constructor() {}

    checkedInCount() {
        if (!this.items) return 0;
        return this.items.filter((passenger: Passenger) => passenger.checkedIn).length;
    }
}