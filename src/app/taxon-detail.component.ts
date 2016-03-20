import {Component, Input} from 'angular2/core';
import {Title} from 'angular2/platform/browser';
import {RouteParams, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import {TaxonImage} from './taxon-image';
import {Taxon} from './taxon';
import {TaxonService} from './taxon.service';
import {TaxonImageDetailedComponent} from './taxon-image-detailed.component';

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
				<h1><em>{{taxon.latin}}</em> <small>{{taxon.name}}</small></h1>
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
			<ul class="list-unstyled">
				<template ngFor #similar [ngForOf]="taxon.similar" #i="index">
					<li>
						<span *ngIf="similar.hasImage">
							<a [routerLink]="['TaxonDetail', {id: similar.slug }]">
								<em>{{similar.latin}}</em> - {{similar.name}}
							</a>
						</span>
						<span *ngIf="!similar.hasImage">
							<em>{{similar.latin}}</em> - {{similar.name}}
						</span>
						<span *ngIf="similar.difference">: {{similar.difference}}</span>
						
						<span *ngIf="similar.hasImage">
							-
							<a [routerLink]="['CompareTaxons', {slug1: taxon.slug, slug2: similar.slug }]">
								jämför
							</a>
						</span>
						
					</li>
				</template>
			</ul>
		</div>		

		<div *ngFor="#item of taxonImages" class="col-xs-12">
			<taxon-image-detailed [item]="item"></taxon-image-detailed>
		</div>
	  </div>
	  
	  `,
  directives: [ROUTER_DIRECTIVES,TaxonImageDetailedComponent],	  
  providers: [TaxonService,Title]
})
export class TaxonDetailComponent {

	private taxon: Taxon;
	private taxonImages:TaxonImage[] = [];
	private heading:string;
	private id: string;

	constructor(_routeParams:RouteParams, _service: TaxonService, _title: Title){

	  let id = _routeParams.get('id');
	  this.id = id;
	  
	  this.taxon = _service.getTaxon(id);
	  this.taxonImages = _service.getTaxonImagesForId(id);
	  
	  if (this.taxon == null && this.taxonImages.length > 0) {
		this.taxon = {
						latin: this.taxonImages[0].latin,
						name: this.taxonImages[0].name,
                        artId: 0,
                        dyntaxaId: 0,
                        group: [],
                        auctor: '',
                        slugSv: '',
                        slug: '',
                        hasImage: true,
                        redlist: '',
                        distribution: '',
                        foodplants: [],
                        imago: '',
                        similar: [],
					 };
	  }

	  _title.setTitle(this.taxon.latin + ' - ' + this.taxon.name);
	}


	ngOnInit() {
    }
}
