import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { APPtestCom } from './app.test.component';
import { AppComponent } from './app.component';
import { UserProfileClass } from './users/user.profile.component';
import { UserFormComponent } from './users/user-form.component';




@NgModule({
	imports:[BrowserModule,FormsModule],
	declarations:[APPtestCom,UserProfileClass,UserFormComponent,AppComponent],
	bootstrap:[AppComponent]
})

export class AppModule {
	

}

