import {Component, Input} from 'angular2/core';
import {RouteParams, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import {TaxonImage} from './taxon-image';
import {Taxon} from './taxon';
import {TaxonService} from './taxon.service';

@Component({
  selector: 'taxon-detail',
  styles: [`
    .done-true {
      text-decoration: line-through;
      color: grey;
    }`
  ],
  template: `
	  <div class="row">	  
	    <div class="col-xs-12">
			{{id}}
		</div>

		<div *ngFor="#item of taxonImages" class="col-xs-12 col-md-6 col-lg-4">
			<img src="{{item.image}}" class="img-responsive img-thumbnail" alt="{{item.latin}} - {{item.name}} &copy; {{item.photographer}}" />
			<p class="text-center">
				<small>
					<em>{{item.latin}}</em> - {{item.name}}<br/>
					{{item.date}}, {{item.site}} &copy; {{item.photographer}}
				</small>
			</p>
		</div>
	  </div>
	  
	  `,

  providers: [TaxonService]
})
export class TaxonDetailComponent {

	private taxonImages:TaxonImage[] = [];

	constructor(private _routeParams:RouteParams, private _service: TaxonService){ }

	id: string;

	ngOnInit() {
	  let id = this._routeParams.get('id');
	  this.id = id;
	  
	  this.taxonImages = this._service.getTaxonImagesForId(id);
	}

}
