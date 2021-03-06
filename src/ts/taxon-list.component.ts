import {Component, Input} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {RouteParams, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
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
			<h1>
				<template [ngIf]="unsure">
					Osäkra
				</template>
				<template [ngIf]="!unsure">
					Bestämda
				</template>
				<small>{{taxons.length}} arter</small>
			</h1>
		</div>
		<div *ngFor="let taxon of taxons" class="col-xs-12 col-md-6 col-lg-4">
			<a [routerLink]="['TaxonDetail', {id: taxon.slug }]">
				<img src="{{taxon.image}}" class="img-responsive" alt="{{taxon.latin}} - {{taxon.name}} &copy; {{taxon.photographer}}" />
			</a>
			<p class="text-center" style="white-space:nowrap">
				<small>
					<em>{{taxon.latin}}<span *ngIf="taxon.unsure">?</span></em> - {{taxon.name}}<span *ngIf="taxon.unsure">?</span><br/>
					<!--{{taxon.date}}, {{taxon.site}} &copy; {{taxon.photographer}}-->
				</small>
			</p>
		</div>	  
	  </div>`,
  directives: [ROUTER_DIRECTIVES],
  providers: [TaxonService,Title]
})
export class TaxonListComponent {

	taxons:TaxonImage[] = [];
	unsure: boolean;

    constructor(private _routeParams:RouteParams, private _service: TaxonService, _title: Title) {

	  let id = decodeURI(this._routeParams.get('id'));
	  
	  if (id === "osäkra") {
		this.unsure = true;
		this.taxons = _service.getUnsureTaxonImages();
	    _title.setTitle('Osäkra arter - Coleophoridae - Säckmalar');
	  }
	  else if (id === "säckar") {
		this.taxons = _service.getCaseImages();
	    _title.setTitle('Säckar - Coleophoridae - Säckmalar');
	  }
	  else {
		this.taxons = _service.getTaxonImages();
	    _title.setTitle('Alla arter - Coleophoridae - Säckmalar');
	  }
	  
    }
	
}

