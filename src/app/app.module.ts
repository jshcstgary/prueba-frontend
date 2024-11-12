import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from './components/header/header.component';

import { MatButtonModule } from "@angular/material/button";
import { MatSelectModule } from "@angular/material/select";

@NgModule({
	declarations: [AppComponent, HeaderComponent],
	imports: [BrowserModule, AppRoutingModule, MatSelectModule, MatSelectModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
