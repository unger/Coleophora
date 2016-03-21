import {TaxonImage} from './taxon-image';
import {Taxon} from './taxon';

export class TaxonService {

  taxonImageDict: TaxonImage[] = [];

  constructor() {
      // Check which taxons has images
	  for (var k = 0 ; k < TAXONIMAGES.length ; k++) {
		if (this.taxonImageDict[TAXONIMAGES[k].latin] == undefined) {
			this.taxonImageDict[TAXONIMAGES[k].latin] = TAXONIMAGES[k];
		}
	  }
	  
	  for(var i = 0 ; i < ALLTAXONS.length ; i++) {
		if (this.taxonImageDict[ALLTAXONS[i].latin] !== undefined) {
			ALLTAXONS[i].hasImage = true;
		}
		if (ALLTAXONS[i].similar !== undefined) {
	      for (var k = 0 ; k < ALLTAXONS[i].similar.length ; k++) {
			if (this.taxonImageDict[ALLTAXONS[i].similar[k].latin] !== undefined) {
				ALLTAXONS[i].similar[k].hasImage = true;
				ALLTAXONS[i].similar[k].slug = this.taxonImageDict[ALLTAXONS[i].similar[k].latin].slug;
			}
		  }
		}

	  }
  }


  getTaxonImages() {
    var _filteredTaxons: TaxonImage[] = [];
	var addedTaxons = [];

	for(var i = 0; i < TAXONIMAGES.length ; i++) {
		if (!TAXONIMAGES[i].unsure) {
			if (addedTaxons[TAXONIMAGES[i].slug] == undefined) {
				_filteredTaxons.push(TAXONIMAGES[i]);
				addedTaxons[TAXONIMAGES[i].slug] = true;
			}
		}
	}

    return _filteredTaxons;
  }
  
  getUnsureTaxonImages() {
    var _filteredTaxons: TaxonImage[] = [];
	var addedTaxons = [];

	for(var i = 0; i < TAXONIMAGES.length ; i++) {
		if (TAXONIMAGES[i].unsure) {
			if (addedTaxons[TAXONIMAGES[i].slug] == undefined) {
				_filteredTaxons.push(TAXONIMAGES[i]);
				addedTaxons[TAXONIMAGES[i].slug] = true;
			}
		}
	}

    return _filteredTaxons;
  }  

  getTaxon(slug:string) {
	for(var i = 0; i < ALLTAXONS.length ; i++) {
		if (ALLTAXONS[i].slug === slug) {
			return ALLTAXONS[i];
		}
	}
	
	return null;
  }
  
  getTaxonImagesForGroup(group:string) {
    var _filteredTaxons: TaxonImage[] = [];
    var _secondaryTaxons: TaxonImage[] = [];
	var addedTaxons = [];
	
	for(var i = 0; i < TAXONIMAGES.length ; i++) {
		for(var k = 0; k < TAXONIMAGES[i].group.length ; k++) {
			if (TAXONIMAGES[i].group[k] == group) {
				if (addedTaxons[TAXONIMAGES[i].latin] == undefined) {
					if (k == 0) {
						_filteredTaxons.push(TAXONIMAGES[i]);
						addedTaxons[TAXONIMAGES[i].latin] = true;
					} else {
						_secondaryTaxons.push(TAXONIMAGES[i]);
					}
				}
			}
		}
	}
	for(var i = 0; i < _secondaryTaxons.length ; i++) {
		if (addedTaxons[_secondaryTaxons[i].latin] == undefined) {
			_filteredTaxons.push(_secondaryTaxons[i]);
			addedTaxons[_secondaryTaxons[i].latin] = true;
		}
	}

    return _filteredTaxons;
  }
  
  getTaxonsForGroup(group:string) {
    var _filteredTaxons: Taxon[] = [];
    var _secondaryTaxons: Taxon[] = [];
	var addedTaxons = [];
	
	for(var i = 0; i < ALLTAXONS.length ; i++) {
		if (ALLTAXONS[i].group != undefined) {
			for(var k = 0; k < ALLTAXONS[i].group.length ; k++) {
				if (ALLTAXONS[i].group[k] == group) {
					if (k == 0) {
						addedTaxons[ALLTAXONS[i].latin] = true;
						_filteredTaxons.push(ALLTAXONS[i]);
					} else {
						_secondaryTaxons.push(ALLTAXONS[i]);
					}
				}
			}
		}
	}
	for(var i = 0; i < _secondaryTaxons.length ; i++) {
		if (addedTaxons[_secondaryTaxons[i].latin] == undefined) {
			_filteredTaxons.push(_secondaryTaxons[i]);
			addedTaxons[_secondaryTaxons[i].latin] = true;
		}
	}

    return _filteredTaxons;
  }
  
  getTaxonImagesForId(id:string) {
    var _filteredTaxons: TaxonImage[] = [];
	
	for(var i = 0; i < TAXONIMAGES.length ; i++) {
		if (TAXONIMAGES[i].slug == id) {
			_filteredTaxons.push(TAXONIMAGES[i]);
		}
	}

    return _filteredTaxons;
  }
  
}


