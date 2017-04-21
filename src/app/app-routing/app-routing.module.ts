import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes }  from '@angular/router';


import { PostsComponent } from '../posts/posts.component';
import { PostsService } from '../posts.service';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { WebHeaderComponent } from '../web-header/web-header.component';
import { SideSubmenuComponent } from '../side-submenu/side-submenu.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { AppHomeComponent } from '../app-home/app-home.component';


const appRoutes: Routes = [
	{path: '', redirectTo: '/home', pathMatch: 'full'},
	{path: 'home', component: AppHomeComponent},
	{path: 'posts', component: PostsComponent},
	{path: 'drop', component: DropdownComponent}
  // { path: 'crisis-center', component: CrisisListComponent },
  // { path: 'heroes',        component: HeroListComponent },
  // { path: '',   redirectTo: '/heroes', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
  	RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
