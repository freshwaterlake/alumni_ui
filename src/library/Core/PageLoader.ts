import axios, { AxiosResponse } from 'axios';
import { getValueFromSessionStore, storeInLocalStorage } from './SessionStore';
import { convertDomainArrayToMap, isEmpty } from './SmartFunctions';
import { Page } from './SmartTypes';

export type LocalStorageResponse = {
    data: any;
};

const baseRoutes = {
    pageConfig: `http://localhost:3009/api/v1/pageConfig`,
    data: `http://localhost:3007/alumni`,
    domainData: `http://localhost:3009/api/v1/appConfig/domain_data`,
};

const getPageConfig = (pageName: string): Promise<AxiosResponse<any, any>> | Promise<LocalStorageResponse> => {
    const storedPageConfig = getValueFromSessionStore(`page-config-${pageName}`);
    if (!isEmpty(storedPageConfig)) return Promise.resolve({ data: JSON.parse(storedPageConfig as string) });
    return axios.get(`${baseRoutes['pageConfig']}/${pageName}`);
};

const getDomainData = (): Promise<AxiosResponse<any, any>> | Promise<LocalStorageResponse> => {
    const storedData = getValueFromSessionStore(`domain-data`);
    const storedDataObj = storedData ? new Map(JSON.parse(storedData as string)) : new Map();
    if (storedDataObj.size) return Promise.resolve({ data: storedDataObj });
    return axios.get(`${baseRoutes['domainData']}`);
};

const getData = (pageName: String, id: number): Promise<AxiosResponse<any, any>> | Promise<LocalStorageResponse> => {
    if (id === undefined) return Promise.resolve({ data: {} });
    const storedEntity = getValueFromSessionStore(`page-data-${id}-${pageName}`);
    if (!isEmpty(storedEntity)) return Promise.resolve({ data: JSON.parse(storedEntity as string) });
    return axios.get(`${baseRoutes['data']}/${id}`);
};

const initializeDataIfUndefined = (config: Page) => {
    const data = {};
    config.sections.map((section) => Object.assign(data, { [section]: {} }));
    return data;
};

const pageLoader = (params: any) => {
    const state: any = {};
    const { id, pageName } = params;

    return Promise.all([getPageConfig(pageName), getData(pageName, id), getDomainData()]).then((values) => {
        state.formConfig = values[0].data;
        state.data = Object.keys(values[1].data).length ? values[1].data : initializeDataIfUndefined(state.formConfig);
        state.domain = values[2].data instanceof Map ? values[2].data : convertDomainArrayToMap(values[2].data);
        state.internal = { gridState: [] };

        storeInLocalStorage(pageName, state, id);

        return Promise.resolve(state);
    });
};

export default pageLoader;
