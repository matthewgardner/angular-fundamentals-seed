import { Component } from '@angular/core';

import { Passenger } from './../../models/passenger.interface';
import { PassengerDashboardService } from './../../passenger-dashboard.service';

@Component({
    selector: 'passenger-dashboard',
    styleUrls: ['passenger-dashboard.component.scss'],
    template: `
    <div>
    <passenger-count
        [items]="passengers">
    </passenger-count>
    <passenger-detail 
        *ngFor="let passenger of passengers;"
        [detail]="passenger"
        (edit)="handleEdit($event)"
        (remove)="handleRemove($event)">
    </passenger-detail>
    `
})
export class PassengerDashboardComponent {

    passengers: Passenger[];

    constructor(private passengerService: PassengerDashboardService) {

    }

    ngOnInit() {
        console.log('PassengerDashboardComponent - ngOnInit');
        this.passengerService
            .getPassengers()
            .subscribe((data: Passenger[]) => this.passengers = data,
                       (error: any) => console.log(error));
    }

    handleEdit(event: Passenger) {
        console.log('handleEdit: ', event);
        this.passengerService
            .updatePassengers(event)
            .subscribe((data: Passenger) => {
                this.passengers = this.passengers.map((passenger: Passenger) => {
                    if (passenger.id === event.id) {
                        passenger = Object.assign({}, passenger, event);
                    }
                    return passenger;
                });
            });
        console.log(this.passengers);
    }

    handleRemove(event: Passenger) {
        console.log('handleRemove: ', event);
        this.passengerService
            .removePassengers(event)
            .subscribe((data: Passenger) => {
                this.passengers = this.passengers.filter((passenger: Passenger) => {
                    return passenger.id !== event.id;
                });
            });
    }
}