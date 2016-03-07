import {Component, Input} from 'angular2/core';
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
  providers: [TaxonService]
})
export class CompareTaxonsComponent {

	private taxon1: Taxon;
	private taxon2: Taxon;
	private taxonImages1:TaxonImage[] = [];
	private taxonImages2:TaxonImage[] = [];

	private heading:string;

	constructor(private _routeParams:RouteParams, private _service: TaxonService){ }

	slug1: string;
	slug2: string;

	ngOnInit() {
	  let slug1 = this._routeParams.get('slug1');
	  this.slug1 = slug1;
	  let slug2 = this._routeParams.get('slug2');
	  this.slug2 = slug2;
	  
	  this.taxon1 = this._service.getTaxon(slug1);
	  this.taxon2 = this._service.getTaxon(slug2);
	  this.taxonImages1 = this._service.getTaxonImagesForId(slug1);
	  this.taxonImages2 = this._service.getTaxonImagesForId(slug2);

    }

}
