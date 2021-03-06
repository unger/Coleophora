import {Component, Input} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {Group} from './group';
import {GroupDetailComponent} from './group-detail.component';
import {GroupService} from './group.service';

@Component({
  selector: 'group-list',
  styles: [`
    .done-true {
      text-decoration: line-through;
      color: grey;
    }`
  ],
  template: `
	  <div class="row">
		  <div class="col-md-12">
			<h1>Coleophoridae <small>Säckmalar</small></h1>
		  </div>
	  </div>
  
	  <div class="row">	  
		<div *ngFor="let group of groups" class="col-xs-6">
			<a [routerLink]="['GroupDetail', {id: group.id }]">
				<img src="{{group.image}}" class="img-responsive" />
			</a>
			<p class="text-center"><small><strong>{{group.name}}</strong> {{group.description}}</small></p>
		</div>	  
	  </div>`,
  directives: [ROUTER_DIRECTIVES],
  providers: [GroupService,Title]
})
export class GroupListComponent {
  private groups:Group[] = [];
  
  constructor(_service: GroupService, _title: Title){ 
	this.groups = _service.getAllGroups();
	_title.setTitle('Coleophoridae - Säckmalar');
  }
  
}
