type Stage = "imago" | "case" | "egg";
type Gender = "male" | "female";
type ImagoGroupId = "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H";
type CaseGroupId = "Lapp" | "Blad" | "Pistol" | "Frö" | "Rör" | "Skid";
type GroupId = ImagoGroupId | CaseGroupId;

interface TaxonGroup {
  id: ImagoGroupId | CaseGroupId;
  name: string;
  description: string;
  image: string | undefined;
  stage: Stage;
}

interface Taxon {
  artId: number;
  dyntaxaId: number;
  group: GroupId[];
  name: string;
  latin: string;
  auctor: string;
  slugSv: string;
  slug: string;
  redlist: string | undefined;
  image: string | undefined;
  hasImage: boolean;
  similar: SimilarTaxon[] | undefined;
}

interface SimilarTaxon {
  name: string;
  latin: string;
  difference: string;
}

interface TaxonPhoto {
  group: GroupId[];
  name: string;
  latin: string;
  slug: string;
  image: string;
  date: string;
  site: string;
  stage: Stage;
  unsure: boolean;
  specimen: number;
  gender: Gender | undefined;
  detYear: number;
  detBy: string;
  detMethod: string;
  photographer: string;
  bildId: string;
}
