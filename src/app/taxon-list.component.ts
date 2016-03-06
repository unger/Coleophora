import {Component, Input} from 'angular2/core';
import {RouteParams, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import {TaxonImage} from './taxon-image';
import {TaxonService} from './taxon.service';

@Component({
  selector: 'taxon-list',
  styles: [`
    .done-true {
      text-decoration: line-through;
      color: grey;
    }`
  ],
  template: `
	  <div class="row">	  
	    <div class="col-xs-12">
			({{taxons.length}} arter)
		</div>
		<div *ngFor="#taxon of taxons" class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
			<a [routerLink]="['TaxonDetail', {id: taxon.slug }]">
				<img src="{{taxon.image}}" class="img-responsive img-thumbnail" alt="{{taxon.latin}} - {{taxon.name}} &copy; {{taxon.photographer}}" />
			</a>
			<p class="text-center">
				<small>
					<em>{{taxon.latin}}<span *ngIf="taxon.unsure">?</span></em> - {{taxon.name}}<span *ngIf="taxon.unsure">?</span><br/>
					<!--{{taxon.date}}, {{taxon.site}} &copy; {{taxon.photographer}}-->
				</small>
			</p>
		</div>	  
	  </div>`,
  directives: [ROUTER_DIRECTIVES],
  providers: [TaxonService]
})
export class TaxonListComponent {

	taxons:TaxonImage[] = [];

    constructor(private _routeParams:RouteParams, private _service: TaxonService) {

	  let id = decodeURI(this._routeParams.get('id'));
	  
	  if (id === "osäkra") {
		this.taxons = _service.getUnsureTaxonImages();
	  }
	  else {
		this.taxons = _service.getTaxonImages();
	  }
	  
    }
	
}

