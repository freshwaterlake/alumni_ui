export type StoredItem = {
    data: any;
    storedAt: Date;
};

export const storeDomainData = (data: any) => sessionStorage.setItem('domain-data', JSON.stringify(Array.from(data.entries())));

export const storePageConfig = (pageName: string, data: any) => sessionStorage.setItem(`page-config-${pageName}`, JSON.stringify(data));

export const storePageData = (pageName: string, data: any, id: number) =>
    sessionStorage.setItem(`page-data-${id}-${pageName}`, JSON.stringify(data));

export const getValueFromSessionStore = (key: string) => sessionStorage.getItem(key);

export const storeInLocalStorage = (pageName: string, state: any, id: number) => {
    storeDomainData(state['domain']);
    storePageConfig(pageName, state['formConfig']);
    storePageData(pageName, state['data'], id);
};
