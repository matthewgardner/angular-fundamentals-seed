import { NgModule     } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';


//Containers
import {PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';
import {PassengerViewerComponent } from './containers/passenger-viewer/passenger-viewer.component'

//Compontents
import {PassengerCountComponent } from './components/passenger-count/passenger-count.components';
import {PassengerDetailComponent } from './components/passenger-detail/passenger-details.components';
import {PassengerFormComponent } from './components/passenger-form/passenger-form.components';

//Services 
import {PassengerDashboardService } from './passenger-dashboard.service';

@NgModule ({

    //Angular components used within module
    declarations: [
        PassengerDashboardComponent,
        PassengerCountComponent,
        PassengerDetailComponent,
        PassengerViewerComponent,
        PassengerFormComponent
    ],
    //Used within the module
    imports: [
        CommonModule,
        HttpModule,
        FormsModule
    ],
    //Exports outside of the module
    exports:[
        PassengerViewerComponent
    ],
    providers: [
        PassengerDashboardService
    ]

})
export class PassengerDashboardModule {


}