import { DispatchEvent, DomainElement, FormControl, ObjectWithKeys, State } from './SmartTypes';

export const isEmpty = (obj: any) => {
    if (obj === null || obj === undefined) return true;
    if (Array.isArray(obj) && obj.length === 0) return true;
    return Object.entries(obj).length === 0 ? true : false;
};

export const getControlValueFromState = (key: string, state: State): any[] | string | number | undefined | any => {
    if (isEmpty(state.data)) return [];
    try {
        return key.split('.').reduce((a, c) => a[c], state.data);
    } catch (e) {
        console.error('Error while reading data!!!');
    }
    return undefined;
};

export const handleControlValueChange = (id: string, value: any, dataKey: string, dispatch: (dispatchEvent: DispatchEvent) => void) =>
    dispatch({ type: 'CONTROL_VALUE_CHANGE', payload: { dataKey, name: id, value } });

export const convertDomainArrayToMap = (domain: DomainElement[]) => {
    const domainMap = new Map<string, DomainElement[]>();

    domain.map((element) => {
        if (domainMap.has(element.categoryCode)) domainMap.get(element?.categoryCode)?.push(element);
        else domainMap.set(element.categoryCode, [element]);
    });

    return domainMap;
};

export const getDataStructureFromControls = (controls: FormControl[]) =>
    controls.reduce((accumulator, control) => Object.assign(accumulator, { [control.id]: undefined }), {});

export const getDomainValueForCode = (code: string, domain: any[]) => {
    if (isEmpty(code) || isEmpty(domain)) return '';
    return domain?.find((element) => element.code === code)['value'];
};

export const range = (from: number, to: number) => [...Array(to - from)].map((_, i) => i + from);

export const getFieldValuesConcatenatedFromRecord = (record: ObjectWithKeys, config: FormControl[], fieldNames: string, domain: any) => {
    return fieldNames
        .split(',')
        .map((value) => value.trim())
        .map((fieldName) => {
            const controlConfig = config.find((ctrl) => ctrl.id === fieldName);
            return controlConfig?.props.domainCategoryCode
                ? getDomainValueForCode(record[fieldName] as string, domain.get(controlConfig?.props.domainCategoryCode))
                : record[fieldName];
        })
        .join(' - ');
};

export const findTheRightDataKey = (control: FormControl, dataKey: string, parentDataKey: string) => {
    if (!control?.dataKey) return dataKey;
    return control?.dataKey === 'USE_PARENT' ? parentDataKey : control.dataKey;
};
