import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from './components/header/header.component';

import { MatButtonModule } from "@angular/material/button";
import { MatSelectModule } from "@angular/material/select";
import { MatDividerModule } from "@angular/material/divider";
import { TableComponent } from './components/table/table.component';
import { MatTableModule } from "@angular/material/table";

@NgModule({
	declarations: [AppComponent, HeaderComponent, TableComponent],
	imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, MatButtonModule, MatDividerModule, MatSelectModule, MatSelectModule, MatTableModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
