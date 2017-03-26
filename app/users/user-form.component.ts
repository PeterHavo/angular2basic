import {Component, Output, EventEmitter} from '@angular/core';
import {User} from '../shared/models/user';

@Component({

	selector:'user-form',
	styles:[`
	form {
		padding: 10px;
		background: #ECF0F1;
		border-radius: 3px;
		margin-bottom:30px;
	}



	`
	],
	template:`
	
	<form #form="ngForm" (ngSubmit)="onSubmit()" *ngIf="active">


	 	{{form.valid}}

		<div class="form-group">
			<input type="text" class="form-control" name="name" required [(ngModel)]="newUser.name"  #name="ngModel">
		</div>
		<div class="form-group">
			<input type="text" class="form-control" name="username" required [(ngModel)]="newUser.username"  #username="ngModel">
		</div>
		<button type="submit" class="btn btn-lg btn-block btn-primary" [disabled]="form.invalid">
			Create User
		</button>
	</form>


	`
	,
	


})

export class UserFormComponent {

	@Output() userCreated = new EventEmitter();

	newUser: User = new User();
	active: boolean = true;


	onSubmit (){

		this.userCreated.emit({user: this.newUser});
		this.newUser = new User;
		this.active = false;
		
		setTimeout(()=> {this.active = true, 0})

	}
	
}