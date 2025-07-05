import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing/pages/landing-page/landing-page.component';
import { SidebarComponent } from './layout/pages/sidebar/sidebar.component';
import { AppointmentComponent } from './branch/pages/appointment/appointment.component';
import path from 'node:path';
import { AppointmentHistoryComponent } from './branch/pages/appointment-history/appointment-history.component';
import { OfferedServiceComponent } from './branch/pages/offered-service/offered-service.component';
import { ProfessionalComponent } from './branch/pages/professional/professional.component';
import { BranchSettingsComponent } from './branch/pages/branch-settings/branch-settings.component';

export const routes: Routes = [
	{path: '', component: LandingPageComponent},
	{path: 'branches', component: AppointmentComponent,
		children : [
			{path: '', redirectTo: 'appointments', pathMatch: 'full'},
			{path: 'appointments', component: AppointmentComponent},
			{path: 'history', component: AppointmentHistoryComponent},
			{path: 'services', component: OfferedServiceComponent},
			{path: 'professionals', component: ProfessionalComponent},
			{path:'settings', component: BranchSettingsComponent}
		]
	}
];
