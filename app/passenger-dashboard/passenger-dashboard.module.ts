import { NgModule     } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';


//Containers
import {PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';


//Compontents
import {PassengerCountComponent } from './components/passenger-count/passenger-count.components';
import {PassengerDetailComponent } from './components/passenger-detail/passenger-details.components';

//Services 
import {PassengerDashboardService } from './passenger-dashboard.service';

@NgModule ({

    //Angular components used within module
    declarations: [
        PassengerDashboardComponent,
        PassengerCountComponent,
        PassengerDetailComponent
    ],
    //Used within the module
    imports: [
        CommonModule,
        HttpModule
    ],
    //Exports outside of the module
    exports:[
        PassengerDashboardComponent
    ],
    providers: [
        PassengerDashboardService
    ]

})
export class PassengerDashboardModule {


}