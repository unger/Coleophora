import {Component} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Location } from 'angular2/router';
import {TaxonImage} from './taxon-image';
import {TaxonListComponent} from './taxon-list.component';
import {GroupListComponent} from './group-list.component';
import {GroupDetailComponent} from './group-detail.component';
import {TaxonDetailComponent} from './taxon-detail.component';



interface Window {
    ga: any;
}



@Component({
  selector: 'coleophora-app',
  template: `
	<div class="row">
	  <div class="col-md-12">
		<h2>Coleophoridae <small>Säckmalar</small></h2>

		<p>
			<a [routerLink]="['Groups']" class="btn btn-primary">Grupper</a>
			<a [routerLink]="['Taxons', {id: 'säkra' }]" class="btn btn-primary">Arter</a>
			<a [routerLink]="['Taxons', {id: 'osäkra' }]" class="btn btn-primary">Osäkra</a>
		</p>
		
      </div>
	</div>
	
	
	<router-outlet></router-outlet>`,
  styles:['a { cursor: pointer; cursor: hand; }'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@RouteConfig([
  {
    path: '/',
    name: 'Groups',
    component: GroupListComponent
  },
  {
    path: '/group/:id',
    name: 'GroupDetail',
    component: GroupDetailComponent
  },
  {
    path: '/taxons/:id',
    name: 'Taxons',
    component: TaxonListComponent
  },
  {
    path: '/taxon/:id',
    name: 'TaxonDetail',
    component: TaxonDetailComponent
  },
])
export class AppComponent {

    constructor(router:Router, location:Location) {
        router.subscribe(this.onRouteChanged);
    }

    onRouteChanged(path) {
		// Track google analytics
		if (location.hostname != 'localhost') {
			(<any>window).ga('send', 'pageview', { page: "/" + path });
		}
    }


}



