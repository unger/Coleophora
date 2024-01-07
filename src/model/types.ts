type Stage = 'imago' | 'case' | 'egg';
type Gender = 'male' | 'female';
type ImagoGroupId = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H';
type CaseGroupId = 'Lapp' | 'Blad' | 'Pistol' | 'Frö' | 'Rör' | 'Skid';
type GroupId = ImagoGroupId | CaseGroupId;

interface TaxonGroup {
    id: ImagoGroupId | CaseGroupId;
    name: string;
    description: string;
    image: string | undefined;
}

interface Taxon {
    artId: number;
    dyntaxaId: Number;
    group: GroupId[];
    name: string;
    latin: string;
    auctor: string;
    slugSv: string;
    slug: string;
    redlist: string | undefined;
    image: string | undefined;
    hasImage: boolean;
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
