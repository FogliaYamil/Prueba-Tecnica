import { Component, Inject, OnInit } from '@angular/core';
import { Person } from 'src/app/entities/person';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
	selector: 'app-person-info-dialog',
	templateUrl: './person-info-dialog.component.html',
	styleUrls: ['./person-info-dialog.component.scss']
})
export class PersonInfoDialogComponent implements OnInit {
	
	constructor(
		@Inject(MAT_DIALOG_DATA) public data: Person,
	) { }

	ngOnInit(): void {
	}

}
