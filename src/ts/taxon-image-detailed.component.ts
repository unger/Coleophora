import {Component, Input} from 'angular2/core';
import {TaxonImage} from './taxon-image';

@Component({
  selector: 'taxon-image-detailed',
  styles: [`
    .done-true {
      text-decoration: line-through;
      color: grey;
    }`
  ],
  template: `
	  		<div>
				<img src="{{item.image}}" class="img-responsive" alt="{{item.latin}} - {{item.name}} &copy; {{item.photographer}}" />
			</div>
			<p class="text-center">
				<small>
					<span *ngIf="item.specimen">§{{item.specimen}}</span>
					<em>{{item.latin}}<span *ngIf="item.unsure">?</span></em> - {{item.name}}<span *ngIf="item.unsure">?</span><br/>
					
					<div *ngIf="item.wingspan">
						Vingbredd ca {{item.wingspan}} mm
					</div>
					
					{{item.date}}, {{item.site}} &copy; {{item.photographer}}<br/>

					<template [ngIf]="item.detBy">
					<span *ngIf="!item.unsure">
						<span *ngIf="item.detMethod!=='foto'" class="glyphicon glyphicon-ok-sign" style="color: #449d44;"></span>
						<span *ngIf="item.detMethod==='foto'" class="glyphicon glyphicon-exclamation-sign" style="color: #f0ad4e;"></span>
						Artbestämd {{item.detYear}} av {{item.detBy}} 
						<template [ngIf]="item.detMethod">
							via {{item.detMethod}}
						</template>
					</span>
					<span *ngIf="item.unsure">
						<span *ngIf="item.detMethod" class="glyphicon glyphicon-question-sign" style="color: #c9302c;"></span>
						Artförslag {{item.detYear}} av {{item.detBy}} via {{item.detMethod}}
					</span>
					</template>

				</small>
			</p>`,
  directives: [],
  providers: []
})
export class TaxonImageDetailedComponent {
	@Input() item: TaxonImage;
}