var TAXONIMAGES: TaxonImage[] = [

      {
	    group:['A'],
	    name:'Sötväpplingsäckmal',
		latin:'Coleophora trifolii', 
		slug:'coleophora_trifolii', 
		image:'img/coleophora_trifolii-§3-15-3538.jpg',
		date: '2015-07-13',
		site: 'Rådasjön, Vg',
		unsure: false,
		specimen: 3,
		detYear: 2015,
		detBy: 'Magnus Unger',
		detMethod: 'foto',
		photographer: 'Magnus Unger',
		bildId: '15-3538'
	  },
      {
	    group:['A'],
	    name:'Sötväpplingsäckmal',
		latin:'Coleophora trifolii', 
		slug:'coleophora_trifolii', 
		image:'img/coleophora_trifolii-§2-11-8889.jpg',
		date: '2011-07-04',
		site: 'Släp, Hl',
		unsure: false,
		specimen: 2,
		detYear: 2012,
		detBy: 'Jan Å. Jonasson',
		detMethod: '',
		photographer: 'Magnus Unger',
		bildId: '11-8889'
	  },
      {
	    group:['A'],
	    name:'Sötväpplingsäckmal',
		latin:'Coleophora trifolii', 
		slug:'coleophora_trifolii', 
		image:'img/coleophora_trifolii-§1-11-8678.jpg',
		date: '2011-07-04',
		site: 'Släp, Hl',
		unsure: false,
		specimen: 1,
		detYear: 2012,
		detBy: 'Jan Å. Jonasson',
		detMethod: '',
		photographer: 'Magnus Unger',
		bildId: '11-8678'
	  },
	  {
	    group:['A'],
	    name:'Sen grönglanssäckmal',
		latin:'Coleophora alcyonipennella', 
		slug:'coleophora_alcyonipennella', 
		image:'img/coleophora_alcyonipennella-§1-10-1842.jpg',
		date: '2010-08-01',
		site: 'Släp, Hl',
		unsure: false,
		specimen: 1,
		detYear: 2011,
		detBy: 'Jan Å. Jonasson',
		detMethod: 'genprep',
		photographer: 'Magnus Unger',
		bildId: '10-1842'
	  },
      {
	    group:['A'],
	    name:'Tidig grönglanssäckmal',
		latin:'Coleophora frischella', 
		slug:'coleophora_frischella', 
		image:'img/coleophora_frischella-§1-10-1281.jpg',
		date: '2011-08-01',
		site: 'Nidingen, Hl',
		unsure: false,
		specimen: 1,
		detYear: 2012,
		detBy: 'Jan Å. Jonasson',
		detMethod: 'genprep',
		photographer: 'Magnus Unger',
		bildId: '10-1281'
	  },

      {
	    group:['A'],
	    name:'Fjällsprötad grönglanssäckmal',
		latin:'Coleophora deauratella', 
		slug:'coleophora_deauratella', 
		image:'img/coleophora_deauratella-§1-15-3015.jpg',
		date: '2015-07-04',
		site: 'Nidingen, Hl',
		unsure: false,
		specimen: 1,
		detYear: 2015,
		detBy: 'Magnus Unger',
		detMethod: 'foto',
		photographer: 'Magnus Unger',
		bildId: '15-3015'
	  },
      {
	    group:['A'],
	    name:'Klövergrönglanssäckmal',
		latin:'Coleophora mayrella', 
		slug:'coleophora_mayrella', 
		image:'img/coleophora_mayrella-§1-15-3051.jpg',
		date: '2015-07-04',
		site: 'Nidingen, Hl',
		unsure: false,
		specimen: 1,
		detYear: 2015,
		detBy: 'Magnus Unger',
		detMethod: 'foto',
		photographer: 'Magnus Unger',
		bildId: '15-3051'
	  },

	  
      {
	    group:['B','H'],
	    name:'Vattrad rönnsäckmal',
		latin:'Coleophora hemerobiella', 
		slug:'coleophora_hemerobiella', 
		image:'img/coleophora_hemerobiella-§1-12-4983.jpg',
		date: '2012-07-23',
		site: 'Tofta, Gtl',
		unsure: false,
		specimen: 1,
		detYear: 2012,
		detBy: 'Magnus Unger',
		detMethod: 'foto',
		photographer: 'Magnus Unger',
		bildId: '12-4983'
	  },
      {
	    group:['B','H'],
	    name:'Vattrad rönnsäckmal',
		latin:'Coleophora hemerobiella', 
		slug:'coleophora_hemerobiella', 
		image:'img/coleophora_hemerobiella-§2-14-9290.jpg',
		date: '2014-07-21',
		site: 'Hornsjön, Öl',
		unsure: false,
		specimen: 2,
		detYear: 2014,
		detBy: 'Magnus Unger',
		detMethod: 'foto',
		photographer: 'Magnus Unger',
		bildId: '14-9290'
	  },
      {
	    group:['B'],
	    name:'Ribbad mållsäckmal',
		latin:'Coleophora clypeiferella', 
		slug:'coleophora_clypeiferella', 
		image:'img/coleophora_clypeiferella-§1-14-9721.jpg',
		date: '2014-07-22',
		site: 'Gårdby Sandhed, Öl',
		unsure: false,
		specimen: 1,
		detYear: 2016,
		detBy: 'Magnus Unger',
		detMethod: 'foto',
		photographer: 'Magnus Unger',
		bildId: '14-9721'
	  },
	  {
	    group:['B'],
	    name:'Björksäckmal',
		latin:'Coleophora serratella', 
		slug:'coleophora_serratella', 
		image:'img/coleophora_serratella-§2-11-8995.jpg',
		date: '2011-07-06',
		site: 'Släp, Hl',
		unsure: false,
		specimen: 2,
		detYear: 2012,
		detBy: 'Jan Å. Jonasson',
		detMethod: 'genprep',
		photographer: 'Magnus Unger',
		bildId: '11-8995'
	  },
	  {
	    group:['B'],
	    name:'Björksäckmal',
		latin:'Coleophora serratella', 
		slug:'coleophora_serratella', 
		image:'img/coleophora_serratella-§1-10-0151.jpg',
		date: '2010-07-19',
		site: 'Släp, Hl',
		unsure: false,
		specimen: 1,
		detYear: 2011,
		detBy: 'Jan Å. Jonasson',
		detMethod: 'genprep',
		photographer: 'Magnus Unger',
		bildId: '10-0151'
	  },
	  {
	    group:['B'],
	    name:'Gul eksäckmal',
		latin:'Coleophora lutipennella', 
		slug:'coleophora_lutipennella', 
		image:'img/coleophora_lutipennella-§2-11-8933.jpg',
		date: '2011-07-06',
		site: 'Släp, Hl',
		unsure: false,
		specimen: 2,
		detYear: 2011,
		detBy: 'Magnus Unger',
		detMethod: 'foto',
		photographer: 'Magnus Unger',
		bildId: '11-8933'
	  },
	  {
	    group:['B'],
	    name:'Gul eksäckmal',
		latin:'Coleophora lutipennella', 
		slug:'coleophora_lutipennella', 
		image:'img/coleophora_lutipennella-§3-11-8990.jpg',
		date: '2011-07-06',
		site: 'Släp, Hl',
		unsure: false,
		specimen: 3,
		detYear: 2012,
		detBy: 'Jan Å. Jonasson',
		detMethod: 'genprep',
		photographer: 'Magnus Unger',
		bildId: '11-8990'
	  },
	  /*{
	    group:['B'],
	    name:'Gul eksäckmal',
		latin:'Coleophora lutipennella', 
		slug:'coleophora_lutipennella', 
		image:'img/coleophora_lutipennella-§4-11-8998.jpg',
		date: '2011-07-06',
		site: 'Släp, Hl',
		unsure: false,
		specimen: 4,
		detYear: 2012,
		detBy: 'Jan Å. Jonasson',
		detMethod: 'genprep',
		photographer: 'Magnus Unger',
		bildId: '11-8998'
	  },*/
	  {
	    group:['B'],
	    name:'Gul eksäckmal',
		latin:'Coleophora lutipennella', 
		slug:'coleophora_lutipennella', 
		image:'img/coleophora_lutipennella-§1-11-8731.jpg',
		date: '2011-07-04',
		site: 'Släp, Hl',
		unsure: false,
		specimen: 1,
		detYear: 2012,
		detBy: 'Jan Å. Jonasson',
		detMethod: 'genprep',
		photographer: 'Magnus Unger',
		bildId: '11-8731'
	  },
	  {
	    group:['B'],
	    name:'Apelsäckmal',
		latin:'Coleophora spinella', 
		slug:'coleophora_spinella', 
		image:'img/coleophora_spinella-§1-10-0822.jpg',
		date: '2010-07-21',
		site: 'Släp, Hl',
		unsure: false,
		specimen: 1,
		detYear: 2012,
		detBy: 'Jan Å. Jonasson',
		detMethod: 'genprep',
		photographer: 'Magnus Unger',
		bildId: '10-0822'
	  },
	  {
	    group:['B'],
	    name:'Apelsäckmal',
		latin:'Coleophora spinella', 
		slug:'coleophora_spinella', 
		image:'img/coleophora_spinella-§1-10-0823.jpg',
		date: '2010-07-21',
		site: 'Släp, Hl',
		unsure: false,
		specimen: 1,
		detYear: 2012,
		detBy: 'Jan Å. Jonasson',
		detMethod: 'genprep',
		photographer: 'Magnus Unger',
		bildId: '10-0823'
	  },
	  {
	    group:['B'],
	    name:'Apelsäckmal',
		latin:'Coleophora spinella', 
		slug:'coleophora_spinella', 
		image:'img/coleophora_spinella-§1-10-0824.jpg',
		date: '2010-07-21',
		site: 'Släp, Hl',
		unsure: false,
		specimen: 1,
		detYear: 2012,
		detBy: 'Jan Å. Jonasson',
		detMethod: 'genprep',
		photographer: 'Magnus Unger',
		bildId: '10-0824'
	  },
	  {
	    group:['B'],
	    name:'Videsäckmal',
		latin:'Coleophora lusciniaepennella', 
		slug:'coleophora_lusciniaepennella', 
		image:'img/coleophora_lusciniaepennella-§1-11-8837.jpg',
		date: '2011-07-04',
		site: 'Släp, Hl',
		unsure: false,
		specimen: 1,
		detYear: 2012,
		detBy: 'Jan Å. Jonasson',
		detMethod: 'genprep',
		photographer: 'Magnus Unger',
		bildId: '11-8837'
	  },
	  {
	    group:['B'],
	    name:'Säckmal sp',
		latin:'Coleophora sp', 
		slug:'coleophora_sp_group_b', 
		image:'img/coleophora_sp-§1-11-8232.jpg',
		date: '2011-07-01',
		site: 'Vargefjället, Boh',
		unsure: true,
		specimen: 1,
		detYear: 2011,
		detBy: '',
		detMethod: '',
		photographer: 'Magnus Unger',
		bildId: '11-8232'
	  },
	  {
	    group:['B'],
	    name:'Nyponsäckmal',
		latin:'Coleophora gryphipennella', 
		slug:'coleophora_gryphipennella', 
		image:'img/coleophora_gryphipennella-§1-10-7941.jpg',
		date: '2010-07-03',
		site: 'Släp, Hl',
		unsure: false,
		specimen: 1,
		detYear: 2010,
		detBy: 'Jan Å. Jonasson',
		detMethod: 'genprep',
		photographer: 'Magnus Unger',
		bildId: '10-7941'
	  }, 
      
      {
	    group:['C'],
	    name:'Skarpringad tågsäckmal',
		latin:'Coleophora caespititiella', 
		slug:'coleophora_caespititiella', 
		image:'img/coleophora_caespititiella-§1-11-7435.jpg',
		date: '2011-06-05',
		site: 'Älje, Porsen, Boh',
		unsure: false,
		specimen: 1,
		detYear: 2011,
		detBy: 'Hans Petersson',
		detMethod: '',
		photographer: 'Magnus Unger',
		bildId: '11-7435'
	  },
	  {
	    group:['C','B'],
	    name:'Ljuskantad eksäckmal',
		latin:'Coleophora flavipennella', 
		slug:'coleophora_flavipennella', 
		image:'img/coleophora_flavipennella-§2-10-0481.jpg',
		date: '2010-07-20',
		site: 'Släp, Hl',
		unsure: false,
		specimen: 2,
		detYear: 2010,
		detBy: 'Jan Å. Jonasson',
		detMethod: 'genprep',
		photographer: 'Magnus Unger',
		bildId: '10-0481'
	  },
	  {
	    group:['C','B'],
	    name:'Ljuskantad eksäckmal',
		latin:'Coleophora flavipennella', 
		slug:'coleophora_flavipennella', 
		image:'img/coleophora_flavipennella-§1-10-0253.jpg',
		date: '2010-07-20',
		site: 'Släp, Hl',
		unsure: false,
		specimen: 1,
		detYear: 2010,
		detBy: 'Jan Å. Jonasson',
		detMethod: 'genprep',
		photographer: 'Magnus Unger',
		bildId: '10-0253'
	  },

      {
	    group:['D'],
	    name:'Allmän mållsäckmal',
		latin:'Coleophora sternipennella', 
		slug:'coleophora_sternipennella', 
		image:'img/coleophora_sternipennella-§1-10-9487.jpg',
		date: '2010-07-15',
		site: 'Nidingen, Hl',
		unsure: false,
		specimen: 1,
		detYear: 2010,
		detBy: 'Jan Å. Jonasson',
		detMethod: 'genprep',
		photographer: 'Magnus Unger',
		bildId: '10-9487'
	  },
      {
	    group:['D','C'],
	    name:'Gulgrå mållsäckmal',
		latin:'Coleophora saxicolella', 
		slug:'coleophora_saxicolella', 
		image:'img/coleophora_saxicolella-§1-10-0820.jpg',
		date: '2010-07-21',
		site: 'Släp, Hl',
		unsure: false,
		specimen: 1,
		detYear: 2010,
		detBy: 'Jan Å. Jonasson',
		detMethod: 'genprep',
		photographer: 'Magnus Unger',
		bildId: '10-0820'
	  },
      {
	    group:['D','F'],
	    name:'Spetsvingad mållsäckmal',
		latin:'Coleophora vestianella', 
		slug:'coleophora_vestianella', 
		image:'img/coleophora_vestianella-§2-14-7174.jpg',
		date: '2014-07-09',
		site: 'Nidingen, Hl',
		unsure: false,
		specimen: 2,
		detYear: 2016,
		detBy: 'Jan Å. Jonasson',
		detMethod: 'genprep',
		photographer: 'Magnus Unger',
		bildId: '14-7174'
	  },
      {
	    group:['D','F'],
	    name:'Spetsvingad mållsäckmal',
		latin:'Coleophora vestianella', 
		slug:'coleophora_vestianella', 
		image:'img/coleophora_vestianella-§1-10-9652.jpg',
		date: '2010-07-16',
		site: 'Nidingen, Hl',
		unsure: false,
		specimen: 1,
		detYear: 2010,
		detBy: 'Jan Å. Jonasson',
		detMethod: 'genprep',
		photographer: 'Magnus Unger',
		bildId: '10-9652'
	  },
      {
	    group:['D','F'],
	    name:'Kustmållsäckmal',
		latin:'Coleophora atriplicis', 
		slug:'coleophora_atriplicis', 
		image:'img/coleophora_atriplicis-§1-10-8831.jpg',
		date: '2010-07-11',
		site: 'Nidingen, Hl',
		unsure: false,
		specimen: 1,
		detYear: 2010,
		detBy: 'Jan Å. Jonasson',
		detMethod: 'genprep',
		photographer: 'Magnus Unger',
		bildId: '10-8831'
	  },
      {
	    group:['D','C'],
	    name:'Allmän tågsäckmal',
		latin:'Coleophora alticolella', 
		slug:'coleophora_alticolella', 
		image:'img/coleophora_alticolella-§3-10-7963.jpg',
		date: '2010-07-03',
		site: 'Släp, Hl',
		unsure: false,
		specimen: 3,
		detYear: 2010,
		detBy: 'Magnus Unger',
		detMethod: 'foto',
		photographer: 'Magnus Unger',
		bildId: '10-7963'
	  },
      {
	    group:['D','C'],
	    name:'Allmän tågsäckmal',
		latin:'Coleophora alticolella', 
		slug:'coleophora_alticolella', 
		image:'img/coleophora_alticolella-§2-10-8020.jpg',
		date: '2010-07-03',
		site: 'Släp, Hl',
		unsure: false,
		specimen: 2,
		detYear: 2010,
		detBy: 'Jan Å. Jonasson',
		detMethod: 'genprep',
		photographer: 'Magnus Unger',
		bildId: '10-8020'
	  },
      {
	    group:['D','C'],
	    name:'Allmän tågsäckmal',
		latin:'Coleophora alticolella', 
		slug:'coleophora_alticolella', 
		image:'img/coleophora_alticolella-§1-10-6480.jpg',
		date: '2010-06-20',
		site: 'Släp, Hl',
		unsure: false,
		specimen: 1,
		detYear: 2010,
		detBy: 'Jan Å. Jonasson',
		detMethod: 'genprep',
		photographer: 'Magnus Unger',
		bildId: '10-6480'
	  },
      {
	    group:['D','C'],
	    name:'Vattenskräppesäckmal',
		latin:'Coleophora hydrolapathella', 
		slug:'coleophora_hydrolapathella', 
		image:'img/coleophora_hydrolapathella-§1-15-2861.jpg',
		date: '2015-07-04',
		site: 'Nidingen, Hl',
		unsure: false,
		specimen: 1,
		detYear: 2015,
		detBy: 'Magnus Unger',
		detMethod: 'foto',
		photographer: 'Magnus Unger',
		bildId: '15-2861'
	  },	  

      {
	    group:['E'],
	    name:'Jungfrusäckmal',
		latin:'Coleophora parthenogenella', 
		slug:'coleophora_parthenogenella', 
		image:'img/coleophora_parthenogenella-§7-15-4089.jpg',
		date: '2015-07-24',
		site: 'Släp, Hl',
		unsure: false,
		specimen: 7,
		detYear: 2015,
		detBy: 'Magnus Unger',
		detMethod: 'foto',
		photographer: 'Magnus Unger',
		bildId: '15-4089'
	  },
      {
	    group:['E'],
	    name:'Jungfrusäckmal',
		latin:'Coleophora parthenogenella', 
		slug:'coleophora_parthenogenella', 
		image:'img/coleophora_parthenogenella-§6-11-9114.jpg',
		date: '2011-07-06',
		site: 'Släp, Hl',
		unsure: false,
		specimen: 6,
		detYear: 2011,
		detBy: 'Magnus Unger',
		detMethod: 'foto',
		photographer: 'Magnus Unger',
		bildId: '11-9114'
	  },
      {
	    group:['E'],
	    name:'Jungfrusäckmal',
		latin:'Coleophora parthenogenella', 
		slug:'coleophora_parthenogenella', 
		image:'img/coleophora_parthenogenella-§5-11-9035.jpg',
		date: '2011-07-06',
		site: 'Släp, Hl',
		unsure: false,
		specimen: 5,
		detYear: 2012,
		detBy: 'Jan Å. Jonasson',
		detMethod: 'genprep',
		photographer: 'Magnus Unger',
		bildId: '11-9035'
	  },
      {
	    group:['E'],
	    name:'Jungfrusäckmal',
		latin:'Coleophora parthenogenella', 
		slug:'coleophora_parthenogenella', 
		image:'img/coleophora_parthenogenella-§4-10-1095.jpg',
		date: '2010-07-26',
		site: 'Släp, Hl',
		unsure: false,
		specimen: 4,
		detYear: 2011,
		detBy: 'Jan Å. Jonasson',
		detMethod: 'genprep',
		photographer: 'Magnus Unger',
		bildId: '10-1095'
	  },
      {
	    group:['E'],
	    name:'Jungfrusäckmal',
		latin:'Coleophora parthenogenella', 
		slug:'coleophora_parthenogenella', 
		image:'img/coleophora_parthenogenella-§3-10-0751.jpg',
		date: '2010-07-21',
		site: 'Släp, Hl',
		unsure: false,
		specimen: 3,
		detYear: 2011,
		detBy: 'Jan Å. Jonasson',
		detMethod: 'genprep',
		photographer: 'Magnus Unger',
		bildId: '10-0751'
	  },   
      {
	    group:['E'],
	    name:'Jungfrusäckmal',
		latin:'Coleophora parthenogenella', 
		slug:'coleophora_parthenogenella', 
		image:'img/coleophora_parthenogenella-§2-10-0074.jpg',
		date: '2010-07-19',
		site: 'Släp, Hl',
		unsure: false,
		specimen: 2,
		detYear: 2011,
		detBy: 'Jan Å. Jonasson',
		detMethod: 'genprep',
		photographer: 'Magnus Unger',
		bildId: '10-0074'
	  },
      {
	    group:['E'],
	    name:'Jungfrusäckmal',
		latin:'Coleophora parthenogenella', 
		slug:'coleophora_parthenogenella', 
		image:'img/coleophora_parthenogenella-§1-10-9743.jpg',
		date: '2010-07-19',
		site: 'Släp, Hl',
		unsure: false,
		specimen: 1,
		detYear: 2011,
		detBy: 'Magnus Unger',
		detMethod: 'foto',
		photographer: 'Magnus Unger',
		bildId: '10-9743'
	  },
	  
      {
	    group:['E'],
	    name:'Kilstreckad hedblomstersäckmal',
		latin:'Coleophora caelebipennella', 
		slug:'coleophora_caelebipennella', 
		image:'img/coleophora_caelebipennella-§2-14-9975.jpg',
		date: '2014-07-24',
		site: 'Mensalvret, Öl',
		unsure: false,
		specimen: 2,
		detYear: 2014,
		detBy: 'Magnus Unger',
		detMethod: 'foto',
		photographer: 'Magnus Unger',
		bildId: '14-9975'
	  },
      {
	    group:['E'],
	    name:'Kilstreckad hedblomstersäckmal',
		latin:'Coleophora caelebipennella', 
		slug:'coleophora_caelebipennella', 
		image:'img/coleophora_caelebipennella-§1-14-9681.jpg',
		date: '2014-07-22',
		site: 'Gårdby Sandhed, Öl',
		unsure: false,
		specimen: 1,
		detYear: 2014,
		detBy: 'Magnus Unger',
		detMethod: 'foto',
		photographer: 'Magnus Unger',
		bildId: '14-9681'
	  },
      {
	    group:['E'],
	    name:'Kilstreckad fältmalörtsäckmal',
		latin:'Coleophora vibicigerella', 
		slug:'coleophora_vibicigerella', 
		image:'img/coleophora_vibicigerella-§1-14-9680.jpg',
		date: '2014-07-22',
		site: 'Gårdby Sandhed, Öl',
		unsure: false,
		specimen: 1,
		detYear: 2014,
		detBy: 'Magnus Unger',
		detMethod: 'foto',
		photographer: 'Magnus Unger',
		bildId: '14-9680'
	  },
	  
      {
	    group:['F'],
	    name:'Sikelspetsad timjesäckmal',
		latin:'Coleophora lixella', 
		slug:'coleophora_lixella', 
		image:'img/coleophora_lixella-§1-11-1936.jpg',
		date: '2011-08-12',
		site: 'Visborg, Gtl',
		unsure: false,
		specimen: 1,
		detYear: 2011,
		detBy: 'Magnus Unger',
		detMethod: 'foto',
		photographer: 'Magnus Unger',
		bildId: '11-1936'
	  },
      {
	    group:['F'],
	    name:'Sikelspetsad timjesäckmal',
		latin:'Coleophora lixella', 
		slug:'coleophora_lixella', 
		image:'img/coleophora_lixella-§2-14-9846.jpg',
		date: '2014-07-22',
		site: 'Gårdby Sandhed, Öl',
		unsure: false,
		specimen: 2,
		detYear: 2014,
		detBy: 'Magnus Unger',
		detMethod: 'foto',
		photographer: 'Magnus Unger',
		bildId: '14-9846'
	  },
	  
      {
	    group:['F','G'],
	    name:'Gullrissäckmal',
		latin:'Coleophora virgaureae', 
		slug:'coleophora_virgaureae', 
		image:'img/coleophora_virgaureae-§1-10-9498.jpg',
		date: '2010-07-15',
		site: 'Nidingen, Hl',
		unsure: false,
		specimen: 1,
		detYear: 2010,
		detBy: 'Jan Å. Jonasson',
		detMethod: 'genprep',
		photographer: 'Magnus Unger',
		bildId: '10-9498'
	  }, 
      {
	    group:['F'],
	    name:'Gullrissäckmal',
		latin:'Coleophora virgaureae', 
		slug:'coleophora_virgaureae', 
		image:'img/coleophora_virgaureae-§2-10-9656.jpg',
		date: '2010-07-16',
		site: 'Nidingen, Hl',
		unsure: false,
		specimen: 2,
		detYear: 2010,
		detBy: 'Jan Å. Jonasson',
		detMethod: 'genprep',
		photographer: 'Magnus Unger',
		bildId: '10-9498'
	  }, 

      {
	    group:['F','G'],
	    name:'Silverstreckad rölleksäckmal',
		latin:'Coleophora argentula', 
		slug:'coleophora_argentula', 
		image:'img/coleophora_argentula-§1-10-8835.jpg',
		date: '2010-07-11',
		site: 'Nidingen, Hl',
		unsure: false,
		specimen: 1,
		detYear: 2011,
		detBy: 'Jan Å. Jonasson',
		detMethod: 'genprep',
		photographer: 'Magnus Unger',
		bildId: '10-8835'
	  }, 
      {
	    group:['F'],
	    name:'Blek mållsäckmal',
		latin:'Coleophora versurella', 
		slug:'coleophora_versurella', 
		image:'img/coleophora_versurella-§2-10-9431.jpg',
		date: '2010-07-15',
		site: 'Nidingen, Hl',
		unsure: false,
		specimen: 2,
		detYear: 2011,
		detBy: 'Jan Å. Jonasson',
		detMethod: 'genprep',
		photographer: 'Magnus Unger',
		bildId: '10-9431'
	  },
      {
	    group:['F'],
	    name:'Blek mållsäckmal',
		latin:'Coleophora versurella', 
		slug:'coleophora_versurella', 
		image:'img/coleophora_versurella-§1-10-7997.jpg',
		date: '2010-07-03',
		site: 'Släp, Hl',
		unsure: false,
		specimen: 1,
		detYear: 2011,
		detBy: 'Jan Å. Jonasson',
		detMethod: 'genprep',
		photographer: 'Magnus Unger',
		bildId: '10-7997'
	  },
      {
	    group:['F'],
	    name:'Blek mållsäckmal',
		latin:'Coleophora versurella', 
		slug:'coleophora_versurella', 
		image:'img/coleophora_versurella-§1-10-7999.jpg',
		date: '2010-07-03',
		site: 'Släp, Hl',
		unsure: false,
		specimen: 1,
		detYear: 2011,
		detBy: 'Jan Å. Jonasson',
		detMethod: 'genprep',
		photographer: 'Magnus Unger',
		bildId: '10-7999'
	  },
	  
      {
	    group:['F'],
	    name:'Ljus mållsäckmal',
		latin:'Coleophora adspersella', 
		slug:'coleophora_adspersella', 
		image:'img/coleophora_adspersella-§1-14-6572.jpg',
		date: '2014-07-05',
		site: 'Nidingen, Hl',
		unsure: false,
		specimen: 1,
		detYear: 2016,
		detBy: 'Jan Å. Jonasson',
		detMethod: 'genprep',
		photographer: 'Magnus Unger',
		bildId: '14-6572'
	  },
      {
	    group:['F'],
	    name:'Säckmal sp',
		latin:'Coleophora sp', 
		slug:'coleophora_sp_group_f', 
		image:'img/coleophora_sp-§1-10-8901.jpg',
		date: '2010-07-11',
		site: 'Nidingen, Hl',
		unsure: true,
		specimen: 1,
		detYear: 2010,
		detBy: '',
		detMethod: '',        
		photographer: 'Magnus Unger',
		bildId: '10-8901'
	  },
      {
	    group:['F'],
	    name:'Säckmal sp',
		latin:'Coleophora sp', 
		slug:'coleophora_sp_group_f', 
		image:'img/coleophora_sp-§1-10-8899.jpg',
		date: '2010-07-11',
		site: 'Nidingen, Hl',
		unsure: true,
		specimen: 1,
		detYear: 2010,
		detBy: '',
		detMethod: '',        
		photographer: 'Magnus Unger',
		bildId: '10-8899'
	  },
	  {
	    group:['F'],
	    name:'Säckmal sp',
		latin:'Coleophora sp', 
		slug:'coleophora_sp_group_f', 
		image:'img/coleophora_sp-§2-14-7432.jpg',
		date: '2014-07-10',
		site: 'Nidingen, Hl',
		unsure: true,
		specimen: 1,
		detYear: 2014,
		detBy: '',
		detMethod: '',        
		photographer: 'Magnus Unger',
		bildId: '14-7432'
	  },
	  
      {
	    group:['F','D'],
	    name:'Grå fältmalörtsäckmal',
		latin:'Coleophora granulatella',
		slug:'coleophora_granulatella', 
		image:'img/trol_coleophora_granulatella-§1-12-4995.jpg',
		date: '2012-07-23',
		site: 'Tofta, Gtl',
		unsure: true,
		specimen: 1,
		detYear: 2016,
		detBy: 'Magnus Unger',
		detMethod: 'foto',
		photographer: 'Magnus Unger',
		bildId: '12-4995'
	  },
      {
	    group:['F'],
	    name:'Grovfjällig fältmalörtsäckmal',
		latin:'Coleophora succursella', 
		slug:'coleophora_succursella', 
		image:'img/trol_coleophora_succursella-§1-14-9934.jpg',
		date: '2014-07-23',
		site: 'Mensalvret, Öl',
		unsure: true,
		specimen: 1,
		detYear: 2016,
		detBy: 'Magnus Unger',
		detMethod: 'foto',
		photographer: 'Magnus Unger',
		bildId: '14-9934'
	  },
	  
	  {
	    group:['G'],
	    name:'Dubbellinjerad tistelsäckmal',
		latin:'Coleophora therinella', 
		slug:'coleophora_therinella', 
		image:'img/coleophora_therinella-§1-10-7992.jpg',
		date: '2010-07-03',
		site: 'Släp, Hl',
		unsure: false,
		specimen: 1,
		detYear: 2010,
		detBy: 'Jan Å. Jonasson',
		detMethod: '',
		photographer: 'Magnus Unger',
		bildId: '10-7992'
	  },
	  {
	    group:['G'],
	    name:'Dubbellinjerad tistelsäckmal',
		latin:'Coleophora therinella', 
		slug:'coleophora_therinella', 
		image:'img/coleophora_therinella-§2-10-2431.jpg',
		date: '2010-08-05',
		site: 'Släp, Hl',
		unsure: false,
		specimen: 2,
		detYear: 2011,
		detBy: 'Jan Å. Jonasson',
		detMethod: '',
		photographer: 'Magnus Unger',
		bildId: '10-2431'
	  },
	  {
	    group:['G'],
	    name:'Dubbellinjerad tistelsäckmal',
		latin:'Coleophora therinella', 
		slug:'coleophora_therinella', 
		image:'img/coleophora_therinella-§3-10-2536.jpg',
		date: '2010-08-05',
		site: 'Släp, Hl',
		unsure: false,
		specimen: 3,
		detYear: 2010,
		detBy: 'Magnus Unger',
		detMethod: 'foto',
		photographer: 'Magnus Unger',
		bildId: '10-2536'
	  },
	  {
	    group:['G'],
	    name:'Dubbellinjerad tistelsäckmal',
		latin:'Coleophora therinella', 
		slug:'coleophora_therinella', 
		image:'img/coleophora_therinella-§4-12-5510.jpg',
		date: '2012-08-03',
		site: 'Släp, Hl',
		unsure: false,
		specimen: 4,
		detYear: 2013,
		detBy: 'Jan Å. Jonasson',
		detMethod: '',
		photographer: 'Magnus Unger',
		bildId: '12-5510'
	  },
	  {
	    group:['G'],
	    name:'Linjerad tistelsäckmal',
		latin:'Coleophora peribenanderi', 
		slug:'coleophora_peribenanderi', 
		image:'img/coleophora_peribenanderi-§1-14-7425.jpg',
		date: '2014-07-10',
		site: 'Nidingen, Hl',
		unsure: false,
		specimen: 1,
		detYear: 2010,
		detBy: 'Jan Å. Jonasson',
		detMethod: 'genprep',
		photographer: 'Magnus Unger',
		bildId: '14-7425'
	  },
	  {
	    group:['G'],
	    name:'Gullinjerad gullrissäckmal',
		latin:'Coleophora trochilella', 
		slug:'coleophora_trochilella', 
		image:'img/coleophora_trochilella-§1-11-1196.jpg',
		date: '2011-07-31',
		site: 'Nidingen, Hl',
		unsure: false,
		specimen: 1,
		detYear: 2012,
		detBy: 'Jan Å. Jonasson',
		detMethod: 'genprep',
		photographer: 'Magnus Unger',
		bildId: '11-1196'
	  },
	  {
	    group:['G'],
	    name:'Gullinjerad gullrissäckmal',
		latin:'Coleophora trochilella', 
		slug:'coleophora_trochilella', 
		image:'img/coleophora_trochilella-§2-11-1199.jpg',
		date: '2011-07-30',
		site: 'Nidingen, Hl',
		unsure: false,
		specimen: 2,
		detYear: 2012,
		detBy: 'Jan Å. Jonasson',
		detMethod: 'genprep',
		photographer: 'Magnus Unger',
		bildId: '11-1199'
	  },
	  {
	    group:['G'],
	    name:'Vitsprötad gullrissäckmal',
		latin:'Coleophora ramosella', 
		slug:'coleophora_ramosella', 
		image:'img/trol_coleophora_ramosella-§1-14-5331.jpg',
		date: '2014-06-08',
		site: 'Lillhagens Sandlycka, Boh',
		unsure: true,
		specimen: 1,
		detYear: 2016,
		detBy: 'Magnus Unger',
		detMethod: 'foto',
		photographer: 'Magnus Unger',
		bildId: '14-5331'
	  },
      {
	    group:['G'],
	    name:'Gullinjerad tågsäckmal',
		latin:'Coleophora taeniipennella', 
		slug:'coleophora_taeniipennella', 
		image:'img/trol_coleophora_taeniipennella-§1-10-6831.jpg',
		date: '2010-06-25',
		site: 'Rydal, Vg',
		unsure: true,
		specimen: 1,
		detYear: 2016,
		detBy: 'Magnus Unger',
		detMethod: 'foto',
		photographer: 'Magnus Unger',
		bildId: '10-6831'
	  }, 
	  
	  
      {
	    group:['H'],
	    name:'Pudrad sälgsäckmal',
		latin:'Coleophora albidella', 
		slug:'coleophora_albidella', 
		image:'img/coleophora_albidella-§1-10-9960.jpg',
		date: '2010-07-19',
		site: 'Släp, Hl',
		unsure: false,
		specimen: 1,
		detYear: 2011,
		detBy: 'Jan Å. Jonasson',
		detMethod: 'genprep',
		photographer: 'Magnus Unger',
		bildId: '10-9960'
	  },
      {
	    group:['H'],
	    name:'Vit eksäckmal',
		latin:'Coleophora kuehnella', 
		slug:'coleophora_kuehnella', 
		image:'img/coleophora_kuehnella-§2-11-8684.jpg',
		date: '2011-07-04',
		site: 'Släp, Hl',
		unsure: false,
		specimen: 2,
		detYear: 2012,
		detBy: 'Jan Å. Jonasson',
		detMethod: 'genprep',
		photographer: 'Magnus Unger',
		bildId: '11-8684'
	  },
      {
	    group:['H'],
	    name:'Vit eksäckmal',
		latin:'Coleophora kuehnella', 
		slug:'coleophora_kuehnella', 
		image:'img/coleophora_kuehnella-§1-10-8052.jpg',
		date: '2010-07-03',
		site: 'Släp, Hl',
		unsure: false,
		specimen: 1,
		detYear: 2010,
		detBy: 'Jan Å. Jonasson',
		detMethod: 'genprep',
		photographer: 'Magnus Unger',
		bildId: '10-8052'
	  },
      {
	    group:['H'],
	    name:'Vit eksäckmal',
		latin:'Coleophora kuehnella', 
		slug:'coleophora_kuehnella', 
		image:'img/coleophora_kuehnella-§3-15-3460.jpg',
		date: '2015-07-13',
		site: 'Rådasjön, Vg',
		unsure: false,
		specimen: 3,
		detYear: 2015,
		detBy: 'Magnus Unger',
		detMethod: 'foto',
		photographer: 'Magnus Unger',
		bildId: '15-3460'
	  },
      {
	    group:['H','G'],
	    name:'Gulstreckad björksäckmal',
		latin:'Coleophora betulella', 
		slug:'coleophora_betulella', 
		image:'img/coleophora_betulella-§2-14-9018.jpg',
		date: '2014-07-20',
		site: 'Partille, Vg',
		unsure: false,
		specimen: 2,
		detYear: 2015,
		detBy: 'Magnus Unger',
		detMethod: 'foto',
		photographer: 'Magnus Unger',
		bildId: '14-9018'
	  },
      {
	    group:['H','G','E'],
	    name:'Gulstreckad björksäckmal',
		latin:'Coleophora betulella', 
		slug:'coleophora_betulella', 
		image:'img/coleophora_betulella-§1-15-3591.jpg',
		date: '2015-07-13',
		site: 'Rådasjön, Vg',
		unsure: false,
		specimen: 1,
		detYear: 2015,
		detBy: 'Magnus Unger',
		detMethod: 'foto',
		photographer: 'Magnus Unger',
		bildId: '15-3591'
	  }
  ];
  
  
