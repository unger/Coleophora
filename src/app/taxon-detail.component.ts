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
			<template [ngIf]="taxon">
				<h3><em>{{taxon.latin}}</em> <small>{{taxon.name}}</small></h3>
			</template>
			<p *ngIf="taxonImages.length > 1">
				({{taxonImages.length}} bilder)
			</p>
			<p *ngIf="taxonImages.length === 1">
				({{taxonImages.length}} bild)
			</p>
		</div>
		
		<div class="col-xs-12" *ngIf="taxon.similar">
			<h4>Liknande arter</h4>
			<dl>
				<template ngFor #similar [ngForOf]="taxon.similar" #i="index">
					<dt><em>{{similar.latin}}</em> - {{similar.name}}</dt>
					<dd>{{similar.difference}}</dd>
				</template>
			</dl>
		</div>		

		<div *ngFor="#item of taxonImages" class="col-xs-12">
			<div>
				<img src="{{item.image}}" class="img-responsive img-thumbnail" alt="{{item.latin}} - {{item.name}} &copy; {{item.photographer}}" />
			</div>
			<p class="text-center">
				<small>
					<span *ngIf="item.specimen">§{{item.specimen}}</span>
					<em>{{item.latin}}<span *ngIf="item.unsure">?</span></em> - {{item.name}}<span *ngIf="item.unsure">?</span><br/>
					{{item.date}}, {{item.site}} &copy; {{item.photographer}}<br/>

					<template [ngIf]="item.detBy">
					<span *ngIf="!item.unsure">
						<span *ngIf="item.detMethod=='genprep'" class="glyphicon glyphicon-ok-sign" style="color: #449d44;"></span>
						<span *ngIf="item.detMethod=='foto'" class="glyphicon glyphicon-exclamation-sign" style="color: #f0ad4e;"></span>
						Artbestämd {{item.detYear}} av {{item.detBy}} via {{item.detMethod}}
					</span>
					<span *ngIf="item.unsure">
						<span *ngIf="item.detMethod" class="glyphicon glyphicon-question-sign" style="color: #c9302c;"></span>
						Artförslag {{item.detYear}} av {{item.detBy}} via {{item.detMethod}}
					</span>
					</template>


				</small>
			</p>
		</div>
	  </div>
	  
	  `,

  providers: [TaxonService]
})
export class TaxonDetailComponent {

	private taxon: Taxon;
	private taxonImages:TaxonImage[] = [];
	private heading:string;

	constructor(private _routeParams:RouteParams, private _service: TaxonService){ }

	id: string;

	ngOnInit() {
	  let id = this._routeParams.get('id');
	  this.id = id;
	  
	  this.taxon = this._service.getTaxon(id);
	  this.taxonImages = this._service.getTaxonImagesForId(id);
	  
	  if (this.taxon == null && this.taxonImages.length > 0) {
		this.taxon = {
						latin: this.taxonImages[0].latin,
						name: this.taxonImages[0].name
					 };
	  }
	  

    }

}
