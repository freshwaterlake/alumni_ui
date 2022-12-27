import axios, { AxiosResponse } from 'axios';
import { getValueFromSessionStore, storeInLocalStorage } from './SessionStore';
import { convertDomainArrayToMap } from './SmartFunctions';

export type LocalStorageResponse = {
    data: any;
};

const baseRoutes = {
    pageConfig: `http://localhost:3009/api/v1/pageConfig/`,
    data: `http://localhost:3007/api/v1/alumni/`,
    domainData: `http://localhost:3009/api/v1/appConfig/domain_data`,
};

const getPageConfig = (pageName: string): Promise<AxiosResponse<any, any>> | Promise<LocalStorageResponse> => {
    const storedPageConfig = getValueFromSessionStore(`page-config-${pageName}`);
    if (storedPageConfig) return Promise.resolve({ data: JSON.parse(storedPageConfig) });
    return axios.get(`${baseRoutes['pageConfig']}/${pageName}`);
};

const getDomainData = (): Promise<AxiosResponse<any, any>> | Promise<LocalStorageResponse> => {
    const storedDomainData = getValueFromSessionStore(`domain-data`);
    if (storedDomainData) return Promise.resolve({ data: JSON.parse(storedDomainData) });
    return axios.get(`${baseRoutes['domainData']}`);
};

const getData = (pageName: String, id: number): Promise<AxiosResponse<any, any>> | Promise<LocalStorageResponse> => {
    const storedEntity = getValueFromSessionStore(`page-data-${id}-${pageName}`);
    if (storedEntity) return Promise.resolve({ data: JSON.parse(storedEntity) });
    return axios.get(`${baseRoutes['data']}/${id}/${pageName}`);
};

const pageLoader = (pageName: string, id: number) => {
    const state: any = {};

    return Promise.all([getPageConfig(pageName), getData(pageName, id), getDomainData()]).then((values) => {
        state.formConfig = values[0].data;
        state.data = values[1].data;
        state.domain = convertDomainArrayToMap(values[2].data);
        state.internal = { gridState: [] };

        storeInLocalStorage(pageName, state, id);

        return state;
    });
};

export default pageLoader;
