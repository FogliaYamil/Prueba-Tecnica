import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PersonListComponent } from './modules/person-list/person-list.component';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { PersonInfoDialogComponent } from './modules/person-list/person-info-dialog/person-info-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTableModule } from '@angular/material/table';


@NgModule({
	declarations: [
		AppComponent,
		PersonListComponent,
		PersonInfoDialogComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		FormsModule,
		ReactiveFormsModule,
		MatCardModule,
		MatGridListModule,
		HttpClientModule,
		MatDialogModule,
		MatIconModule,
		MatButtonModule,
		MatToolbarModule,
		MatExpansionModule,
		MatFormFieldModule,
		MatInputModule,
		MatProgressSpinnerModule,
		FlexLayoutModule,
		MatButtonToggleModule,
		MatTableModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
