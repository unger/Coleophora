export interface Taxon {
  artId:number,
  dyntaxaId:number,
  group: string[],
  name: string,
  latin: string,
  auctor: string,
  slugSv: string,
  slug: string,
  hasImage: boolean,
  redlist?: string,
  distribution?: string,
  foodplants?: any[],
  imago?: string,
  similar?: any[] 
}
