class TaxonGroup {
    id!: string;
    name!: string;
    description!: string;
    image: string | undefined;
}

class Taxon {
    artId!: number;
    dyntaxaId!: Number;
    group!: string[];
    name!: string;
    latin!: string;
    auctor!: string;
    slugSv!: string;
    slug!: string;
    redlist: string | undefined;
    image: string | undefined;
    hasImage!: boolean;
}

class TaxonPhoto {
    group!: string[];
    name!: string;
    latin!: string;
    slug!: string;
    image!: string;
    date!: string;
    site!: string;
    stage!: string;
    unsure!: boolean;
    specimen!: number;
    detYear!: number;
    detBy!: string;
    detMethod!: string;
    photographer!: string;
    bildId!: string;
}
