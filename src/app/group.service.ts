import {Group} from './group';

export class GroupService {

  getAllGroups() {
    return GROUPS;
  }

}

var GROUPS: Group[] = [
      {
	    id: 'A',
	    name:'Grupp A',
		description:'Metallicfärgad', 
		image:'img/coleophora_alcyonipennella.jpg'
	  },
      {
	    id: 'B',
	    name:'Grupp B',
		description:'Enfärgad', 
		image:'img/coleophora_lusciniaepennella.jpg'
	  },
      {
	    id: 'C',
	    name:'Grupp C',
		description:'Enfärgad med ljus framkant', 
		image:'img/coleophora_caespititiella.jpg',
	  },
      {
	    id: 'D',
	    name:'Grupp D',
		description:'Svagt streckad ofta med ljus framkant', 
		image:'img/coleophora_sternipennella.jpg'
	  },
      {
	    id: 'E',
	    name:'Grupp E',
		description:'Streckad utan sneda streck mot spetsen', 
		image:'img/coleophora_parthenogenella.jpg'
	  },
      {
	    id: 'F',
	    name:'Grupp F',
		description:'Streckad med ljusa sneda streck mot spetsen, med mörka fjäll', 
		image:'img/coleophora_versurella_10_7997.jpg'
	  },
      {
	    id: 'G',
	    name:'Grupp G',
		description:'Streckad med ljusa sneda streck mot spetsen, utan mörka fjäll', 
		image:'img/coleophora_therinella.jpg'
	  },
      {
	    id: 'H',
	    name:'Grupp H',
		description:'Vit grundfärg', 
		image:'img/coleophora_albidella.jpg'
	  },
  ];