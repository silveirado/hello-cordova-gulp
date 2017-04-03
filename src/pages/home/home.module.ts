import { FormsModule } from '@angular/forms';
import { NgModule } from "@angular/core";

import { routing } from "./home.routing";
import { HomeComponent } from "./home.component";

@NgModule({
	imports: [
		FormsModule,
		routing
	],
	declarations: [
		HomeComponent
	]
})
export class HomeModule { }