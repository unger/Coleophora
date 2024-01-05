import axios from 'axios'

axios.defaults.baseURL = import.meta.env.BASE_URL;

export function getGroups(): Promise<TaxonGroup[]> {
    return axios
        .get('/api/groups.json')
        .then(response => response.data);
}

export function getCaseGroups(): Promise<TaxonGroup[]> {
    return axios
        .get('/api/case-groups.json')
        .then(response => response.data);
}

export function getTaxons(): Promise<Taxon[]> {
    return axios
        .get('/api/taxons.json')
        .then(response => response.data);
}

export function getImagoPhotos(): Promise<TaxonPhoto[]> {
    return axios
        .get('/api/imago-photos.json')
        .then(response => response.data);
}

export function getCasePhotos(): Promise<TaxonPhoto[]> {
    return axios
        .get('/api/case-photos.json')
        .then(response => response.data);
}
