import {TaxonImage} from './taxon-image';
import {Taxon} from './taxon';

export class TaxonService {

  getAllTaxonImages() {
    return TAXONIMAGES;
  }

  getTaxonImagesForGroup(group:string) {
    var _filteredTaxons: TaxonImage[] = [];
	var addedTaxons = [];
	
	for(var i = 0; i < TAXONIMAGES.length ; i++) {
		if (TAXONIMAGES[i].group == group) {
			if (addedTaxons[TAXONIMAGES[i].latin] == undefined) {
				_filteredTaxons.push(TAXONIMAGES[i]);
				addedTaxons[TAXONIMAGES[i].latin] = true;
			}
		}
	}

    return _filteredTaxons;
  }
  
  getTaxonsForGroup(group:string) {
    var _filteredTaxons: Taxon[] = [];
	
	for(var i = 0; i < ALLTAXONS.length ; i++) {
		if (ALLTAXONS[i].group != undefined) {
			for(var k = 0; k < ALLTAXONS[i].group.length ; k++) {
				if (ALLTAXONS[i].group[k] == group) {
					_filteredTaxons.push(ALLTAXONS[i]);
				}
			}
		}
	}

    return _filteredTaxons;
  }
  
  getTaxonImagesForId(id:string) {
    var _filteredTaxons: TaxonImage[] = [];
	
	for(var i = 0; i < TAXONIMAGES.length ; i++) {
		if (TAXONIMAGES[i].latin == id) {
			_filteredTaxons.push(TAXONIMAGES[i]);
		}
	}

    return _filteredTaxons;
  }
  
}


