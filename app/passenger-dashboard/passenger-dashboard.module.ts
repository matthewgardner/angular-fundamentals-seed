import { NgModule     } from '@angular/core';
import { CommonModule } from '@angular/common';

//Containers
import {PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';


//Compontents
import {PassengerCountComponent } from './components/passenger-count/passenger-count.components';
import {PassengerDetailComponent } from './components/passenger-detail/passenger-details.components';

@NgModule ({

    //Angular components used within module
    declarations: [
        PassengerDashboardComponent,
        PassengerCountComponent,
        PassengerDetailComponent
    ],
    //Used within the module
    imports: [
        CommonModule
    ],
    //Exports outside of the module
    exports:[
        PassengerDashboardComponent
    ]

})
export class PassengerDashboardModule {


}