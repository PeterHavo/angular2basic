import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { User } from './shared/models/user';


@Component({
	selector: 'my-appp',
	template:`  <div class="jumbotron text-center">
					<h1>App is app and running </h1>
				</div>
				<div *ngIf = "users">
					<div *ngFor = "let user of users">
						<h2>{{user.first_name}}</h2>
					</div>
			</div>`
	// templateUrl: './app/app.component.html',
	// styleUrls: ['./app/app.component.css']
})
export class AppComponent implements OnInit {

	users: User [];

	constructor(private http: Http) {

	}
	ngOnInit() {
		//grab users from https://reqres.in/
		this.http.get('https://reqres.in/api/users')
			.map(res => res.json().data)
			.subscribe(users => this.users = users );

		// if I want just import rxjs/add/operator/toPromise and use promise instand of observables 
		// this.http.get('https://reqres.in/api/users')
		// 	.toPromise()
		// 	.then(data => {console.log(data.json().data)})
			
	}

	

	



	}
	
	

