import {Component, Input} from 'angular2/core';
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
			Group {{id}} - ({{taxons.length}} arter)
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
  providers: [TaxonService]
})
export class GroupDetailComponent {

	private taxonImages:TaxonImage[] = [];
	private taxons:Taxon[] = [];
	id: string;

	constructor(private _routeParams:RouteParams, private _service: TaxonService){ 
	  let id = this._routeParams.get('id');
	  this.id = id;
	  
	  this.taxonImages = this._service.getTaxonImagesForGroup(id);
	  var tempTaxons = this._service.getTaxonsForGroup(id);
	  
	  for(var i = 0 ; i < tempTaxons.length ; i++) {
		for (var k = 0 ; k < this.taxonImages.length ; k++) {
			if (this.taxonImages[k].latin == tempTaxons[i].latin) {
				tempTaxons[i].hasImage = true;
				break;
			}
		}
	  }
	  
	  this.taxons = tempTaxons;
	}


	ngOnInit() {
	}

}
