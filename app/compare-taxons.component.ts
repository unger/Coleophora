import {Component, Input} from 'angular2/core';
import {Title} from 'angular2/platform/browser';
import {RouteParams, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import {TaxonImage} from './taxon-image';
import {Taxon} from './taxon';
import {TaxonService} from './taxon.service';
import {TaxonImageDetailedComponent} from './taxon-image-detailed.component';

@Component({
  selector: 'taxon-detail',
  template: `

	<div class="row">	  
	    <div class="col-xs-6">
			<div *ngFor="#item of taxonImages1">
				<taxon-image-detailed [item]="item"></taxon-image-detailed>
			</div>
		</div>
	    <div class="col-xs-6">
			<div *ngFor="#item of taxonImages2">
				<taxon-image-detailed [item]="item"></taxon-image-detailed>
			</div>
		</div>
	  </div>
	  `,
  directives: [ROUTER_DIRECTIVES,TaxonImageDetailedComponent],	  
  providers: [TaxonService,Title]
})
export class CompareTaxonsComponent {

	private taxon1: Taxon;
	private taxon2: Taxon;
	private taxonImages1:TaxonImage[] = [];
	private taxonImages2:TaxonImage[] = [];

	private heading:string;
	slug1: string;
	slug2: string;

	constructor(_routeParams:RouteParams, _service: TaxonService, _title: Title){

	  let slug1 = _routeParams.get('slug1');
	  this.slug1 = slug1;
	  let slug2 = _routeParams.get('slug2');
	  this.slug2 = slug2;
	  
	  this.taxon1 = _service.getTaxon(slug1);
	  this.taxon2 = _service.getTaxon(slug2);
	  this.taxonImages1 = _service.getTaxonImagesForId(slug1);
	  this.taxonImages2 = _service.getTaxonImagesForId(slug2);

	  _title.setTitle('Jämför ' + this.taxon1.latin + ' - ' + this.taxon1.name + ' vs ' + this.taxon2.latin + ' - ' + this.taxon2.name);
	
	}

}
