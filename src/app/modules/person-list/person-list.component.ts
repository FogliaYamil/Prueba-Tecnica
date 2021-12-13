import { Component, OnInit, ViewChild } from '@angular/core';
import { Person } from 'src/app/entities/person';
import { PersonService } from 'src/app/services/person.service';
import {MatDialog} from '@angular/material/dialog';
import { PersonInfoDialogComponent } from './person-info-dialog/person-info-dialog.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
	selector: 'app-person-list',
	templateUrl: './person-list.component.html',
	styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent implements OnInit {

	public personList: Person[] = [];

	public displayedColumns: string[] = ['first', 'last', 'title', 'email', 'action'];
	public dataSource = new MatTableDataSource<Person>();

	@ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

	public tableView: boolean = false;
	public loading: boolean = true;
	public error: boolean = false;

	constructor(
		private personService: PersonService,
		private matDialog: MatDialog,
	) { }

	ngOnInit(): void {

		this.getPerson();

	}

	private async getPerson(): Promise<void> {
		let count: number = 0;
		try {
			while(count < 16){

				const person = await this.personService.getPerson();
				
				if(person)
					this.personList.push(person);
	
				count++;
			}
			this.dataSource.data = [... this.personList];

		}
		catch(error) {
			console.log(error);
			this.error = true;
		}
		finally {
			this.loading = false;
		}
	}

	public openDialog(person: Person): void {
		this.matDialog.open<PersonInfoDialogComponent, Person>(PersonInfoDialogComponent, {
			autoFocus: false,
			data: person,
		})
	}

}
