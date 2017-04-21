import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { BsDropdownModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { PostsComponent } from './posts/posts.component';
import { PostsService } from './posts.service';
import { DropdownComponent } from './dropdown/dropdown.component';
import { WebHeaderComponent } from './web-header/web-header.component';
import { SideSubmenuComponent } from './side-submenu/side-submenu.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppHomeComponent } from './app-home/app-home.component';


// // Define the routes
// const ROUTES = [
//   {
//     path: '',
//     redirectTo: 'posts',
//     pathMatch: 'full'
//   },
//   {
//     path: 'posts',
//     component: PostsComponent
//   }
// ];


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    DropdownComponent,
    WebHeaderComponent,
    SideSubmenuComponent,
    SidebarComponent,
    AppHomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    ReactiveFormsModule,
    JsonpModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
