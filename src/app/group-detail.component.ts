import {Component, Input} from 'angular2/core';
import {Title} from 'angular2/platform/browser';
import {RouteParams, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import {TaxonImage} from './taxon-image';
import {Taxon} from './taxon';
import {Group} from './group';
import {TaxonService} from './taxon.service';

@Component({
  selector: 'group-detail',
  styles: [`
    .done-true {
      text-decoration: line-through;
      color: grey;
    }`
  ],
  template: `
	  <div class="row">	  
	    <div class="col-xs-12">
			<h1>Group {{id}} - <small>{{taxons.length}} arter</small></h1>
		</div>
		<div class="col-xs-12">
			<ul class="list-unstyled">
				<li *ngFor="#taxon of taxons">
					<div *ngIf="taxon.hasImage">
						<!--<img src="http://www.lepidoptera.se/flight/{{taxon.slug}}.aspx"/>-->
						<a [routerLink]="['TaxonDetail', {id: taxon.slug }]">
							<em>{{taxon.latin}}</em> - {{taxon.name}}
						</a>
					</div>
					<div *ngIf="!taxon.hasImage">
						<!--<img src="http://www.lepidoptera.se/flight/{{taxon.slug}}.aspx"/>-->
						<em>{{taxon.latin}}</em> - {{taxon.name}}
					</div>
				</li>
			</ul>
		</div>
		<div *ngFor="#item of taxonImages" class="col-xs-12 col-md-6 col-lg-4">
			<a [routerLink]="['TaxonDetail', {id: item.slug }]">
				<img src="{{item.image}}" class="img-responsive img-thumbnail" alt="{{item.latin}} - {{item.name}} &copy; {{item.photographer}}" />
			</a>
			<p class="text-center">
				<small>
					<em>{{item.latin}}<span *ngIf="item.unsure">?</span></em> - {{item.name}}<span *ngIf="item.unsure">?</span><br/>
					<!--{{item.date}}, {{item.site}} &copy; {{item.photographer}}-->
				</small>
			</p>
		</div>
	  </div>
	  
	  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [TaxonService,Title]
})
export class GroupDetailComponent {

	private taxonImages:TaxonImage[] = [];
	private taxons:Taxon[] = [];
	id: string;

	constructor(_routeParams:RouteParams, _service: TaxonService, _title: Title){ 
	  let id = _routeParams.get('id');
	  this.id = id;
	  
	  this.taxonImages = _service.getTaxonImagesForGroup(id);
	  this.taxons = _service.getTaxonsForGroup(id);
	  
	  _title.setTitle('Grupp ' + id + ' - Coleophoridae - Säckmalar');
	}
}
