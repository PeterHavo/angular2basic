import { Component } from '@angular/core';
import { User} from './shared/models/user';

@Component({
	selector: 'my-appp',
	templateUrl:'./app/app.component.html',
	styleUrls: ['./app/app.component.css']
})
export class AppComponent {
	message:string = 'hello';
	user = {
		id:25,
		name:'Havo',
		username:'havo_user'
	}
	users: User[] = [
		  {id:15,name:'Peter',username:'Peter_user'},
		  {id:3,name:'Rasto',username:'Rasto_user'},
		  {id:2,name:'Fero',username:'Fero_user'},
		  {id:1,name:'Palo',username:'Palo_user'}
			]
  	activeUser:User; 
  
  selectUser(user){

  	this.activeUser = user;
  	console.log(this.activeUser);
  }

  onUserCreated(event){
	  
	  console.log(event);
	  this.users.push(event.user);
  }
}