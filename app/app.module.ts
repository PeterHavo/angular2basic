import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { UserProfileClass } from './users/user.profile.component';
import { UserFormComponent } from './users/user-form.component';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';




@NgModule({
	imports: [ 
		BrowserModule,
		FormsModule,
		 HttpModule
		 ],
	declarations: [
		UserProfileClass,
	    UserFormComponent,
		AppComponent
		],
	bootstrap:[AppComponent]
})

export class AppModule {
	

}

