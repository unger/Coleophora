import axios from "axios";

import groupsUrl from "./api/groups.txt";
import caseGroupsUrl from "./api/case-groups.txt";
import taxonsUrl from "./api/taxons.txt";
import imagoPhotosUrl from "./api/imago-photos.txt";
import casePhotosUrl from "./api/case-photos.txt";

//axios.defaults.baseURL = import.meta.env.BASE_URL;

export function getGroups(): Promise<TaxonGroup[]> {
    return axios.get(groupsUrl).then((response) => response.data as TaxonGroup[]);
}

export function getCaseGroups(): Promise<TaxonGroup[]> {
    return axios.get(caseGroupsUrl).then((response) => response.data as TaxonGroup[]);
}

export function getTaxons(): Promise<Taxon[]> {
    return axios.get(taxonsUrl).then((response) => response.data as Taxon[]);
}

export function getImagoPhotos(): Promise<TaxonPhoto[]> {
    return axios.get(imagoPhotosUrl).then((response) => response.data as TaxonPhoto[]);
}

export function getCasePhotos(): Promise<TaxonPhoto[]> {
    return axios.get(casePhotosUrl).then((response) => response.data as TaxonPhoto[]);
}
