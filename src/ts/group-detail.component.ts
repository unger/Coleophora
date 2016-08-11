import {Component, Input} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {RouteParams, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
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
			<table class="small">
				<tr *ngFor="let taxon of taxons">
					<td>
						<div *ngIf="taxon.hasImage">
							<a [routerLink]="['TaxonDetail', {id: taxon.slug }]">
								<em>{{taxon.latin}}</em> - {{taxon.name}}
							</a>
						</div>
						<div *ngIf="!taxon.hasImage">
							<em>{{taxon.latin}}</em> - {{taxon.name}}
						</div>
					</td>
					<td align="right" style="white-space: nowrap;">
						<div *ngIf="taxon.wingSpanMin!=0">
						{{taxon.wingSpanMin}}-{{taxon.wingSpanMax}} mm
						</div>
					</td>
					<td style="padding: 2px 5px;">
						<div>
						<a href="http://www.lepidoptera.se/arter/{{taxon.slugSv}}">[länk]</a>
						</div>
					</td>
				</tr>
			</table>
		
		</div>
		<div *ngFor="let item of taxonImages" class="col-xs-12 col-md-6 col-lg-4">
			<a [routerLink]="['TaxonDetail', {id: item.slug }]">
				<img src="{{item.image}}" class="img-responsive" alt="{{item.latin}} - {{item.name}} &copy; {{item.photographer}}" />
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