var TAXONIMAGES: TaxonImage[] = [

      {
	    group:'A',
	    name:'Sötväpplingsäckmal',
		latin:'Coleophora trifolii', 
		image:'img/coleophora_trifolii.jpg',
		date: '2015-07-13',
		site: 'Rådasjön, Vg',
		unsure: false,
		photographer: 'Magnus Unger',
		bildId: '15-3538'
	  },
	  {
	    group:'A',
	    name:'Sen grönglanssäckmal',
		latin:'Coleophora alcyonipennella', 
		image:'img/coleophora_alcyonipennella.jpg',
		date: '2010-08-01',
		site: 'Släp, Hl',
		unsure: false,
		photographer: 'Magnus Unger',
		bildId: '10-1281'
	  },
      {
	    group:'A',
	    name:'Tidig grönglanssäckmal',
		latin:'Coleophora frischella', 
		image:'img/coleophora_frischella.jpg',
		date: '2011-08-01',
		site: 'Nidingen, Hl',
		unsure: false,
		photographer: 'Magnus Unger',
		bildId: '10-1842'
	  },

      {
	    group:'A',
	    name:'Fjällsprötad grönglanssäckmal',
		latin:'Coleophora deauratella', 
		image:'img/coleophora_deauratella.jpg',
		date: '2015-07-04',
		site: 'Nidingen, Hl',
		unsure: false,
		photographer: 'Magnus Unger',
		bildId: '15-3015'
	  },
      {
	    group:'A',
	    name:'Klövergrönglanssäckmal',
		latin:'Coleophora mayrella', 
		image:'img/coleophora_mayrella.jpg',
		date: '2015-07-04',
		site: 'Nidingen, Hl',
		unsure: false,
		photographer: 'Magnus Unger',
		bildId: '15-3051'
	  },

	  
      {
	    group:'B',
	    name:'Vattrad rönnsäckmal',
		latin:'Coleophora hemerobiella', 
		image:'img/coleophora_hemerobiella.jpg',
		date: '2012-07-23',
		site: 'Tofta, Gtl',
		unsure: false,
		photographer: 'Magnus Unger',
		bildId: '12-4983'
	  },
      {
	    group:'B',
	    name:'Ribbad mållsäckmal',
		latin:'Coleophora clypeiferella', 
		image:'img/coleophora_clypeiferella.jpg',
		date: '2014-07-22',
		site: 'Gårdby Sandhed, Öl',
		unsure: false,
		photographer: 'Magnus Unger',
		bildId: '14-9721'
	  },
	  {
	    group:'B',
	    name:'Björksäckmal',
		latin:'Coleophora serratella', 
		image:'img/coleophora_serratella.jpg',
		date: '2011-07-06',
		site: 'Släp, Hl',
		unsure: false,
		photographer: 'Magnus Unger',
		bildId: '11-8995'
	  },
	  {
	    group:'B',
	    name:'Gul eksäckmal',
		latin:'Coleophora lutipennella', 
		image:'img/coleophora_lutipennella.jpg',
		date: '2011-07-06',
		site: 'Släp, Hl',
		unsure: false,
		photographer: 'Magnus Unger',
		bildId: '11-8933'
	  },
	  {
	    group:'B',
	    name:'Apelsäckmal',
		latin:'Coleophora spinella', 
		image:'img/coleophora_spinella-2.jpg',
		date: '2010-07-21',
		site: 'Släp, Hl',
		unsure: false,
		photographer: 'Magnus Unger',
		bildId: '10-0822'
	  },
	  {
	    group:'B',
	    name:'Videsäckmal',
		latin:'Coleophora lusciniaepennella', 
		image:'img/coleophora_lusciniaepennella.jpg',
		date: '2011-07-04',
		site: 'Släp, Hl',
		unsure: false,
		photographer: 'Magnus Unger',
		bildId: '11-8837'
	  },
	  {
	    group:'B',
	    name:'Säckmal sp',
		latin:'Coleophora sp', 
		image:'img/coleophora_sp-2.jpg',
		date: '2011-07-01',
		site: 'Vargefjället, Boh',
		unsure: true,
		photographer: 'Magnus Unger',
		bildId: '11-8232'
	  },
	  {
	    group:'B',
	    name:'Nyponsäckmal',
		latin:'Coleophora gryphipennella', 
		image:'img/coleophora_gryphipennella.jpg',
		date: '2010-07-03',
		site: 'Släp, Hl',
		unsure: false,
		photographer: 'Magnus Unger',
		bildId: '10-7941'
	  }, 
      
      {
	    group:'C',
	    name:'Skarpringad tågsäckmal',
		latin:'Coleophora caespititiella', 
		image:'img/coleophora_caespititiella.jpg',
		date: '2011-06-05',
		site: 'Älje, Porsen, Boh',
		unsure: false,
		photographer: 'Magnus Unger',
		bildId: '11-7435'
	  },
	  {
	    group:'C',
	    name:'Ljuskantad eksäckmal',
		latin:'Coleophora flavipennella', 
		image:'img/coleophora_flavipennella.jpg',
		date: '2010-07-20',
		site: 'Släp, Hl',
		unsure: false,
		photographer: 'Magnus Unger',
		bildId: '10-0481'
	  }, 	  

      {
	    group:'D',
	    name:'Allmän mållsäckmal',
		latin:'Coleophora sternipennella', 
		image:'img/coleophora_sternipennella.jpg',
		date: '2010-07-15',
		site: 'Nidingen, Hl',
		unsure: false,
		photographer: 'Magnus Unger',
		bildId: '10-9487'
	  },
      {
	    group:'D',
	    name:'Gulgrå mållsäckmal',
		latin:'Coleophora saxicolella', 
		image:'img/coleophora_saxicolella.jpg',
		date: '2010-07-21',
		site: 'Släp, Hl',
		unsure: false,
		photographer: 'Magnus Unger',
		bildId: '10-0820'
	  },
      {
	    group:'D',
	    name:'Spetsvingad mållsäckmal',
		latin:'Coleophora vestianella', 
		image:'img/coleophora_vestianella.jpg',
		date: '2014-07-09',
		site: 'Nidingen, Hl',
		unsure: false,
		photographer: 'Magnus Unger',
		bildId: '14-7174'
	  },
      {
	    group:'D',
	    name:'Kustmållsäckmal',
		latin:'Coleophora atriplicis', 
		image:'img/coleophora_atriplicis.jpg',
		date: '2010-07-11',
		site: 'Nidingen, Hl',
		unsure: false,
		photographer: 'Magnus Unger',
		bildId: '10-8831'
	  },
      {
	    group:'D',
	    name:'Allmän tågsäckmal',
		latin:'Coleophora alticolella', 
		image:'img/coleophora_alticolella.jpg',
		date: '2010-07-03',
		site: 'Släp, Hl',
		unsure: false,
		photographer: 'Magnus Unger',
		bildId: '10-7963'
	  },
      {
	    group:'D',
	    name:'Vattenskräppesäckmal',
		latin:'Coleophora hydrolapathella', 
		image:'img/coleophora_hydrolapathella.jpg',
		date: '2015-07-04',
		site: 'Nidingen, Hl',
		unsure: false,
		photographer: 'Magnus Unger',
		bildId: '15-2861'
	  },	  

      {
	    group:'E',
	    name:'Harrissäckmal',
		latin:'Coleophora parthenogenella', 
		image:'img/coleophora_parthenogenella.jpg',
		date: '2015-07-24',
		site: 'Släp, Hl',
		unsure: false,
		photographer: 'Magnus Unger',
		bildId: '15-4089'
	  },
      {
	    group:'E',
	    name:'Kilstreckad hedblomstersäckmal',
		latin:'Coleophora caelebipennella', 
		image:'img/coleophora_caelebipennella-2.jpg',
		date: '2014-07-22',
		site: 'Gårdby Sandhed, Öl',
		unsure: false,
		photographer: 'Magnus Unger',
		bildId: '14-9681'
	  },
      {
	    group:'E',
	    name:'Kilstreckad fältmalörtsäckmal',
		latin:'Coleophora vibicigerella', 
		image:'img/coleophora_vibicigerella.jpg',
		date: '2014-07-22',
		site: 'Gårdby Sandhed, Öl',
		unsure: false,
		photographer: 'Magnus Unger',
		bildId: '14-9680'
	  },
	  
      {
	    group:'F',
	    name:'Sikelspetsad timjesäckmal',
		latin:'Coleophora lixella', 
		image:'img/coleophora_lixella-1.jpg',
		date: '2014-07-22',
		site: 'Gårdby Sandhed, Öl',
		unsure: false,
		photographer: 'Magnus Unger',
		bildId: '14-9846'
	  },
      {
	    group:'F',
	    name:'Gullrissäckmal',
		latin:'Coleophora virgaureae', 
		image:'img/coleophora_virgaureae.jpg',
		date: '2010-07-15',
		site: 'Nidingen, Hl',
		unsure: false,
		photographer: 'Magnus Unger',
		bildId: '10-9498'
	  }, 
      {
	    group:'F',
	    name:'Silverstreckad rölleksäckmal',
		latin:'Coleophora argentula', 
		image:'img/coleophora_argentula.jpg',
		date: '2010-07-11',
		site: 'Nidingen, Hl',
		unsure: false,
		photographer: 'Magnus Unger',
		bildId: '10-8835'
	  }, 
      {
	    group:'F',
	    name:'Blek mållsäckmal',
		latin:'Coleophora versurella', 
		image:'img/coleophora_versurella_10_9431.jpg',
		date: '2010-07-15',
		site: 'Nidingen, Hl',
		unsure: false,
		photographer: 'Magnus Unger',
		bildId: '10-9431'
	  },
	  
      {
	    group:'F',
	    name:'Ljus mållsäckmal',
		latin:'Coleophora adspersella', 
		image:'img/coleophora_adspersella_14_6572.jpg',
		date: '2014-07-05',
		site: 'Nidingen, Hl',
		unsure: false,
		photographer: 'Magnus Unger',
		bildId: '14-6572'
	  },
      {
	    group:'F',
	    name:'Säckmal sp',
		latin:'Coleophora sp', 
		image:'img/coleophora_sp_10_8901.jpg',
		date: '2010-07-11',
		site: 'Nidingen, Hl',
		unsure: true,
		photographer: 'Magnus Unger',
		bildId: '10_8901'
	  },
      {
	    group:'F',
	    name:'Säckmal sp',
		latin:'Coleophora sp', 
		image:'img/coleophora_sp_10_8899.jpg',
		date: '2010-07-11',
		site: 'Nidingen, Hl',
		unsure: true,
		photographer: 'Magnus Unger',
		bildId: '10_8899'
	  },
	  {
	    group:'F',
	    name:'Säckmal sp',
		latin:'Coleophora sp', 
		image:'img/coleophora_sp_14_7432.jpg',
		date: '2014-07-10',
		site: 'Nidingen, Hl',
		unsure: true,
		photographer: 'Magnus Unger',
		bildId: '14_7432'
	  },
	  
      {
	    group:'F',
	    name:'Grå fältmalörtsäckmal?',
		latin:'Coleophora granulatella?', 
		image:'img/trol_coleophora_granulatella.jpg',
		date: '2012-07-23',
		site: 'Tofta, Gtl',
		unsure: true,
		photographer: 'Magnus Unger',
		bildId: '12-4995'
	  },
      {
	    group:'F',
	    name:'Grovfjällig fältmalörtsäckmal?',
		latin:'Coleophora succursella?', 
		image:'img/trol_coleophora_succursella.jpg',
		date: '2014-07-23',
		site: 'Mensalvret, Öl',
		unsure: true,
		photographer: 'Magnus Unger',
		bildId: '14-9934'
	  },
	  
	  {
	    group:'G',
	    name:'Dubbellinjerad tistelsäckmal',
		latin:'Coleophora therinella', 
		image:'img/coleophora_therinella.jpg',
		date: '2010-07-03',
		site: 'Släp, Hl',
		unsure: false,
		photographer: 'Magnus Unger',
		bildId: '10-7992'
	  },
	  {
	    group:'G',
	    name:'Linjerad tistelsäckmal',
		latin:'Coleophora peribenanderi', 
		image:'img/coleophora_peribenanderi.jpg',
		date: '2014-07-10',
		site: 'Nidingen, Hl',
		unsure: false,
		photographer: 'Magnus Unger',
		bildId: '14-7425'
	  },
	  {
	    group:'G',
	    name:'Gullinjerad gullrissäckmal',
		latin:'Coleophora trochilella', 
		image:'img/coleophora_trochilella-2.jpg',
		date: '2011-07-31',
		site: 'Nidingen, Hl',
		unsure: false,
		photographer: 'Magnus Unger',
		bildId: '11-1196'
	  },
	  {
	    group:'G',
	    name:'Vitsprötad gullrissäckmal?',
		latin:'Coleophora ramosella?', 
		image:'img/trol_coleophora_ramosella.jpg',
		date: '2014-06-08',
		site: 'Lillhagens Sandlycka, Boh',
		unsure: true,
		photographer: 'Magnus Unger',
		bildId: '14-5331'
	  },
      {
	    group:'G',
	    name:'Gullinjerad tågsäckmal?',
		latin:'Coleophora taeniipennella?', 
		image:'img/coleophora_sp-1.jpg',
		date: '2010-06-25',
		site: 'Rydal, Vg',
		unsure: true,
		photographer: 'Magnus Unger',
		bildId: '10-6831'
	  }, 
	  
	  
      {
	    group:'H',
	    name:'Pudrad sälgsäckmal',
		latin:'Coleophora albidella', 
		image:'img/coleophora_albidella.jpg',
		date: '2010-07-19',
		site: 'Släp, Hl',
		unsure: false,
		photographer: 'Magnus Unger',
		bildId: '10-9960'
	  },
      {
	    group:'H',
	    name:'Vit eksäckmal',
		latin:'Coleophora kuehnella', 
		image:'img/coleophora_kuehnella-1.jpg',
		date: '2011-07-04',
		site: 'Släp, Hl',
		unsure: false,
		photographer: 'Magnus Unger',
		bildId: '11-8684'
	  },
      {
	    group:'H',
	    name:'Gulstreckad björksäckmal',
		latin:'Coleophora betulella', 
		image:'img/coleophora_betulella-1.jpg',
		date: '2014-07-20',
		site: 'Partille, Vg',
		unsure: false,
		photographer: 'Magnus Unger',
		bildId: '14-9018'
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
      linkSv:'trampörtgallmal',
      linkEn:'augasma_aeratella'
   },
   {
      artId:688,
      dyntaxaId:214424,
	  group: ['B'],
      name:'Buskstjärnblomkapselmal',
      latin:'Metriotes lutarea',
      auctor:'(Haworth, 1828)',
      hasImage:false,
      linkSv:'buskstjärnblomkapselmal',
      linkEn:'metriotes_lutarea'
   },
   {
      artId:689,
      dyntaxaId:100687,
	  group: ['C'],
      name:'Svartvit säckmal',
      latin:'Coleophora albella',
      auctor:'(Thunberg, 1788)',
      hasImage:false,
      linkSv:'svartvit_säckmal',
      linkEn:'coleophora_albella'
   },
   {
      artId:690,
      dyntaxaId:214426,
      group: ['B'],
      name:'Spireasäckmal',
      latin:'Coleophora spiraeella',
      auctor:'Rebel, 1916',
      hasImage:false,
      linkSv:'spireasäckmal',
      linkEn:'coleophora_spiraeella'
   },
   {
      artId:691,
      dyntaxaId:214427,
      group: ['B'],
      name:'Gul eksäckmal',
      latin:'Coleophora lutipennella',
      auctor:'(Zeller, 1838)',
      hasImage:false,
      linkSv:'gul_eksäckmal',
      linkEn:'coleophora_lutipennella'
   },
   {
      artId:692,
      dyntaxaId:214428,
      group: ['B'],
      name:'Nyponsäckmal',
      latin:'Coleophora gryphipennella',
      auctor:'(Hübner, 1796)',
      hasImage:false,
      linkSv:'nyponsäckmal',
      linkEn:'coleophora_gryphipennella'
   },
   {
      artId:693,
      dyntaxaId:214429,
      group: ['C','B'],
      name:'Ljuskantad eksäckmal',
      latin:'Coleophora flavipennella',
      auctor:'(Duponchel, 1843)',
      hasImage:false,
      linkSv:'ljuskantad_eksäckmal',
      linkEn:'coleophora_flavipennella'
   },
   {
      artId:694,
      dyntaxaId:100681,
      group: ['C'],
      name:'Ljuskantad slånsäckmal',
      latin:'Coleophora adjectella',
      auctor:'Herrich-Schäffer, 1861',
      hasImage:false,
      linkSv:'ljuskantad_slånsäckmal',
      linkEn:'coleophora_adjectella'
   },
   {
      artId:695,
      dyntaxaId:214431,
      group: ['C'],
      name:'Ljuskantad björksäckmal',
      latin:'Coleophora milvipennis',
      auctor:'Zeller, 1839',
      hasImage:false,
      linkSv:'ljuskantad_björksäckmal',
      linkEn:'coleophora_milvipennis'
   },
   {
      artId:696,
      dyntaxaId:214432,
      group: ['C'],
      name:'Ljuskantad alsäckmal',
      latin:'Coleophora alnifoliae',
      auctor:'Barasch, 1934',
      hasImage:false,
      linkSv:'ljuskantad_alsäckmal',
      linkEn:'coleophora_alnifoliae'
   },
   {
      artId:697,
      dyntaxaId:214433,
      group: ['C'],
      name:'Vitkantad almsäckmal',
      latin:'Coleophora badiipennella',
      auctor:'(Duponchel, 1843)',
      hasImage:false,
      linkSv:'vitkantad_almsäckmal',
      linkEn:'coleophora_badiipennella'
   },
   {
      artId:698,
      dyntaxaId:214434,
      group: ['C'],
      name:'Ljuskantad almsäckmal',
      latin:'Coleophora limosipennella',
      auctor:'(Duponchel, 1843)',
      hasImage:false,
      linkSv:'ljuskantad_almsäckmal',
      linkEn:'coleophora_limosipennella'
   },
   {
      artId:699,
      dyntaxaId:214435,
      group: ['B'],
      name:'Gulgrå rönnsäckmal',
      latin:'Coleophora siccifolia',
      auctor:'Stainton, 1856',
      hasImage:false,
      linkSv:'gulgrå_rönnsäckmal',
      linkEn:'coleophora_siccifolia'
   },
   {
      artId:700,
      dyntaxaId:214436,
      group: ['B'],
      name:'Odonsäckmal',
      latin:'Coleophora uliginosella',
      auctor:'Glitz, 1872',
      hasImage:false,
      linkSv:'odonsäckmal',
      linkEn:'coleophora_uliginosella'
   },
   {
      artId:701,
      dyntaxaId:214437,
      group: ['B'],
      name:'Björksäckmal',
      latin:'Coleophora serratella',
      auctor:'(Linnaeus, 1761)',
      hasImage:false,
      linkSv:'björksäckmal',
      linkEn:'coleophora_serratella'
   },
   {
      artId:702,
      dyntaxaId:214438,
      group: ['B'],
      name:'Apelsäckmal',
      latin:'Coleophora spinella',
      auctor:'(Schrank, 1802)',
      hasImage:false,
      linkSv:'apelsäckmal',
      linkEn:'coleophora_spinella'
   },
   {
      artId:703,
      dyntaxaId:214439,
      group: ['B'],
      name:'Körsbärssäckmal',
      latin:'Coleophora prunifoliae',
      auctor:'Doets, 1944',
      hasImage:false,
      linkSv:'körsbärssäckmal',
      linkEn:'coleophora_prunifoliae'
   },
   {
      artId:704,
      dyntaxaId:214440,
      group: ['C','D'],
      name:'Vattenskräppesäckmal',
      latin:'Coleophora hydrolapathella',
      auctor:'M. Hering, 1924',
      hasImage:false,
      linkSv:'vattenskräppesäckmal',
      linkEn:'coleophora_hydrolapathella'
   },
   {
      artId:705,
      dyntaxaId:214441,
      group: ['C'],
      name:'Vitkantad rönnsäckmal',
      latin:'Coleophora trigeminella',
      auctor:'Fuchs, 1881',
      hasImage:false,
      linkSv:'vitkantad_rönnsäckmal',
      linkEn:'coleophora_trigeminella'
   },
   {
      artId:706,
      dyntaxaId:214442,
      group: ['B'],
      name:'Mossesäckmal',
      latin:'Coleophora cornutella',
      auctor:'Herrich-Schäffer, 1861',
      hasImage:false,
      linkSv:'mossesäckmal',
      linkEn:'coleophora_cornutella'
   },
   {
      artId:707,
      dyntaxaId:214443,
      group: ['B'],
      name:'Liten grönglanssäckmal',
      latin:'Coleophora fuscocuprella',
      auctor:'Herrich-Schäffer, 1854',
      hasImage:false,
      linkSv:'liten_grönglanssäckmal',
      linkEn:'coleophora_fuscocuprella'
   },
   {
      artId:708,
      dyntaxaId:214444,
      group: ['C'],
      name:'Mjölonsäckmal',
      latin:'Coleophora arctostaphyli',
      auctor:'Meder, 1934',
      hasImage:false,
      linkSv:'mjölonsäckmal',
      linkEn:'coleophora_arctostaphyli'
   },
   {
      artId:709,
      dyntaxaId:214445,
      group: ['B'],
      name:'Videsäckmal',
      latin:'Coleophora lusciniaepennella',
      auctor:'(Treitschke, 1833)',
      hasImage:false,
      linkSv:'videsäckmal',
      linkEn:'coleophora_lusciniaepennella'
   },
   {
      artId:710,
      dyntaxaId:214446,
      group: ['B'],
      name:'Pyrolasäckmal',
      latin:'Coleophora idaeella',
      auctor:'Hofmann, 1869',
      hasImage:false,
      linkSv:'pyrolasäckmal',
      linkEn:'coleophora_idaeella'
   },
   {
      artId:711,
      dyntaxaId:214447,
      group: ['B'],
      name:'Blåbärsäckmal',
      latin:'Coleophora vacciniella',
      auctor:'Herrich-Schäffer, 1861',
      hasImage:false,
      linkSv:'blåbärsäckmal',
      linkEn:'coleophora_vacciniella'
   },
   {
      artId:712,
      dyntaxaId:214448,
      group: ['B'],
      name:'Mindre skvattramsäckmal',
      latin:'Coleophora ledi',
      auctor:'Stainton, 1860',
      hasImage:false,
      linkSv:'mindre_skvattramsäckmal',
      linkEn:'coleophora_ledi'
   },
   {
      artId:713,
      dyntaxaId:214449,
      group: ['B'],
      name:'Blygrå säckmal',
      latin:'Coleophora plumbella',
      auctor:'Kanerva, 1941',
      hasImage:false,
      linkSv:'blygrå_säckmal',
      linkEn:'coleophora_plumbella'
   },
   {
      artId:714,
      dyntaxaId:214450,
      group: ['B'],
      name:'Lingonpistolsäckmal',
      latin:'Coleophora vitisella',
      auctor:'Gregson, 1856',
      hasImage:false,
      linkSv:'lingonpistolsäckmal',
      linkEn:'coleophora_vitisella'
   },
   {
      artId:715,
      dyntaxaId:214451,
      group: ['B'],
      name:'Allmän lingonsäckmal',
      latin:'Coleophora glitzella',
      auctor:'Hofmann, 1869',
      hasImage:false,
      linkSv:'allmän_lingonsäckmal',
      linkEn:'coleophora_glitzella'
   },
   {
      artId:716,
      dyntaxaId:214452,
      group: ['B'],
      name:'Musgrå lingonsäckmal',
      latin:'Coleophora murinella',
      auctor:'Tengström, 1848',
      hasImage:false,
      linkSv:'musgrå_lingonsäckmal',
      linkEn:'coleophora_murinella'
   },
   {
      artId:717,
      dyntaxaId:214453,
      group: ['B'],
      name:'Allätarsäckmal',
      latin:'Coleophora violacea',
      auctor:'(Ström, 1783)',
      hasImage:false,
      linkSv:'allätarsäckmal',
      linkEn:'coleophora_violacea'
   },
   {
      artId:718,
      dyntaxaId:214454,
      group: ['B'],
      name:'Brudbrödsäckmal',
      latin:'Coleophora potentillae',
      auctor:'Elisha, 1885',
      hasImage:false,
      linkSv:'brudbrödsäckmal',
      linkEn:'coleophora_potentillae'
   },
   {
      artId:719,
      dyntaxaId:214455,
      group: ['B'],
      name:'Skvattramsäckmal',
      latin:'Coleophora obscuripalpella',
      auctor:'Kanerva, 1941',
      hasImage:false,
      linkSv:'skvattramsäckmal',
      linkEn:'coleophora_obscuripalpella'
   },
   {
      artId:720,
      dyntaxaId:214456,
      group: ['B'],
      name:'Hjortronsäckmal',
      latin:'Coleophora thulea',
      auctor:'Johansson, 1967',
      hasImage:false,
      linkSv:'hjortronsäckmal',
      linkEn:'coleophora_thulea'
   },
   {
      artId:721,
      dyntaxaId:214457,
      group: ['B'],
      name:'Fjällsippesäckmal',
      latin:'Coleophora unigenella',
      auctor:'Svensson, 1966',
      hasImage:false,
      linkSv:'fjällsippesäckmal',
      linkEn:'coleophora_unigenella'
   },
   {
      artId:722,
      dyntaxaId:214458,
      group: ['B'],
      name:'Liten ljungsäckmal',
      latin:'Coleophora juncicolella',
      auctor:'Stainton, 1851',
      hasImage:false,
      linkSv:'liten_ljungsäckmal',
      linkEn:'coleophora_juncicolella'
   },
   {
      artId:723,
      dyntaxaId:214459,
      group: ['B'],
      name:'Grå björksäckmal',
      latin:'Coleophora orbitella',
      auctor:'Zeller, 1849',
      hasImage:false,
      linkSv:'grå_björksäckmal',
      linkEn:'coleophora_orbitella'
   },
   {
      artId:724,
      dyntaxaId:214460,
      group: ['B'],
      name:'Brun alsäckmal',
      latin:'Coleophora binderella',
      auctor:'Kollar, 1832',
      hasImage:false,
      linkSv:'brun_alsäckmal',
      linkEn:'coleophora_binderella'
   },
   {
      artId:725,
      dyntaxaId:214461,
      group: ['B'],
      name:'Trysäckmal',
      latin:'Coleophora ahenella',
      auctor:'Heinemann, 1876',
      hasImage:false,
      linkSv:'trysäckmal',
      linkEn:'coleophora_ahenella'
   },
   {
      artId:726,
      dyntaxaId:214462,
      group: ['B'],
      name:'Myntesäckmal',
      latin:'Coleophora albitarsella',
      auctor:'Zeller, 1849',
      hasImage:false,
      linkSv:'myntesäckmal',
      linkEn:'coleophora_albitarsella'
   },
   {
      artId:727,
      dyntaxaId:100692,
      group: ['B'],
      name:'Lungörtssäckmal',
      latin:'Coleophora pulmonariella',
      auctor:'Ragonot, 1874',
      hasImage:false,
      linkSv:'lungörtssäckmal',
      linkEn:'coleophora_pulmonariella'
   },
   {
      artId:728,
      dyntaxaId:214464,
      group: ['A'],
      name:'Sötväpplingsäckmal',
      latin:'Coleophora trifolii',
      auctor:'(Curtis, 1832)',
      hasImage:false,
      linkSv:'sötväpplingsäckmal',
      linkEn:'coleophora_trifolii'
   },
   {
      artId:729,
      dyntaxaId:214465,
      group: ['A'],
      name:'Tidig grönglanssäckmal',
      latin:'Coleophora frischella',
      auctor:'(Linnaeus, 1758)',
      hasImage:false,
      linkSv:'tidig_grönglanssäckmal',
      linkEn:'coleophora_frischella'
   },
   {
      artId:730,
      dyntaxaId:214466,
      group: ['A'],
      name:'Sen grönglanssäckmal',
      latin:'Coleophora alcyonipennella',
      auctor:'(Kollar, 1832)',
      hasImage:false,
      linkSv:'sen_grönglanssäckmal',
      linkEn:'coleophora_alcyonipennella'
   },
   {
      artId:731,
      dyntaxaId:102403,
      group: ['G'],
      name:'Skarplinjerad krisslesäckmal',
      latin:'Coleophora conyzae',
      auctor:'Zeller, 1868',
      hasImage:false,
      linkSv:'skarplinjerad_krisslesäckmal',
      linkEn:'coleophora_conyzae'
   },
   {
      artId:732,
      dyntaxaId:100688,
      group: ['G'],
      name:'Stinksyskesäckmal',
      latin:'Coleophora lineolea',
      auctor:'(Haworth, 1828)',
      hasImage:false,
      linkSv:'stinksyskesäckmal',
      linkEn:'coleophora_lineolea'
   },
   {
      artId:733,
      dyntaxaId:214469,
      group: ['B','H'],
      name:'Vattrad rönnsäckmal',
      latin:'Coleophora hemerobiella',
      auctor:'(Scopoli, 1763)',
      hasImage:false,
      linkSv:'vattrad_rönnsäckmal',
      linkEn:'coleophora_hemerobiella'
   },
   {
      artId:734,
      dyntaxaId:214470,
      group: ['B'],
      name:'Olivfärgad stjärnblomsäckmal',
      latin:'Coleophora lithargyrinella',
      auctor:'Zeller, 1849',
      hasImage:false,
      linkSv:'olivfärgad_stjärnblomsäckmal',
      linkEn:'coleophora_lithargyrinella'
   },
   {
      artId:735,
      dyntaxaId:100689,
      group: ['E'],
      name:'Sandvedelsäckmal',
      latin:'Coleophora onobrychiella',
      auctor:'Zeller, 1849',
      hasImage:false,
      linkSv:'sandvedelsäckmal',
      linkEn:'coleophora_onobrychiella'
   },
   {
      artId:736,
      dyntaxaId:102402,
      group: ['E'],
      name:'Sötvedelbladsäckmal',
      latin:'Coleophora colutella',
      auctor:'(Fabricius, 1794)',
      hasImage:false,
      linkSv:'sötvedelbladsäckmal',
      linkEn:'coleophora_colutella'
   },
   {
      artId:737,
      dyntaxaId:100685,
      group: ['E'],
      name:'Ginstsäckmal',
      latin:'Coleophora genistae',
      auctor:'Stainton, 1847',
      hasImage:false,
      linkSv:'ginstsäckmal',
      linkEn:'coleophora_genistae'
   },
   {
      artId:738,
      dyntaxaId:214474,
      group: ['E'],
      name:'Kilstreckad fjällsäckmal',
      latin:'Coleophora svenssoni',
      auctor:'Baldizzone, 1985',
      hasImage:false,
      linkSv:'kilstreckad_fjällsäckmal',
      linkEn:'coleophora_svenssoni'
   },
   {
      artId:739,
      dyntaxaId:102400,
      group: ['E'],
      name:'Harrissäckmal',
      latin:'Coleophora parthenogenella',
      auctor:'Stainton, 1850',
      hasImage:false,
      linkSv:'harrissäckmal',
      linkEn:'coleophora_parthenogenella'
   },
   {
      artId:740,
      dyntaxaId:214476,
      group: ['C'],
      name:'Vitkantad timjansäckmal',
      latin:'Coleophora niveicostella',
      auctor:'Zeller, 1839',
      hasImage:false,
      linkSv:'vitkantad_timjansäckmal',
      linkEn:'coleophora_niveicostella'
   },
   {
      artId:741,
      dyntaxaId:214477,
      group: ['C'],
      name:'Toksäckmal',
      latin:'Coleophora peri',
      auctor:'Svensson, 1976',
      hasImage:false,
      linkSv:'toksäckmal',
      linkEn:'coleophora_peri'
   },
   {
      artId:742,
      dyntaxaId:214478,
      group: ['E'],
      name:'Käringtandsäckmal',
      latin:'Coleophora discordella',
      auctor:'Zeller, 1849',
      hasImage:false,
      linkSv:'käringtandsäckmal',
      linkEn:'coleophora_discordella'
   },
   {
      artId:743,
      dyntaxaId:100682,
      group: ['E'],
      name:'Silverstreckad säckmal',
      latin:'Coleophora chalcogrammella',
      auctor:'Zeller, 1839',
      hasImage:false,
      linkSv:'silverstreckad_säckmal',
      linkEn:'coleophora_chalcogrammella'
   },
   {
      artId:744,
      dyntaxaId:214480,
      group: ['A'],
      name:'Fjällsprötad grönglanssäckmal',
      latin:'Coleophora deauratella',
      auctor:'Lienig \u0026 Zeller, 1846',
      hasImage:false,
      linkSv:'fjällsprötad_grönglanssäckmal',
      linkEn:'coleophora_deauratella'
   },
   {
      artId:745,
      dyntaxaId:214481,
      group: ['A'],
      name:'Klövergrönglanssäckmal',
      latin:'Coleophora mayrella',
      auctor:'(Hübner, 1813)',
      hasImage:false,
      linkSv:'klövergrönglanssäckmal',
      linkEn:'coleophora_mayrella'
   },
   {
      artId:746,
      dyntaxaId:214482,
      group: ['H'],
      name:'Pudrad hasselsäckmal',
      latin:'Coleophora anatipennella',
      auctor:'(Hübner, 1783)',
      hasImage:false,
      linkSv:'pudrad_hasselsäckmal',
      linkEn:'coleophora_anatipennella'
   },
   {
      artId:747,
      dyntaxaId:214483,
      group: ['H'],
      name:'Pudrad sälgsäckmal',
      latin:'Coleophora albidella',
      auctor:'(Denis \u0026 Schiffermüller, 1775)',
      hasImage:false,
      linkSv:'pudrad_sälgsäckmal',
      linkEn:'coleophora_albidella'
   },
   {
      artId:748,
      dyntaxaId:214484,
      group: ['H'],
      name:'Vit eksäckmal',
      latin:'Coleophora kuehnella',
      auctor:'(Goeze, 1783)',
      hasImage:false,
      linkSv:'vit_eksäckmal',
      linkEn:'coleophora_kuehnella'
   },
   {
      artId:749,
      dyntaxaId:214485,
      group: ['H'],
      name:'Brunstreckad eksäckmal',
      latin:'Coleophora ibipennella',
      auctor:'Zeller, 1849',
      hasImage:false,
      linkSv:'brunstreckad_eksäckmal',
      linkEn:'coleophora_ibipennella'
   },
   {
      artId:750,
      dyntaxaId:214486,
      group: ['H','G'],
      name:'Gulstreckad björksäckmal',
      latin:'Coleophora betulella',
      auctor:'Wocke, 1876',
      hasImage:false,
      linkSv:'gulstreckad_björksäckmal',
      linkEn:'coleophora_betulella'
   },
   {
      artId:751,
      dyntaxaId:214487,
      group: ['G'],
      name:'Gulspetsad sälgsäckmal',
      latin:'Coleophora zelleriella',
      auctor:'Heinemann, 1854',
      hasImage:false,
      linkSv:'gulspetsad_sälgsäckmal',
      linkEn:'coleophora_zelleriella'
   },
   {
      artId:752,
      dyntaxaId:214488,
      group: ['G'],
      name:'Gulstreckad avenboksäckmal',
      latin:'Coleophora currucipennella',
      auctor:'Zeller, 1839',
      hasImage:false,
      linkSv:'gulstreckad_avenboksäckmal',
      linkEn:'coleophora_currucipennella'
   },
   {
      artId:753,
      dyntaxaId:214489,
      group: ['E'],
      name:'Kilstreckad ljungsäckmal',
      latin:'Coleophora pyrrhulipennella',
      auctor:'Zeller, 1839',
      hasImage:false,
      linkSv:'kilstreckad_ljungsäckmal',
      linkEn:'coleophora_pyrrhulipennella'
   },
   {
      artId:754,
      dyntaxaId:102401,
      group: ['G'],
      name:'Stor klintsäckmal',
      latin:'Coleophora brevipalpella',
      auctor:'Wocke, 1874',
      hasImage:false,
      linkSv:'stor_klintsäckmal',
      linkEn:'coleophora_brevipalpella'
   },
   {
      artId:755,
      dyntaxaId:214492,
      group: ['E'],
      name:'Sötvedelfruktsäckmal',
      latin:'Coleophora gallipennella',
      auctor:'(Hübner, 1796)',
      hasImage:false,
      linkSv:'sötvedelfruktsäckmal',
      linkEn:'coleophora_gallipennella'
   },
   {
      artId:756,
      dyntaxaId:214493,
      group: ['E'],
      name:'Kilstreckad fältmalörtsäckmal',
      latin:'Coleophora vibicigerella',
      auctor:'Zeller, 1839',
      hasImage:false,
      linkSv:'kilstreckad_fältmalörtsäckmal',
      linkEn:'coleophora_vibicigerella'
   },
   {
      artId:757,
      dyntaxaId:214494,
      group: ['E'],
      name:'Kilstreckad klintsäckmal',
      latin:'Coleophora conspicuella',
      auctor:'Zeller, 1849',
      hasImage:false,
      linkSv:'kilstreckad_klintsäckmal',
      linkEn:'coleophora_conspicuella'
   },
   {
      artId:758,
      dyntaxaId:100691,
      group: ['E'],
      name:'Kilstreckad rölleksäckmal',
      latin:'Coleophora partitella',
      auctor:'Zeller, 1849',
      hasImage:false,
      linkSv:'kilstreckad_rölleksäckmal',
      linkEn:'coleophora_partitella'
   },
   {
      artId:759,
      dyntaxaId:214496,
      group: ['E'],
      name:'Kilstreckad hedblomstersäckmal',
      latin:'Coleophora caelebipennella',
      auctor:'Zeller, 1839',
      hasImage:false,
      linkSv:'kilstreckad_hedblomstersäckmal',
      linkEn:'coleophora_caelebipennella'
   },
   {
      artId:760,
      dyntaxaId:102406,
      group: ['G'],
      name:'Solvändesäckmal',
      latin:'Coleophora ochrea',
      auctor:'(Haworth, 1828)',
      hasImage:false,
      linkSv:'solvändesäckmal',
      linkEn:'coleophora_ochrea'
   },
   {
      artId:761,
      dyntaxaId:214498,
      group: ['F'],
      name:'Sikelspetsad timjesäckmal',
      latin:'Coleophora lixella',
      auctor:'Zeller, 1849',
      hasImage:false,
      linkSv:'sikelspetsad_timjesäckmal',
      linkEn:'coleophora_lixella'
   },
   {
      artId:762,
      dyntaxaId:214499,
      group: ['E'],
      name:'Getväpplingsäckmal',
      latin:'Coleophora vulnerariae',
      auctor:'Zeller, 1839',
      hasImage:false,
      linkSv:'getväpplingsäckmal',
      linkEn:'coleophora_vulnerariae'
   },
   {
      artId:763,
      dyntaxaId:214500,
      group: ['G'],
      name:'Strävbladsäckmal',
      latin:'Coleophora pennella',
      auctor:'(Denis \u0026 Schiffermüller, 1775)',
      hasImage:false,
      linkSv:'strävbladsäckmal',
      linkEn:'coleophora_pennella'
   },
   {
      artId:764,
      dyntaxaId:214501,
      group: ['B'],
      name:'Lärksäckmal',
      latin:'Coleophora laricella',
      auctor:'(Hübner, 1817)',
      hasImage:false,
      linkSv:'lärksäckmal',
      linkEn:'coleophora_laricella'
   },
   {
      artId:765,
      dyntaxaId:214502,
      group: ['B'],
      name:'Skogsfrylesäckmal',
      latin:'Coleophora antennariella',
      auctor:'Herrich-Schäffer, 1861',
      hasImage:false,
      linkSv:'skogsfrylesäckmal',
      linkEn:'coleophora_antennariella'
   },
   {
      artId:766,
      dyntaxaId:214503,
      group: ['C'],
      name:'Salttågsäckmal',
      latin:'Coleophora adjunctella',
      auctor:'Hodgkinson, 1882',
      hasImage:false,
      linkSv:'salttågsäckmal',
      linkEn:'coleophora_adjunctella'
   },
   {
      artId:767,
      dyntaxaId:214504,
      group: ['C'],
      name:'Skarpringad tågsäckmal',
      latin:'Coleophora caespititiella',
      auctor:'Zeller, 1839',
      hasImage:false,
      linkSv:'skarpringad_tågsäckmal',
      linkEn:'coleophora_caespititiella'
   },
   {
      artId:768,
      dyntaxaId:214505,
      group: ['G'],
      name:'Ljussprötad tågsäckmal',
      latin:'Coleophora tamesis',
      auctor:'Waters, 1929',
      hasImage:false,
      linkSv:'ljussprötad_tågsäckmal',
      linkEn:'coleophora_tamesis'
   },
   {
      artId:769,
      dyntaxaId:214506,
      group: ['D','G'],
      name:'Suddig tågsäckmal',
      latin:'Coleophora glaucicolella',
      auctor:'Wood, 1892',
      hasImage:false,
      linkSv:'suddig_tågsäckmal',
      linkEn:'coleophora_glaucicolella'
   },
   {
      artId:770,
      dyntaxaId:214507,
      group: ['G'],
      name:'Dyster frylesäckmal',
      latin:'Coleophora otidipennella',
      auctor:'(Hübner, 1817)',
      hasImage:false,
      linkSv:'dyster_frylesäckmal',
      linkEn:'coleophora_otidipennella'
   },
   {
      artId:771,
      dyntaxaId:214508,
      group: ['D','C'],
      name:'Allmän tågsäckmal',
      latin:'Coleophora alticolella',
      auctor:'Zeller, 1849',
      hasImage:false,
      linkSv:'allmän_tågsäckmal',
      linkEn:'coleophora_alticolella'
   },
   {
      artId:772,
      dyntaxaId:214509,
      group: ['G'],
      name:'Gullinjerad tågsäckmal',
      latin:'Coleophora taeniipennella',
      auctor:'Herrich-Schäffer, 1855',
      hasImage:false,
      linkSv:'gullinjerad_tågsäckmal',
      linkEn:'coleophora_taeniipennella'
   },
   {
      artId:773,
      dyntaxaId:250426,
      group: ['C','B'],
      name:'Parkfrylesäckmal',
      latin:'Coleophora sylvaticella',
      auctor:'Wood, 1892',
      hasImage:false,
      linkSv:'parkfrylesäckmal',
      linkEn:'coleophora_sylvaticella'
   },
   {
      artId:774,
      dyntaxaId:214510,
      group: ['G'],
      name:'Trött säckmal',
      latin:'Coleophora lassella',
      auctor:'Staudinger, 1859',
      hasImage:false,
      linkSv:'trött_säckmal',
      linkEn:'coleophora_lassella'
   },
   {
      artId:775,
      dyntaxaId:214511,
      group: ['G'],
      name:'Strandtågsäckmal',
      latin:'Coleophora maritimella',
      auctor:'Newman, 1873',
      hasImage:false,
      linkSv:'strandtågsäckmal',
      linkEn:'coleophora_maritimella'
   },
   {
      artId:776,
      dyntaxaId:214512,
      group: ['F','G'],
      name:'Gullrissäckmal',
      latin:'Coleophora virgaureae',
      auctor:'Stainton, 1857',
      hasImage:false,
      linkSv:'gullrissäckmal',
      linkEn:'coleophora_virgaureae'
   },
   {
      artId:777,
      dyntaxaId:214513,
      group: ['G'],
      name:'Dubbellinjerad tistelsäckmal',
      latin:'Coleophora therinella',
      auctor:'Tengström, 1848',
      hasImage:false,
      linkSv:'dubbellinjerad_tistelsäckmal',
      linkEn:'coleophora_therinella'
   },
   {
      artId:778,
      dyntaxaId:214514,
      group: ['F','D'],
      name:'Strandastersäckmal',
      latin:'Coleophora asteris',
      auctor:'Mühlig, 1864',
      hasImage:false,
      linkSv:'strandastersäckmal',
      linkEn:'coleophora_asteris'
   },
   {
      artId:779,
      dyntaxaId:214515,
      group: ['D'],
      name:'Gulgrå mållsäckmal',
      latin:'Coleophora saxicolella',
      auctor:'(Duponchel, 1843)',
      hasImage:false,
      linkSv:'gulgrå_mållsäckmal',
      linkEn:'coleophora_saxicolella'
   },
   {
      artId:781,
      dyntaxaId:214516,
      group: ['F'],
      name:'Vitribbad mållsäckmal',
      latin:'Coleophora jaernaensis',
      auctor:'Björklund \u0026 Palmqvist, 2002',
      hasImage:false,
      linkSv:'vitribbad_mållsäckmal',
      linkEn:'coleophora_jaernaensis'
   },
   {
      artId:782,
      dyntaxaId:214517,
      group: ['D'],
      name:'Allmän mållsäckmal',
      latin:'Coleophora sternipennella',
      auctor:'(Zetterstedt, 1839)',
      hasImage:false,
      linkSv:'allmän_mållsäckmal',
      linkEn:'coleophora_sternipennella'
   },
   {
      artId:783,
      dyntaxaId:214518,
      group: ['B'],
      name:'Nordsäckmal',
      latin:'Coleophora boreella',
      auctor:'Benander, 1939',
      hasImage:false,
      linkSv:'nordsäckmal',
      linkEn:'coleophora_boreella'
   },
   {
      artId:784,
      dyntaxaId:214519,
      group: ['G'],
      name:'Gråbinkesäckmal',
      latin:'Coleophora squamosella',
      auctor:'Stainton, 1856',
      hasImage:false,
      linkSv:'gråbinkesäckmal',
      linkEn:'coleophora_squamosella'
   },
   {
      artId:785,
      dyntaxaId:214520,
      group: ['F'],
      name:'Blek mållsäckmal',
      latin:'Coleophora versurella',
      auctor:'Zeller, 1849',
      hasImage:false,
      linkSv:'blek_mållsäckmal',
      linkEn:'coleophora_versurella'
   },
   {
      artId:786,
      dyntaxaId:214521,
      group: ['F'],
      name:'Spetsvingad mållsäckmal',
      latin:'Coleophora vestianella',
      auctor:'(Lnnaeus, 1758)',
      hasImage:false,
      linkSv:'spetsvingad_mållsäckmal',
      linkEn:'coleophora_vestianella'
   },
   {
      artId:787,
      dyntaxaId:214522,
      group: ['D'],
      name:'Kustmållsäckmal',
      latin:'Coleophora atriplicis',
      auctor:'Meyrick, 1928',
      hasImage:false,
      linkSv:'kustmållsäckmal',
      linkEn:'coleophora_atriplicis'
   },
   {
      artId:788,
      dyntaxaId:214523,
      group: ['G'],
      name:'Kattfotsäckmal',
      latin:'Coleophora pappiferella',
      auctor:'Hofmann, 1869',
      hasImage:false,
      linkSv:'kattfotsäckmal',
      linkEn:'coleophora_pappiferella'
   },
   {
      artId:789,
      dyntaxaId:214524,
      group: ['F'],
      name:'Absintsäckmal',
      latin:'Coleophora absinthii',
      auctor:'Wocke, 1876',
      hasImage:false,
      linkSv:'absintsäckmal',
      linkEn:'coleophora_absinthii'
   },
   {
      artId:790,
      dyntaxaId:102407,
      group: ['E'],
      name:'Pältsasäckmal',
      latin:'Coleophora paeltsaella',
      auctor:'Palmqvist \u0026 Hellberg, 1999',
      hasImage:false,
      linkSv:'pältsasäckmal',
      linkEn:'coleophora_paeltsaella'
   },
   {
      artId:791,
      dyntaxaId:214526,
      group: ['F','G'],
      name:'Gråbosäckmal',
      latin:'Coleophora artemisicolella',
      auctor:'Bruand, 1855',
      hasImage:false,
      linkSv:'gråbosäckmal',
      linkEn:'coleophora_artemisicolella'
   },
   {
      artId:792,
      dyntaxaId:100680,
      group: ['F'],
      name:'Hylsnejlikesäckmal',
      latin:'Coleophora adelogrammella',
      auctor:'Zeller, 1849',
      hasImage:false,
      linkSv:'hylsnejlikesäckmal',
      linkEn:'coleophora_adelogrammella'
   },
   {
      artId:793,
      dyntaxaId:214528,
      group: ['F'],
      name:'Grovfjällig fältmalörtsäckmal',
      latin:'Coleophora succursella',
      auctor:'Herrich-Schäffer, 1854',
      hasImage:false,
      linkSv:'grovfjällig_fältmalörtsäckmal',
      linkEn:'coleophora_succursella'
   },
   {
      artId:794,
      dyntaxaId:102404,
      group: ['F'],
      name:'Grovfjällig hedblomstersäckmal',
      latin:'Coleophora gnaphalii',
      auctor:'Zeller, 1839',
      hasImage:false,
      linkSv:'grovfjällig_hedblomstersäckmal',
      linkEn:'coleophora_gnaphalii'
   },
   {
      artId:795,
      dyntaxaId:214530,
      group: ['F'],
      name:'Större backglimsäckmal',
      latin:'Coleophora galbulipennella',
      auctor:'Zeller, 1838',
      hasImage:false,
      linkSv:'större_backglimsäckmal',
      linkEn:'coleophora_galbulipennella'
   },
   {
      artId:796,
      dyntaxaId:100694,
      group: ['F','D'],
      name:'Knytlingsäckmal',
      latin:'Coleophora scabrida',
      auctor:'Toll, 1959',
      hasImage:false,
      linkSv:'knytlingsäckmal',
      linkEn:'coleophora_scabrida'
   },
   {
      artId:797,
      dyntaxaId:214532,
      group: ['F'],
      name:'Grovfjällig rölleksäckmal',
      latin:'Coleophora millefolii',
      auctor:'Zeller, 1849',
      hasImage:false,
      linkSv:'grovfjällig_rölleksäckmal',
      linkEn:'coleophora_millefolii'
   },
   {
      artId:798,
      dyntaxaId:100686,
      group: ['F'],
      name:'Såpörtsäckmal',
      latin:'Coleophora kyffhusana',
      auctor:'Petry, 1898',
      hasImage:false,
      linkSv:'såpörtsäckmal',
      linkEn:'coleophora_kyffhusana'
   },
   {
      artId:799,
      dyntaxaId:214534,
      group: ['G'],
      name:'Linjerad tistelsäckmal',
      latin:'Coleophora peribenanderi',
      auctor:'Toll, 1943',
      hasImage:false,
      linkSv:'linjerad_tistelsäckmal',
      linkEn:'coleophora_peribenanderi'
   },
   {
      artId:800,
      dyntaxaId:102399,
      group: ['G'],
      name:'Linjerad gullrissäckmal',
      latin:'Coleophora amellivora',
      auctor:'Baldizzone, 1979',
      hasImage:false,
      linkSv:'linjerad_gullrissäckmal',
      linkEn:'coleophora_amellivora'
   },
   {
      artId:801,
      dyntaxaId:100693,
      group: ['G'],
      name:'Vitsprötad gullrissäckmal',
      latin:'Coleophora ramosella',
      auctor:'Zeller, 1849',
      hasImage:false,
      linkSv:'vitsprötad_gullrissäckmal',
      linkEn:'coleophora_ramosella'
   },
   {
      artId:802,
      dyntaxaId:214537,
      group: ['G'],
      name:'Gullinjerad gullrissäckmal',
      latin:'Coleophora trochilella',
      auctor:'(Duponchel, 1843)',
      hasImage:false,
      linkSv:'gullinjerad_gullrissäckmal',
      linkEn:'coleophora_trochilella'
   },
   {
      artId:803,
      dyntaxaId:214538,
      group: ['F', 'D'],
      name:'Sen fältmalörtsäckmal',
      latin:'Coleophora directella',
      auctor:'Zeller, 1849',
      hasImage:false,
      linkSv:'sen_fältmalörtsäckmal',
      linkEn:'coleophora_directella'
   },
   {
      artId:804,
      dyntaxaId:214539,
      group: ['F'],
      name:'Sen rölleksäckmal',
      latin:'Coleophora expressella',
      auctor:'Klemensiewicz, 1902',
      hasImage:false,
      linkSv:'sen_rölleksäckmal',
      linkEn:'coleophora_expressella'
   },
   {
      artId:805,
      dyntaxaId:214540,
      group: ['G'],
      name:'Strimmig stjärnblomsäckmal',
      latin:'Coleophora striatipennella',
      auctor:'Nylander, 1848',
      hasImage:false,
      linkSv:'strimmig_stjärnblomsäckmal',
      linkEn:'coleophora_striatipennella'
   },
   {
      artId:806,
      dyntaxaId:100695,
      group: ['B'],
      name:'Skarpringad stjärnblomsäckmal',
      latin:'Coleophora solitariella',
      auctor:'Zeller, 1849',
      hasImage:false,
      linkSv:'skarpringad_stjärnblomsäckmal',
      linkEn:'coleophora_solitariella'
   },
   {
      artId:807,
      dyntaxaId:214542,
      group: ['F'],
      name:'Renfanesäckmal',
      latin:'Coleophora tanaceti',
      auctor:'Mühlig, 1865',
      hasImage:false,
      linkSv:'renfanesäckmal',
      linkEn:'coleophora_tanaceti'
   },
   {
      artId:808,
      dyntaxaId:214543,
      group: ['F'],
      name:'Ljus malörtsäckmal',
      latin:'Coleophora artemisiella',
      auctor:'Scott, 1861',
      hasImage:false,
      linkSv:'ljus_malörtsäckmal',
      linkEn:'coleophora_artemisiella'
   },
   {
      artId:809,
      dyntaxaId:102405,
      group: ['F'],
      name:'Punkterad backglimsäckmal',
      latin:'Coleophora hackmani',
      auctor:'(Toll, 1953)',
      hasImage:false,
      linkSv:'punkterad_backglimsäckmal',
      linkEn:'coleophora_hackmani'
   },
   {
      artId:810,
      dyntaxaId:214545,
      group: ['F','G'],
      name:'Silverstreckad rölleksäckmal',
      latin:'Coleophora argentula',
      auctor:'(Stephens, 1834)',
      hasImage:false,
      linkSv:'silverstreckad_rölleksäckmal',
      linkEn:'coleophora_argentula'
   },
   {
      artId:811,
      dyntaxaId:100684,
      group: ['G'],
      name:'Hampflockelsäckmal',
      latin:'Coleophora follicularis',
      auctor:'(Vallot, 1802)',
      hasImage:false,
      linkSv:'hampflockelsäckmal',
      linkEn:'coleophora_follicularis'
   },
   {
      artId:812,
      dyntaxaId:214547,
      group: ['F','D'],
      name:'Grå fältmalörtsäckmal',
      latin:'Coleophora granulatella',
      auctor:'Zeller, 1849',
      hasImage:false,
      linkSv:'grå_fältmalörtsäckmal',
      linkEn:'coleophora_granulatella'
   },
   {
      artId:813,
      dyntaxaId:214548,
      group: ['F'],
      name:'Ljus mållsäckmal',
      latin:'Coleophora adspersella',
      auctor:'Benander, 1939',
      hasImage:false,
      linkSv:'ljus_mållsäckmal',
      linkEn:'coleophora_adspersella'
   },
   {
      artId:814,
      dyntaxaId:100683,
      group: ['F'],
      name:'Nejliksäckmal',
      latin:'Coleophora dianthi',
      auctor:'Herrich-Schäffer, 1855',
      hasImage:false,
      linkSv:'nejliksäckmal',
      linkEn:'coleophora_dianthi'
   },
   {
      artId:815,
      dyntaxaId:214550,
      group: ['F'],
      name:'Ljusringad backglimsäckmal',
      latin:'Coleophora nutantella',
      auctor:'Mühlig \u0026 Frey, 1857',
      hasImage:false,
      linkSv:'ljusringad_backglimsäckmal',
      linkEn:'coleophora_nutantella'
   },
   {
      artId:816,
      dyntaxaId:214551,
      group: ['F'],
      name:'Mörkringad tjärblomstersäckmal',
      latin:'Coleophora graminicolella',
      auctor:'Heinemann, 1876',
      hasImage:false,
      linkSv:'mörkringad_tjärblomstersäckmal',
      linkEn:'coleophora_graminicolella'
   },
   {
      artId:817,
      dyntaxaId:100690,
      group: ['F'],
      name:'Dvärgsäckmal',
      latin:'Coleophora paradrymidis',
      auctor:'Toll, 1949',
      hasImage:false,
      linkSv:'dvärgsäckmal',
      linkEn:'coleophora_paradrymidis'
   },
   {
      artId:818,
      dyntaxaId:214553,
      group: ['E'],
      name:'Såpnejliksäckmal',
      latin:'Coleophora saponariella',
      auctor:'Heeger, 1848',
      hasImage:false,
      linkSv:'såpnejliksäckmal',
      linkEn:'coleophora_saponariella'
   },
   {
      artId:819,
      dyntaxaId:214554,
      group: ['B','A'],
      name:'Klintgrönglanssäckmal',
      latin:'Coleophora paripennella',
      auctor:'Zeller, 1839',
      hasImage:false,
      linkSv:'klintgrönglanssäckmal',
      linkEn:'coleophora_paripennella'
   },
   {
      artId:820,
      dyntaxaId:214555,
      group: ['B'],
      name:'Ribbad mållsäckmal',
      latin:'Coleophora clypeiferella',
      auctor:'Hofmann, 1871',
      hasImage:false,
      linkSv:'ribbad_mållsäckmal',
      linkEn:'coleophora_clypeiferella'
   },
   {
      artId:821,
      dyntaxaId:214556,
      group: ['B'],
      name:'Tvåfläckad mållsäckmal',
      latin:'Coleophora squalorella',
      auctor:'Zeller, 1849',
      hasImage:false,
      linkSv:'tvåfläckad_mållsäckmal',
      linkEn:'coleophora_squalorella'
   },
   {
      artId:822,
      dyntaxaId:102408,
      group: ['B'],
      name:'Glasörtsäckmal',
      latin:'Coleophora salicorniae',
      auctor:'Heinemann \u0026 Wocke, 1876',
      hasImage:false,
      linkSv:'glasörtsäckmal',
      linkEn:'coleophora_salicorniae'
   }
];