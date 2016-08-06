export interface TaxonName {
  name: string,
  latin: string,
}

export interface Taxon extends TaxonName {
  artId:number,
  dyntaxaId:number,
  group: string[],
  auctor: string,
  wingSpanMin: number,
  wingSpanMax: number,
  slugSv: string,
  slug: string,
  hasImage: boolean,
  redlist?: string,
  distribution?: string,
  foodplants?: any[],
  imago?: string,
  similar?: any[] 
}

