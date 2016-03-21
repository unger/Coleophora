import {Component} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Location } from 'angular2/router';
import {TaxonImage} from './taxon-image';
import {TaxonListComponent} from './taxon-list.component';
import {GroupListComponent} from './group-list.component';
import {GroupDetailComponent} from './group-detail.component';
import {TaxonDetailComponent} from './taxon-detail.component';
import {CompareTaxonsComponent} from './compare-taxons.component';



interface Window {
    ga: any;
}

@Component({
  selector: 'coleophora-app',
  template: `

	<nav class="navbar navbar-default navbar-fixed-top">
	  <div class="container-fluid">
		<ul class="nav nav-pills">
			<li><a [routerLink]="['Groups']">Grupper</a></li>
			<li><a [routerLink]="['Taxons', {id: 'säkra' }]">Arter</a></li>
			<li><a [routerLink]="['Taxons', {id: 'osäkra' }]">Osäkra</a></li>
		</ul>
	  </div>
	</nav>
	
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
  {
    path: '/compare/:slug1/:slug2',
    name: 'CompareTaxons',
    component: CompareTaxonsComponent
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