var ALLTAXONS: Taxon[] = [
   {
      artId:687,
      dyntaxaId:100433,
	  group: ['B'],
      name:'Trampörtgallmal',
      latin:'Augasma aeratella',
      auctor:'(Zeller, 1839)',
      hasImage:false,
      slugSv:'trampörtgallmal',
      slug:'augasma_aeratella'
   },
   {
      artId:688,
      dyntaxaId:214424,
	  group: ['B'],
      name:'Buskstjärnblomkapselmal',
      latin:'Metriotes lutarea',
      auctor:'(Haworth, 1828)',
      hasImage:false,
      slugSv:'buskstjärnblomkapselmal',
      slug:'metriotes_lutarea'
   },
   {
      artId:689,
      dyntaxaId:100687,
	  group: ['C'],
      name:'Svartvit säckmal',
      latin:'Coleophora albella',
      auctor:'(Thunberg, 1788)',
      hasImage:false,
      slugSv:'svartvit_säckmal',
      slug:'coleophora_albella'
   },
   {
      artId:690,
      dyntaxaId:214426,
      group: ['B'],
      name:'Spireasäckmal',
      latin:'Coleophora spiraeella',
      auctor:'Rebel, 1916',
      hasImage:false,
      slugSv:'spireasäckmal',
      slug:'coleophora_spiraeella'
   },
   {
      artId:691,
      dyntaxaId:214427,
      group: ['B'],
      name:'Gul eksäckmal',
      latin:'Coleophora lutipennella',
      auctor:'(Zeller, 1838)',
      hasImage:false,
      slugSv:'gul_eksäckmal',
      slug:'coleophora_lutipennella'
   },
   {
      artId:692,
      dyntaxaId:214428,
      group: ['B'],
      name:'Nyponsäckmal',
      latin:'Coleophora gryphipennella',
      auctor:'(Hübner, 1796)',
      hasImage:false,
      slugSv:'nyponsäckmal',
      slug:'coleophora_gryphipennella'
   },
   {
      artId:693,
      dyntaxaId:214429,
      group: ['C','B'],
      name:'Ljuskantad eksäckmal',
      latin:'Coleophora flavipennella',
      auctor:'(Duponchel, 1843)',
      hasImage:false,
      slugSv:'ljuskantad_eksäckmal',
      slug:'coleophora_flavipennella'
   },
   {
      artId:694,
      dyntaxaId:100681,
      group: ['C'],
      name:'Ljuskantad slånsäckmal',
      latin:'Coleophora adjectella',
      auctor:'Herrich-Schäffer, 1861',
      hasImage:false,
      slugSv:'ljuskantad_slånsäckmal',
      slug:'coleophora_adjectella'
   },
   {
      artId:695,
      dyntaxaId:214431,
      group: ['C'],
      name:'Ljuskantad björksäckmal',
      latin:'Coleophora milvipennis',
      auctor:'Zeller, 1839',
      hasImage:false,
      slugSv:'ljuskantad_björksäckmal',
      slug:'coleophora_milvipennis'
   },
   {
      artId:696,
      dyntaxaId:214432,
      group: ['C'],
      name:'Ljuskantad alsäckmal',
      latin:'Coleophora alnifoliae',
      auctor:'Barasch, 1934',
      hasImage:false,
      slugSv:'ljuskantad_alsäckmal',
      slug:'coleophora_alnifoliae'
   },
   {
      artId:697,
      dyntaxaId:214433,
      group: ['C'],
      name:'Vitkantad almsäckmal',
      latin:'Coleophora badiipennella',
      auctor:'(Duponchel, 1843)',
      hasImage:false,
      slugSv:'vitkantad_almsäckmal',
      slug:'coleophora_badiipennella'
   },
   {
      artId:698,
      dyntaxaId:214434,
      group: ['C'],
      name:'Ljuskantad almsäckmal',
      latin:'Coleophora limosipennella',
      auctor:'(Duponchel, 1843)',
      hasImage:false,
      slugSv:'ljuskantad_almsäckmal',
      slug:'coleophora_limosipennella'
   },
   {
      artId:699,
      dyntaxaId:214435,
      group: ['B'],
      name:'Gulgrå rönnsäckmal',
      latin:'Coleophora siccifolia',
      auctor:'Stainton, 1856',
      hasImage:false,
      slugSv:'gulgrå_rönnsäckmal',
      slug:'coleophora_siccifolia'
   },
   {
      artId:700,
      dyntaxaId:214436,
      group: ['B'],
      name:'Odonsäckmal',
      latin:'Coleophora uliginosella',
      auctor:'Glitz, 1872',
      hasImage:false,
      slugSv:'odonsäckmal',
      slug:'coleophora_uliginosella'
   },
   {
      artId:701,
      dyntaxaId:214437,
      group: ['B'],
      name:'Björksäckmal',
      latin:'Coleophora serratella',
      auctor:'(Linnaeus, 1761)',
      hasImage:false,
      slugSv:'björksäckmal',
      slug:'coleophora_serratella'
   },
   {
      artId:702,
      dyntaxaId:214438,
      group: ['B'],
      name:'Apelsäckmal',
      latin:'Coleophora spinella',
      auctor:'(Schrank, 1802)',
      hasImage:false,
      slugSv:'apelsäckmal',
      slug:'coleophora_spinella'
   },
   {
      artId:703,
      dyntaxaId:214439,
      group: ['B'],
      name:'Körsbärssäckmal',
      latin:'Coleophora prunifoliae',
      auctor:'Doets, 1944',
      hasImage:false,
      slugSv:'körsbärssäckmal',
      slug:'coleophora_prunifoliae'
   },
   {
      artId:704,
      dyntaxaId:214440,
      group: ['C','D'],
      name:'Vattenskräppesäckmal',
      latin:'Coleophora hydrolapathella',
      auctor:'M. Hering, 1924',
      hasImage:false,
      slugSv:'vattenskräppesäckmal',
      slug:'coleophora_hydrolapathella'
   },
   {
      artId:705,
      dyntaxaId:214441,
      group: ['C'],
      name:'Vitkantad rönnsäckmal',
      latin:'Coleophora trigeminella',
      auctor:'Fuchs, 1881',
      hasImage:false,
      slugSv:'vitkantad_rönnsäckmal',
      slug:'coleophora_trigeminella'
   },
   {
      artId:706,
      dyntaxaId:214442,
      group: ['B'],
      name:'Mossesäckmal',
      latin:'Coleophora cornutella',
      auctor:'Herrich-Schäffer, 1861',
      hasImage:false,
      slugSv:'mossesäckmal',
      slug:'coleophora_cornutella'
   },
   {
      artId:707,
      dyntaxaId:214443,
      group: ['B'],
      name:'Liten grönglanssäckmal',
      latin:'Coleophora fuscocuprella',
      auctor:'Herrich-Schäffer, 1854',
      hasImage:false,
      slugSv:'liten_grönglanssäckmal',
      slug:'coleophora_fuscocuprella'
   },
   {
      artId:708,
      dyntaxaId:214444,
      group: ['C'],
      name:'Mjölonsäckmal',
      latin:'Coleophora arctostaphyli',
      auctor:'Meder, 1934',
      hasImage:false,
      slugSv:'mjölonsäckmal',
      slug:'coleophora_arctostaphyli'
   },
   {
      artId:709,
      dyntaxaId:214445,
      group: ['B'],
      name:'Videsäckmal',
      latin:'Coleophora lusciniaepennella',
      auctor:'(Treitschke, 1833)',
      hasImage:false,
      slugSv:'videsäckmal',
      slug:'coleophora_lusciniaepennella'
   },
   {
      artId:710,
      dyntaxaId:214446,
      group: ['B'],
      name:'Pyrolasäckmal',
      latin:'Coleophora idaeella',
      auctor:'Hofmann, 1869',
      hasImage:false,
      slugSv:'pyrolasäckmal',
      slug:'coleophora_idaeella'
   },
   {
      artId:711,
      dyntaxaId:214447,
      group: ['B'],
      name:'Blåbärsäckmal',
      latin:'Coleophora vacciniella',
      auctor:'Herrich-Schäffer, 1861',
      hasImage:false,
      slugSv:'blåbärsäckmal',
      slug:'coleophora_vacciniella'
   },
   {
      artId:712,
      dyntaxaId:214448,
      group: ['B'],
      name:'Mindre skvattramsäckmal',
      latin:'Coleophora ledi',
      auctor:'Stainton, 1860',
      hasImage:false,
      slugSv:'mindre_skvattramsäckmal',
      slug:'coleophora_ledi'
   },
   {
      artId:713,
      dyntaxaId:214449,
      group: ['B'],
      name:'Blygrå säckmal',
      latin:'Coleophora plumbella',
      auctor:'Kanerva, 1941',
      hasImage:false,
      slugSv:'blygrå_säckmal',
      slug:'coleophora_plumbella'
   },
   {
      artId:714,
      dyntaxaId:214450,
      group: ['B'],
      name:'Lingonpistolsäckmal',
      latin:'Coleophora vitisella',
      auctor:'Gregson, 1856',
      hasImage:false,
      slugSv:'lingonpistolsäckmal',
      slug:'coleophora_vitisella'
   },
   {
      artId:715,
      dyntaxaId:214451,
      group: ['B'],
      name:'Allmän lingonsäckmal',
      latin:'Coleophora glitzella',
      auctor:'Hofmann, 1869',
      hasImage:false,
      slugSv:'allmän_lingonsäckmal',
      slug:'coleophora_glitzella'
   },
   {
      artId:716,
      dyntaxaId:214452,
      group: ['B'],
      name:'Musgrå lingonsäckmal',
      latin:'Coleophora murinella',
      auctor:'Tengström, 1848',
      hasImage:false,
      slugSv:'musgrå_lingonsäckmal',
      slug:'coleophora_murinella'
   },
   {
      artId:717,
      dyntaxaId:214453,
      group: ['B'],
      name:'Allätarsäckmal',
      latin:'Coleophora violacea',
      auctor:'(Ström, 1783)',
      hasImage:false,
      slugSv:'allätarsäckmal',
      slug:'coleophora_violacea'
   },
   {
      artId:718,
      dyntaxaId:214454,
      group: ['B'],
      name:'Brudbrödsäckmal',
      latin:'Coleophora potentillae',
      auctor:'Elisha, 1885',
      hasImage:false,
      slugSv:'brudbrödsäckmal',
      slug:'coleophora_potentillae'
   },
   {
      artId:719,
      dyntaxaId:214455,
      group: ['B'],
      name:'Skvattramsäckmal',
      latin:'Coleophora obscuripalpella',
      auctor:'Kanerva, 1941',
      hasImage:false,
      slugSv:'skvattramsäckmal',
      slug:'coleophora_obscuripalpella'
   },
   {
      artId:720,
      dyntaxaId:214456,
      group: ['B'],
      name:'Hjortronsäckmal',
      latin:'Coleophora thulea',
      auctor:'Johansson, 1967',
      hasImage:false,
      slugSv:'hjortronsäckmal',
      slug:'coleophora_thulea'
   },
   {
      artId:721,
      dyntaxaId:214457,
      group: ['B'],
      name:'Fjällsippesäckmal',
      latin:'Coleophora unigenella',
      auctor:'Svensson, 1966',
      hasImage:false,
      slugSv:'fjällsippesäckmal',
      slug:'coleophora_unigenella'
   },
   {
      artId:722,
      dyntaxaId:214458,
      group: ['B'],
      name:'Liten ljungsäckmal',
      latin:'Coleophora juncicolella',
      auctor:'Stainton, 1851',
      hasImage:false,
      slugSv:'liten_ljungsäckmal',
      slug:'coleophora_juncicolella'
   },
   {
      artId:723,
      dyntaxaId:214459,
      group: ['B'],
      name:'Grå björksäckmal',
      latin:'Coleophora orbitella',
      auctor:'Zeller, 1849',
      hasImage:false,
      slugSv:'grå_björksäckmal',
      slug:'coleophora_orbitella'
   },
   {
      artId:724,
      dyntaxaId:214460,
      group: ['B'],
      name:'Brun alsäckmal',
      latin:'Coleophora binderella',
      auctor:'Kollar, 1832',
      hasImage:false,
      slugSv:'brun_alsäckmal',
      slug:'coleophora_binderella'
   },
   {
      artId:725,
      dyntaxaId:214461,
      group: ['B'],
      name:'Trysäckmal',
      latin:'Coleophora ahenella',
      auctor:'Heinemann, 1876',
      hasImage:false,
      slugSv:'trysäckmal',
      slug:'coleophora_ahenella'
   },
   {
      artId:726,
      dyntaxaId:214462,
      group: ['B'],
      name:'Myntesäckmal',
      latin:'Coleophora albitarsella',
      auctor:'Zeller, 1849',
      hasImage:false,
      slugSv:'myntesäckmal',
      slug:'coleophora_albitarsella'
   },
   {
      artId:727,
      dyntaxaId:100692,
      group: ['B'],
      name:'Lungörtssäckmal',
      latin:'Coleophora pulmonariella',
      auctor:'Ragonot, 1874',
      hasImage:false,
      slugSv:'lungörtssäckmal',
      slug:'coleophora_pulmonariella'
   },
   {
      artId:728,
      dyntaxaId:214464,
      group: ['A'],
      name:'Sötväpplingsäckmal',
      latin:'Coleophora trifolii',
      auctor:'(Curtis, 1832)',
      hasImage:false,
      slugSv:'sötväpplingsäckmal',
      slug:'coleophora_trifolii',
	  similar: [
		{
		  name:'Sen grönglanssäckmal',
		  latin:'Coleophora alcyonipennella',
		  difference: 'Mindre samt saknar gula fransar bakom ögonen'
		},
		{
		  name:'Tidig grönglanssäckmal',
		  latin:'Coleophora frischella',
		  difference: 'Mindre samt saknar gula fransar bakom ögonen'
		}
	  ]	  
   },
   {
      artId:729,
      dyntaxaId:214465,
      group: ['A'],
      name:'Tidig grönglanssäckmal',
      latin:'Coleophora frischella',
      auctor:'(Linnaeus, 1758)',
      hasImage:false,
      slugSv:'tidig_grönglanssäckmal',
      slug:'coleophora_frischella',
	  similar: [
		{
		  name:'Sen grönglanssäckmal',
		  latin:'Coleophora alcyonipennella',
		  difference: 'Oskiljaktig på yttre karaktärer, genitalie kontroll krävs'
		},
		{
		  name:'Sötväpplingsäckmal',
		  latin:'Coleophora trifolii',
		  difference: 'Något större samt gula fransar bakom ögat.'
		}
	  ]	  
   },
   {
      artId:730,
      dyntaxaId:214466,
      group: ['A'],
      name:'Sen grönglanssäckmal',
      latin:'Coleophora alcyonipennella',
      auctor:'(Kollar, 1832)',
      hasImage:false,
      slugSv:'sen_grönglanssäckmal',
      slug:'coleophora_alcyonipennella',
	  similar: [
		{
		  name:'Tidig grönglanssäckmal',
		  latin:'Coleophora frischella',
		  difference: 'Oskiljaktig på yttre karaktärer, genitalie kontroll krävs'
		},
		{
		  name:'Sötväpplingsäckmal',
		  latin:'Coleophora trifolii',
		  difference: 'Något större samt gula fransar bakom ögat.'
		}
	  ]	  
   },
   {
      artId:731,
      dyntaxaId:102403,
      group: ['G'],
      name:'Skarplinjerad krisslesäckmal',
      latin:'Coleophora conyzae',
      auctor:'Zeller, 1868',
      hasImage:false,
      slugSv:'skarplinjerad_krisslesäckmal',
      slug:'coleophora_conyzae'
   },
   {
      artId:732,
      dyntaxaId:100688,
      group: ['G'],
      name:'Stinksyskesäckmal',
      latin:'Coleophora lineolea',
      auctor:'(Haworth, 1828)',
      hasImage:false,
      slugSv:'stinksyskesäckmal',
      slug:'coleophora_lineolea'
   },
   {
      artId:733,
      dyntaxaId:214469,
      group: ['B','H'],
      name:'Vattrad rönnsäckmal',
      latin:'Coleophora hemerobiella',
      auctor:'(Scopoli, 1763)',
      hasImage:false,
      slugSv:'vattrad_rönnsäckmal',
      slug:'coleophora_hemerobiella'
   },
   {
      artId:734,
      dyntaxaId:214470,
      group: ['B'],
      name:'Olivfärgad stjärnblomsäckmal',
      latin:'Coleophora lithargyrinella',
      auctor:'Zeller, 1849',
      hasImage:false,
      slugSv:'olivfärgad_stjärnblomsäckmal',
      slug:'coleophora_lithargyrinella'
   },
   {
      artId:735,
      dyntaxaId:100689,
      group: ['E'],
      name:'Sandvedelsäckmal',
      latin:'Coleophora onobrychiella',
      auctor:'Zeller, 1849',
      hasImage:false,
      slugSv:'sandvedelsäckmal',
      slug:'coleophora_onobrychiella',
	  redlist: 'RE',
	  distribution: 'Endast känd från Vitemölla, Skåne. Numera betraktad som utdöd från landet då den förgäves eftersökts från 1993 och framåt.',
	  foodplants: [
		{
		  name:'Sandvedel',
		  latin:'Astragalus arenarius',
		}
	  ],
	  imago: 'juli'
   },
   {
      artId:736,
      dyntaxaId:102402,
      group: ['E'],
      name:'Sötvedelbladsäckmal',
      latin:'Coleophora colutella',
      auctor:'(Fabricius, 1794)',
      hasImage:false,
      slugSv:'sötvedelbladsäckmal',
      slug:'coleophora_colutella',
	  redlist: 'RE',
	  distribution: 'Angiven från Sk och Sm men inga belagda exemplar finns tillgängliga, arten är eftersökt förgäves de senaste decennierna.',
	  imago: 'slutet av juni till slutet av juli'
   },
   {
      artId:737,
      dyntaxaId:100685,
      group: ['E'],
      name:'Ginstsäckmal',
      latin:'Coleophora genistae',
      auctor:'Stainton, 1847',
      hasImage:false,
      slugSv:'ginstsäckmal',
      slug:'coleophora_genistae',
	  redlist: 'EN',
	  distribution: 'Endast känd från ett fåtal lokaler i södra Halland',
	  foodplants: [
		{
		  name:'Ginst',
		  latin:'Genista',
		}
	  ],
	  imago: 'början av juni till början av augusti',
	  similar: [
		{
		  name:'Jungfrusäckmal',
		  latin:'Coleophora parthenogenella',
		  difference: 'Tydligare tvåfärgad vinge med gulare ton i nedre delen av framvingen.'
		},
		{
		  name:'Käringtandsäckmal',
		  latin:'Coleophora discordella',
		  difference: 'Den vita framkantslinjen slutar före vingspetsen, strecken i vingvecket och bakkanten är längre och skarpare vita.'
		},
		{
		  name:'Sandvedelsäckmal',
		  latin:'Coleophora onobrychiella',
		  difference: 'Sandfärgad förtjockad bas på antennerna'
		}
	  ]
   },
   {
      artId:738,
      dyntaxaId:214474,
      group: ['E'],
      name:'Kilstreckad fjällsäckmal',
      latin:'Coleophora svenssoni',
      auctor:'Baldizzone, 1985',
      hasImage:false,
      slugSv:'kilstreckad_fjällsäckmal',
      slug:'coleophora_svenssoni'
   },
   {
      artId:739,
      dyntaxaId:102400,
      group: ['E'],
      name:'Jungfrusäckmal',
      latin:'Coleophora parthenogenella',
      auctor:'Stainton, 1850',
      hasImage:false,
      slugSv:'harrissäckmal',
      slug:'coleophora_parthenogenella',
	  redlist: 'NT',
	  distribution: 'Förekommer sällsynt i Sk, Ha och Vg',
	  foodplants: [
		{
		  name:'Harris',
		  latin:'Cytisus scoparius',
		},
		{
		  name:'Ginst',
		  latin:'Genista',
		} 
	  ],
	  imago: 'juli',
	  similar: [
		{
		  name:'Ginstsäckmal',
		  latin:'Coleophora genistae',
		  difference: 'I regel mörkare grundfärg utan gul ton i nedre delen av framvingen'
		},
		{
		  name:'Käringtandsäckmal',
		  latin:'Coleophora discordella',
		  difference: 'Mörkare brun och jämnfärgad, vita mittstrecket tydligare.'
		},
		{
		  name:'Sötvedelfruktsäckmal',
		  latin:'Coleophora gallipennella',
		  difference: 'Långa gulvita antenntofsar'
		},
		{
		  name:'Sandvedelsäckmal',
		  latin:'Coleophora onobrychiella',
		  difference: 'Sandfärgad förtjockad bas på antennerna och långa gulvita antenntofsar'
		},
		{
		  name:'Sötvedelbladsäckmal',
		  latin:'Coleophora colutella',
		  difference: 'Långa gulvita antenntofsar, ljusare framvingar endast vingspetsen mörkare. Tunn vit mittlinje'
		},
	  ]
   },
   {
      artId:740,
      dyntaxaId:214476,
      group: ['C'],
      name:'Vitkantad timjansäckmal',
      latin:'Coleophora niveicostella',
      auctor:'Zeller, 1839',
      hasImage:false,
      slugSv:'vitkantad_timjansäckmal',
      slug:'coleophora_niveicostella'
   },
   {
      artId:741,
      dyntaxaId:214477,
      group: ['C'],
      name:'Toksäckmal',
      latin:'Coleophora peri',
      auctor:'Svensson, 1976',
      hasImage:false,
      slugSv:'toksäckmal',
      slug:'coleophora_peri'
   },
   {
      artId:742,
      dyntaxaId:214478,
      group: ['E'],
      name:'Käringtandsäckmal',
      latin:'Coleophora discordella',
      auctor:'Zeller, 1849',
      hasImage:false,
      slugSv:'käringtandsäckmal',
      slug:'coleophora_discordella'
   },
   {
      artId:743,
      dyntaxaId:100682,
      group: ['E'],
      name:'Silverstreckad säckmal',
      latin:'Coleophora chalcogrammella',
      auctor:'Zeller, 1839',
      hasImage:false,
      slugSv:'silverstreckad_säckmal',
      slug:'coleophora_chalcogrammella'
   },
   {
      artId:744,
      dyntaxaId:214480,
      group: ['A'],
      name:'Fjällsprötad grönglanssäckmal',
      latin:'Coleophora deauratella',
      auctor:'Lienig \u0026 Zeller, 1846',
      hasImage:false,
      slugSv:'fjällsprötad_grönglanssäckmal',
      slug:'coleophora_deauratella'
   },
   {
      artId:745,
      dyntaxaId:214481,
      group: ['A'],
      name:'Klövergrönglanssäckmal',
      latin:'Coleophora mayrella',
      auctor:'(Hübner, 1813)',
      hasImage:false,
      slugSv:'klövergrönglanssäckmal',
      slug:'coleophora_mayrella'
   },
   {
      artId:746,
      dyntaxaId:214482,
      group: ['H'],
      name:'Pudrad hasselsäckmal',
      latin:'Coleophora anatipennella',
      auctor:'(Hübner, 1783)',
      hasImage:false,
      slugSv:'pudrad_hasselsäckmal',
      slug:'coleophora_anatipennella',
	  similar: [
		{
		  name:'Pudrad sälgsäckmal',
		  latin:'Coleophora albidella',
		  difference: ''
		},
		{
		  name:'Vit eksäckmal',
		  latin:'Coleophora kuehnella',
		  difference: ''
		}
	  ]
   },
   {
      artId:747,
      dyntaxaId:214483,
      group: ['H'],
      name:'Pudrad sälgsäckmal',
      latin:'Coleophora albidella',
      auctor:'(Denis \u0026 Schiffermüller, 1775)',
      hasImage:false,
      slugSv:'pudrad_sälgsäckmal',
      slug:'coleophora_albidella',
	  similar: [
		{
		  name:'Pudrad hasselsäckmal',
		  latin:'Coleophora anatipennella',
		  difference: ''
		},
		{
		  name:'Vit eksäckmal',
		  latin:'Coleophora kuehnella',
		  difference: ''
		}
	  ]
   },
   {
      artId:748,
      dyntaxaId:214484,
      group: ['H'],
      name:'Vit eksäckmal',
      latin:'Coleophora kuehnella',
      auctor:'(Goeze, 1783)',
      hasImage:false,
      slugSv:'vit_eksäckmal',
      slug:'coleophora_kuehnella',
	  similar: [
		{
		  name:'Brunstreckad eksäckmal',
		  latin:'Coleophora ibipennella',
		  difference: ''
		},
		{
		  name:'Gulstreckad björksäckmal',
		  latin:'Coleophora betulella',
		  difference: ''
		},
		{
		  name:'Pudrad sälgsäckmal',
		  latin:'Coleophora albidella',
		  difference: ''
		},
		{
		  name:'Pudrad hasselsäckmal',
		  latin:'Coleophora anatipennella',
		  difference: ''
		}
	  ]
   },
   {
      artId:749,
      dyntaxaId:214485,
      group: ['H'],
      name:'Brunstreckad eksäckmal',
      latin:'Coleophora ibipennella',
      auctor:'Zeller, 1849',
      hasImage:false,
      slugSv:'brunstreckad_eksäckmal',
      slug:'coleophora_ibipennella',
	  similar: [
		{
		  name:'Vit eksäckmal',
		  latin:'Coleophora kuehnella',
		  difference: ''
		},
		{
		  name:'Gulstreckad björksäckmal',
		  latin:'Coleophora betulella',
		  difference: ''
		},
	  ]
   },
   {
      artId:750,
      dyntaxaId:214486,
      group: ['H','G','E'],
      name:'Gulstreckad björksäckmal',
      latin:'Coleophora betulella',
      auctor:'Wocke, 1876',
      hasImage:false,
      slugSv:'gulstreckad_björksäckmal',
      slug:'coleophora_betulella',
	  similar: [
		{
		  name:'Brunstreckad eksäckmal',
		  latin:'Coleophora ibipennella',
		  difference: ''
		},
		{
		  name:'Vit eksäckmal',
		  latin:'Coleophora kuehnella',
		  difference: ''
		},
	  ]
   },
   {
      artId:751,
      dyntaxaId:214487,
      group: ['G'],
      name:'Gulspetsad sälgsäckmal',
      latin:'Coleophora zelleriella',
      auctor:'Heinemann, 1854',
      hasImage:false,
      slugSv:'gulspetsad_sälgsäckmal',
      slug:'coleophora_zelleriella'
   },
   {
      artId:752,
      dyntaxaId:214488,
      group: ['G'],
      name:'Gulstreckad avenboksäckmal',
      latin:'Coleophora currucipennella',
      auctor:'Zeller, 1839',
      hasImage:false,
      slugSv:'gulstreckad_avenboksäckmal',
      slug:'coleophora_currucipennella'
   },
   {
      artId:753,
      dyntaxaId:214489,
      group: ['E'],
      name:'Kilstreckad ljungsäckmal',
      latin:'Coleophora pyrrhulipennella',
      auctor:'Zeller, 1839',
      hasImage:false,
      slugSv:'kilstreckad_ljungsäckmal',
      slug:'coleophora_pyrrhulipennella'
   },
   {
      artId:754,
      dyntaxaId:102401,
      group: ['G'],
      name:'Stor klintsäckmal',
      latin:'Coleophora brevipalpella',
      auctor:'Wocke, 1874',
      hasImage:false,
      slugSv:'stor_klintsäckmal',
      slug:'coleophora_brevipalpella'
   },
   {
      artId:755,
      dyntaxaId:214492,
      group: ['E'],
      name:'Sötvedelfruktsäckmal',
      latin:'Coleophora gallipennella',
      auctor:'(Hübner, 1796)',
      hasImage:false,
      slugSv:'sötvedelfruktsäckmal',
      slug:'coleophora_gallipennella',
	  redlist: 'NT',
	  distribution: 'Förekommer mycket lokalt i södra Sverige, i anslutning till värdväxten',
   },
   {
      artId:756,
      dyntaxaId:214493,
      group: ['E'],
      name:'Kilstreckad fältmalörtsäckmal',
      latin:'Coleophora vibicigerella',
      auctor:'Zeller, 1839',
      hasImage:false,
      slugSv:'kilstreckad_fältmalörtsäckmal',
      slug:'coleophora_vibicigerella'
   },
   {
      artId:757,
      dyntaxaId:214494,
      group: ['E'],
      name:'Kilstreckad klintsäckmal',
      latin:'Coleophora conspicuella',
      auctor:'Zeller, 1849',
      hasImage:false,
      slugSv:'kilstreckad_klintsäckmal',
      slug:'coleophora_conspicuella'
   },
   {
      artId:758,
      dyntaxaId:100691,
      group: ['E'],
      name:'Kilstreckad rölleksäckmal',
      latin:'Coleophora partitella',
      auctor:'Zeller, 1849',
      hasImage:false,
      slugSv:'kilstreckad_rölleksäckmal',
      slug:'coleophora_partitella'
   },
   {
      artId:759,
      dyntaxaId:214496,
      group: ['E'],
      name:'Kilstreckad hedblomstersäckmal',
      latin:'Coleophora caelebipennella',
      auctor:'Zeller, 1839',
      hasImage:false,
      slugSv:'kilstreckad_hedblomstersäckmal',
      slug:'coleophora_caelebipennella'
   },
   {
      artId:760,
      dyntaxaId:102406,
      group: ['G'],
      name:'Solvändesäckmal',
      latin:'Coleophora ochrea',
      auctor:'(Haworth, 1828)',
      hasImage:false,
      slugSv:'solvändesäckmal',
      slug:'coleophora_ochrea'
   },
   {
      artId:761,
      dyntaxaId:214498,
      group: ['F'],
      name:'Sikelspetsad timjesäckmal',
      latin:'Coleophora lixella',
      auctor:'Zeller, 1849',
      hasImage:false,
      slugSv:'sikelspetsad_timjesäckmal',
      slug:'coleophora_lixella'
   },
   {
      artId:762,
      dyntaxaId:214499,
      group: ['E'],
      name:'Getväpplingsäckmal',
      latin:'Coleophora vulnerariae',
      auctor:'Zeller, 1839',
      hasImage:false,
      slugSv:'getväpplingsäckmal',
      slug:'coleophora_vulnerariae'
   },
   {
      artId:763,
      dyntaxaId:214500,
      group: ['G'],
      name:'Strävbladsäckmal',
      latin:'Coleophora pennella',
      auctor:'(Denis \u0026 Schiffermüller, 1775)',
      hasImage:false,
      slugSv:'strävbladsäckmal',
      slug:'coleophora_pennella'
   },
   {
      artId:764,
      dyntaxaId:214501,
      group: ['B'],
      name:'Lärksäckmal',
      latin:'Coleophora laricella',
      auctor:'(Hübner, 1817)',
      hasImage:false,
      slugSv:'lärksäckmal',
      slug:'coleophora_laricella'
   },
   {
      artId:765,
      dyntaxaId:214502,
      group: ['B'],
      name:'Skogsfrylesäckmal',
      latin:'Coleophora antennariella',
      auctor:'Herrich-Schäffer, 1861',
      hasImage:false,
      slugSv:'skogsfrylesäckmal',
      slug:'coleophora_antennariella'
   },
   {
      artId:766,
      dyntaxaId:214503,
      group: ['C'],
      name:'Salttågsäckmal',
      latin:'Coleophora adjunctella',
      auctor:'Hodgkinson, 1882',
      hasImage:false,
      slugSv:'salttågsäckmal',
      slug:'coleophora_adjunctella'
   },
   {
      artId:767,
      dyntaxaId:214504,
      group: ['C'],
      name:'Skarpringad tågsäckmal',
      latin:'Coleophora caespititiella',
      auctor:'Zeller, 1839',
      hasImage:false,
      slugSv:'skarpringad_tågsäckmal',
      slug:'coleophora_caespititiella'
   },
   {
      artId:768,
      dyntaxaId:214505,
      group: ['G'],
      name:'Ljussprötad tågsäckmal',
      latin:'Coleophora tamesis',
      auctor:'Waters, 1929',
      hasImage:false,
      slugSv:'ljussprötad_tågsäckmal',
      slug:'coleophora_tamesis'
   },
   {
      artId:769,
      dyntaxaId:214506,
      group: ['D','G'],
      name:'Suddig tågsäckmal',
      latin:'Coleophora glaucicolella',
      auctor:'Wood, 1892',
      hasImage:false,
      slugSv:'suddig_tågsäckmal',
      slug:'coleophora_glaucicolella'
   },
   {
      artId:770,
      dyntaxaId:214507,
      group: ['G'],
      name:'Dyster frylesäckmal',
      latin:'Coleophora otidipennella',
      auctor:'(Hübner, 1817)',
      hasImage:false,
      slugSv:'dyster_frylesäckmal',
      slug:'coleophora_otidipennella'
   },
   {
      artId:771,
      dyntaxaId:214508,
      group: ['D','C'],
      name:'Allmän tågsäckmal',
      latin:'Coleophora alticolella',
      auctor:'Zeller, 1849',
      hasImage:false,
      slugSv:'allmän_tågsäckmal',
      slug:'coleophora_alticolella'
   },
   {
      artId:772,
      dyntaxaId:214509,
      group: ['G'],
      name:'Gullinjerad tågsäckmal',
      latin:'Coleophora taeniipennella',
      auctor:'Herrich-Schäffer, 1855',
      hasImage:false,
      slugSv:'gullinjerad_tågsäckmal',
      slug:'coleophora_taeniipennella'
   },
   {
      artId:773,
      dyntaxaId:250426,
      group: ['C','B'],
      name:'Parkfrylesäckmal',
      latin:'Coleophora sylvaticella',
      auctor:'Wood, 1892',
      hasImage:false,
      slugSv:'parkfrylesäckmal',
      slug:'coleophora_sylvaticella'
   },
   {
      artId:774,
      dyntaxaId:214510,
      group: ['G'],
      name:'Trött säckmal',
      latin:'Coleophora lassella',
      auctor:'Staudinger, 1859',
      hasImage:false,
      slugSv:'trött_säckmal',
      slug:'coleophora_lassella'
   },
   {
      artId:775,
      dyntaxaId:214511,
      group: ['G'],
      name:'Strandtågsäckmal',
      latin:'Coleophora maritimella',
      auctor:'Newman, 1873',
      hasImage:false,
      slugSv:'strandtågsäckmal',
      slug:'coleophora_maritimella'
   },
   {
      artId:776,
      dyntaxaId:214512,
      group: ['F','G'],
      name:'Gullrissäckmal',
      latin:'Coleophora virgaureae',
      auctor:'Stainton, 1857',
      hasImage:false,
      slugSv:'gullrissäckmal',
      slug:'coleophora_virgaureae'
   },
   {
      artId:777,
      dyntaxaId:214513,
      group: ['G'],
      name:'Dubbellinjerad tistelsäckmal',
      latin:'Coleophora therinella',
      auctor:'Tengström, 1848',
      hasImage:false,
      slugSv:'dubbellinjerad_tistelsäckmal',
      slug:'coleophora_therinella'
   },
   {
      artId:778,
      dyntaxaId:214514,
      group: ['F','D'],
      name:'Strandastersäckmal',
      latin:'Coleophora asteris',
      auctor:'Mühlig, 1864',
      hasImage:false,
      slugSv:'strandastersäckmal',
      slug:'coleophora_asteris'
   },
   {
      artId:779,
      dyntaxaId:214515,
      group: ['D','C'],
      name:'Gulgrå mållsäckmal',
      latin:'Coleophora saxicolella',
      auctor:'(Duponchel, 1843)',
      hasImage:false,
      slugSv:'gulgrå_mållsäckmal',
      slug:'coleophora_saxicolella',
	  similar: [
		{
		  name:'Allmän mållsäckmal',
		  latin:'Coleophora sternipennella',
		  difference: ''
		},
	  ]
   },
   {
      artId:781,
      dyntaxaId:214516,
      group: ['F'],
      name:'Vitribbad mållsäckmal',
      latin:'Coleophora jaernaensis',
      auctor:'Björklund \u0026 Palmqvist, 2002',
      hasImage:false,
      slugSv:'vitribbad_mållsäckmal',
      slug:'coleophora_jaernaensis'
   },
   {
      artId:782,
      dyntaxaId:214517,
      group: ['D'],
      name:'Allmän mållsäckmal',
      latin:'Coleophora sternipennella',
      auctor:'(Zetterstedt, 1839)',
      hasImage:false,
      slugSv:'allmän_mållsäckmal',
      slug:'coleophora_sternipennella',
	  similar: [
		{
		  name:'Gulgrå mållsäckmal',
		  latin:'Coleophora saxicolella',
		  difference: ''
		},
	  ]
   },
   {
      artId:783,
      dyntaxaId:214518,
      group: ['B'],
      name:'Nordsäckmal',
      latin:'Coleophora boreella',
      auctor:'Benander, 1939',
      hasImage:false,
      slugSv:'nordsäckmal',
      slug:'coleophora_boreella'
   },
   {
      artId:784,
      dyntaxaId:214519,
      group: ['G'],
      name:'Gråbinkesäckmal',
      latin:'Coleophora squamosella',
      auctor:'Stainton, 1856',
      hasImage:false,
      slugSv:'gråbinkesäckmal',
      slug:'coleophora_squamosella'
   },
   {
      artId:785,
      dyntaxaId:214520,
      group: ['F'],
      name:'Blek mållsäckmal',
      latin:'Coleophora versurella',
      auctor:'Zeller, 1849',
      hasImage:false,
      slugSv:'blek_mållsäckmal',
      slug:'coleophora_versurella'
   },
   {
      artId:786,
      dyntaxaId:214521,
      group: ['D','F'],
      name:'Spetsvingad mållsäckmal',
      latin:'Coleophora vestianella',
      auctor:'(Lnnaeus, 1758)',
      hasImage:false,
      slugSv:'spetsvingad_mållsäckmal',
      slug:'coleophora_vestianella'
   },
   {
      artId:787,
      dyntaxaId:214522,
      group: ['D','F'],
      name:'Kustmållsäckmal',
      latin:'Coleophora atriplicis',
      auctor:'Meyrick, 1928',
      hasImage:false,
      slugSv:'kustmållsäckmal',
      slug:'coleophora_atriplicis'
   },
   {
      artId:788,
      dyntaxaId:214523,
      group: ['G'],
      name:'Kattfotsäckmal',
      latin:'Coleophora pappiferella',
      auctor:'Hofmann, 1869',
      hasImage:false,
      slugSv:'kattfotsäckmal',
      slug:'coleophora_pappiferella'
   },
   {
      artId:789,
      dyntaxaId:214524,
      group: ['F'],
      name:'Absintsäckmal',
      latin:'Coleophora absinthii',
      auctor:'Wocke, 1876',
      hasImage:false,
      slugSv:'absintsäckmal',
      slug:'coleophora_absinthii'
   },
   {
      artId:790,
      dyntaxaId:102407,
      group: ['E'],
      name:'Pältsasäckmal',
      latin:'Coleophora paeltsaella',
      auctor:'Palmqvist \u0026 Hellberg, 1999',
      hasImage:false,
      slugSv:'pältsasäckmal',
      slug:'coleophora_paeltsaella'
   },
   {
      artId:791,
      dyntaxaId:214526,
      group: ['F','G'],
      name:'Gråbosäckmal',
      latin:'Coleophora artemisicolella',
      auctor:'Bruand, 1855',
      hasImage:false,
      slugSv:'gråbosäckmal',
      slug:'coleophora_artemisicolella'
   },
   {
      artId:792,
      dyntaxaId:100680,
      group: ['F'],
      name:'Hylsnejlikesäckmal',
      latin:'Coleophora adelogrammella',
      auctor:'Zeller, 1849',
      hasImage:false,
      slugSv:'hylsnejlikesäckmal',
      slug:'coleophora_adelogrammella'
   },
   {
      artId:793,
      dyntaxaId:214528,
      group: ['F'],
      name:'Grovfjällig fältmalörtsäckmal',
      latin:'Coleophora succursella',
      auctor:'Herrich-Schäffer, 1854',
      hasImage:false,
      slugSv:'grovfjällig_fältmalörtsäckmal',
      slug:'coleophora_succursella'
   },
   {
      artId:794,
      dyntaxaId:102404,
      group: ['F'],
      name:'Grovfjällig hedblomstersäckmal',
      latin:'Coleophora gnaphalii',
      auctor:'Zeller, 1839',
      hasImage:false,
      slugSv:'grovfjällig_hedblomstersäckmal',
      slug:'coleophora_gnaphalii'
   },
   {
      artId:795,
      dyntaxaId:214530,
      group: ['F'],
      name:'Större backglimsäckmal',
      latin:'Coleophora galbulipennella',
      auctor:'Zeller, 1838',
      hasImage:false,
      slugSv:'större_backglimsäckmal',
      slug:'coleophora_galbulipennella'
   },
   {
      artId:796,
      dyntaxaId:100694,
      group: ['F','D'],
      name:'Knytlingsäckmal',
      latin:'Coleophora scabrida',
      auctor:'Toll, 1959',
      hasImage:false,
      slugSv:'knytlingsäckmal',
      slug:'coleophora_scabrida'
   },
   {
      artId:797,
      dyntaxaId:214532,
      group: ['F'],
      name:'Grovfjällig rölleksäckmal',
      latin:'Coleophora millefolii',
      auctor:'Zeller, 1849',
      hasImage:false,
      slugSv:'grovfjällig_rölleksäckmal',
      slug:'coleophora_millefolii'
   },
   {
      artId:798,
      dyntaxaId:100686,
      group: ['F'],
      name:'Såpörtsäckmal',
      latin:'Coleophora kyffhusana',
      auctor:'Petry, 1898',
      hasImage:false,
      slugSv:'såpörtsäckmal',
      slug:'coleophora_kyffhusana'
   },
   {
      artId:799,
      dyntaxaId:214534,
      group: ['G'],
      name:'Linjerad tistelsäckmal',
      latin:'Coleophora peribenanderi',
      auctor:'Toll, 1943',
      hasImage:false,
      slugSv:'linjerad_tistelsäckmal',
      slug:'coleophora_peribenanderi'
   },
   {
      artId:800,
      dyntaxaId:102399,
      group: ['G'],
      name:'Linjerad gullrissäckmal',
      latin:'Coleophora amellivora',
      auctor:'Baldizzone, 1979',
      hasImage:false,
      slugSv:'linjerad_gullrissäckmal',
      slug:'coleophora_amellivora'
   },
   {
      artId:801,
      dyntaxaId:100693,
      group: ['G'],
      name:'Vitsprötad gullrissäckmal',
      latin:'Coleophora ramosella',
      auctor:'Zeller, 1849',
      hasImage:false,
      slugSv:'vitsprötad_gullrissäckmal',
      slug:'coleophora_ramosella'
   },
   {
      artId:802,
      dyntaxaId:214537,
      group: ['G'],
      name:'Gullinjerad gullrissäckmal',
      latin:'Coleophora trochilella',
      auctor:'(Duponchel, 1843)',
      hasImage:false,
      slugSv:'gullinjerad_gullrissäckmal',
      slug:'coleophora_trochilella'
   },
   {
      artId:803,
      dyntaxaId:214538,
      group: ['F', 'D'],
      name:'Sen fältmalörtsäckmal',
      latin:'Coleophora directella',
      auctor:'Zeller, 1849',
      hasImage:false,
      slugSv:'sen_fältmalörtsäckmal',
      slug:'coleophora_directella'
   },
   {
      artId:804,
      dyntaxaId:214539,
      group: ['F'],
      name:'Sen rölleksäckmal',
      latin:'Coleophora expressella',
      auctor:'Klemensiewicz, 1902',
      hasImage:false,
      slugSv:'sen_rölleksäckmal',
      slug:'coleophora_expressella'
   },
   {
      artId:805,
      dyntaxaId:214540,
      group: ['G'],
      name:'Strimmig stjärnblomsäckmal',
      latin:'Coleophora striatipennella',
      auctor:'Nylander, 1848',
      hasImage:false,
      slugSv:'strimmig_stjärnblomsäckmal',
      slug:'coleophora_striatipennella'
   },
   {
      artId:806,
      dyntaxaId:100695,
      group: ['B'],
      name:'Skarpringad stjärnblomsäckmal',
      latin:'Coleophora solitariella',
      auctor:'Zeller, 1849',
      hasImage:false,
      slugSv:'skarpringad_stjärnblomsäckmal',
      slug:'coleophora_solitariella'
   },
   {
      artId:807,
      dyntaxaId:214542,
      group: ['F'],
      name:'Renfanesäckmal',
      latin:'Coleophora tanaceti',
      auctor:'Mühlig, 1865',
      hasImage:false,
      slugSv:'renfanesäckmal',
      slug:'coleophora_tanaceti'
   },
   {
      artId:808,
      dyntaxaId:214543,
      group: ['F'],
      name:'Ljus malörtsäckmal',
      latin:'Coleophora artemisiella',
      auctor:'Scott, 1861',
      hasImage:false,
      slugSv:'ljus_malörtsäckmal',
      slug:'coleophora_artemisiella'
   },
   {
      artId:809,
      dyntaxaId:102405,
      group: ['F'],
      name:'Punkterad backglimsäckmal',
      latin:'Coleophora hackmani',
      auctor:'(Toll, 1953)',
      hasImage:false,
      slugSv:'punkterad_backglimsäckmal',
      slug:'coleophora_hackmani'
   },
   {
      artId:810,
      dyntaxaId:214545,
      group: ['F','G'],
      name:'Silverstreckad rölleksäckmal',
      latin:'Coleophora argentula',
      auctor:'(Stephens, 1834)',
      hasImage:false,
      slugSv:'silverstreckad_rölleksäckmal',
      slug:'coleophora_argentula'
   },
   {
      artId:811,
      dyntaxaId:100684,
      group: ['G'],
      name:'Hampflockelsäckmal',
      latin:'Coleophora follicularis',
      auctor:'(Vallot, 1802)',
      hasImage:false,
      slugSv:'hampflockelsäckmal',
      slug:'coleophora_follicularis'
   },
   {
      artId:812,
      dyntaxaId:214547,
      group: ['F','D'],
      name:'Grå fältmalörtsäckmal',
      latin:'Coleophora granulatella',
      auctor:'Zeller, 1849',
      hasImage:false,
      slugSv:'grå_fältmalörtsäckmal',
      slug:'coleophora_granulatella'
   },
   {
      artId:813,
      dyntaxaId:214548,
      group: ['F'],
      name:'Ljus mållsäckmal',
      latin:'Coleophora adspersella',
      auctor:'Benander, 1939',
      hasImage:false,
      slugSv:'ljus_mållsäckmal',
      slug:'coleophora_adspersella'
   },
   {
      artId:814,
      dyntaxaId:100683,
      group: ['F'],
      name:'Nejliksäckmal',
      latin:'Coleophora dianthi',
      auctor:'Herrich-Schäffer, 1855',
      hasImage:false,
      slugSv:'nejliksäckmal',
      slug:'coleophora_dianthi'
   },
   {
      artId:815,
      dyntaxaId:214550,
      group: ['F'],
      name:'Ljusringad backglimsäckmal',
      latin:'Coleophora nutantella',
      auctor:'Mühlig \u0026 Frey, 1857',
      hasImage:false,
      slugSv:'ljusringad_backglimsäckmal',
      slug:'coleophora_nutantella'
   },
   {
      artId:816,
      dyntaxaId:214551,
      group: ['F'],
      name:'Mörkringad tjärblomstersäckmal',
      latin:'Coleophora graminicolella',
      auctor:'Heinemann, 1876',
      hasImage:false,
      slugSv:'mörkringad_tjärblomstersäckmal',
      slug:'coleophora_graminicolella'
   },
   {
      artId:817,
      dyntaxaId:100690,
      group: ['F'],
      name:'Dvärgsäckmal',
      latin:'Coleophora paradrymidis',
      auctor:'Toll, 1949',
      hasImage:false,
      slugSv:'dvärgsäckmal',
      slug:'coleophora_paradrymidis'
   },
   {
      artId:818,
      dyntaxaId:214553,
      group: ['E'],
      name:'Såpnejliksäckmal',
      latin:'Coleophora saponariella',
      auctor:'Heeger, 1848',
      hasImage:false,
      slugSv:'såpnejliksäckmal',
      slug:'coleophora_saponariella'
   },
   {
      artId:819,
      dyntaxaId:214554,
      group: ['B','A'],
      name:'Klintgrönglanssäckmal',
      latin:'Coleophora paripennella',
      auctor:'Zeller, 1839',
      hasImage:false,
      slugSv:'klintgrönglanssäckmal',
      slug:'coleophora_paripennella'
   },
   {
      artId:820,
      dyntaxaId:214555,
      group: ['B'],
      name:'Ribbad mållsäckmal',
      latin:'Coleophora clypeiferella',
      auctor:'Hofmann, 1871',
      hasImage:false,
      slugSv:'ribbad_mållsäckmal',
      slug:'coleophora_clypeiferella'
   },
   {
      artId:821,
      dyntaxaId:214556,
      group: ['B'],
      name:'Tvåfläckad mållsäckmal',
      latin:'Coleophora squalorella',
      auctor:'Zeller, 1849',
      hasImage:false,
      slugSv:'tvåfläckad_mållsäckmal',
      slug:'coleophora_squalorella'
   },
   {
      artId:822,
      dyntaxaId:102408,
      group: ['B'],
      name:'Glasörtsäckmal',
      latin:'Coleophora salicorniae',
      auctor:'Heinemann \u0026 Wocke, 1876',
      hasImage:false,
      slugSv:'glasörtsäckmal',
      slug:'coleophora_salicorniae'
   }
];