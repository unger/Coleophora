import {Component, Input} from 'angular2/core';
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
		<div *ngFor="#taxon of taxons" class="col-xs-12 col-md-6 col-lg-4">
			<img src="{{taxon.image}}" class="img-responsive img-thumbnail" alt="{{taxon.latin}} - {{taxon.name}} &copy; {{taxon.photographer}}" />
			<p class="text-center">
				<small>
					<em>{{taxon.latin}}</em> - {{taxon.name}}<br/>
					{{taxon.date}}, {{taxon.site}} &copy; {{taxon.photographer}}
				</small>
			</p>
		</div>	  
	  </div>`,
  providers: [TaxonService]
})
export class TaxonListComponent {

  taxons:TaxonImage[] = [];

  constructor(private _service: TaxonService){ 
	this.taxons = _service.getAllTaxonImages();
  }

}

