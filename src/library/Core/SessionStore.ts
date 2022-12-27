export type StoredItem = {
    data: any;
    storedAt: Date;
};

const storeDomainData = (data: any) => sessionStorage.setItem('domainData', data);

const storePageConfig = (pageName: string, data: any) => sessionStorage.setItem(`page-config-${pageName}`, data);

const storePageData = (pageName: string, data: any, id: number) => sessionStorage.setItem(`page-data-${id}-${pageName}`, data);

export const getValueFromSessionStore = (key: string) => sessionStorage.get(key);

export const storeInLocalStorage = (pageName: string, state: any, id: number) => {
    storeDomainData(state['domain']);
    storePageConfig(pageName, state['formConfig']);
    storePageData(pageName, state['data'], id);
};
