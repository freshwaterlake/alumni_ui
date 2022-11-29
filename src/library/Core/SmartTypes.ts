import { ReactNode } from 'react';

export type Page = {
    title: string;
    urlPath: string;
    sections: string[];
    sectionRepository: FormSection[];
};

export type FormSection = {
    id?: string; // If ID is not present, no ID will be added
    title: string;
    type: 'COMPLEX_CONTROL' | 'SECTION_WITH_HEADER' | 'SECTION_WITHOUT_HEADER';
    controlGroup: FormControl[];
};

export type FormControl = {
    id: string;
    fields: string[];
    type: string;
    defaultValue?: any;
    width: number;
    className?: string;
    props: ControlProperties;
};

// https://github.com/ngx-formly/ngx-formly/blob/main/src/core/src/lib/models/fieldconfig.ts
export type ControlProperties = {
    label?: string;
    inputMode?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search' | undefined;
    placeholder?: string;
    disabled?: boolean;
    description?: string;
    hidden?: boolean;
    max?: number;
    min?: number;
    minLength?: number;
    maxLength?: number;
    pattern?: string | RegExp;
    required?: boolean;
    readonly?: boolean;
    gridOptions: GridOptions;
    domainCategoryCode: string;
    parentId: string;
};

export type GridOptions = {
    columnDefs: ColumnDefs[];
    pageSize: number;
};

export type ColumnDefs = {
    id: string;
    label: string;
    width: number;
};

export type ApplicationContext = {
    state: State | null;
    dispatch: (dispatchEvent: DispatchEvent) => void;
};

export type State = {
    formConfig?: Page;
    data?: any;
    domain?: Map<string, []>;
    flags: StateFlags;
    internal: InternalState;
};

export type InternalState = {
    gridState: GridInternalData[];
};

export type GridInternalData = {
    id: string;
    searchCriteria: any;
    currentPage: number;
    filteredData: any[];
    pageData: any[];
};

export type StateFlags = {
    isDataLoading: boolean;
};

export type DomainElement = {
    categoryCode: string;
    code: string;
    value: string;
    parentCode: string;
};

export type Domain = Map<string, DomainElement>;

export type DispatchEvent = {
    type: string;
    payload?: ControlValueChange | FormDataFromDBReceived | TableSearchCriteriaChange | TableOriginalDataSet | any;
};

export type ControlValueChange = {
    dataKey: string;
    name: string;
    value: any;
};

export type TableSearchCriteriaChange = {
    id: string;
    value: String;
    tableName: string;
    originalData: any[];
    control: FormControl;
};

export type TableOriginalDataSet = {
    tableName: string;
    data: any;
};

export type FormDataFromDBReceived = {
    config: Page;
    data: any;
    domain: DomainElement[];
};

export type PageBuilderArguments = {
    pageName: string;
    id: number;
};

export type FormBuilderArguments = {
    section: FormSection;
    dataKey: string;
};

export type PaginationArguments = {
    data: any[];
    pageSize: number;
    onPageChange: (pageNumber: number) => void;
};

export type SimpleFormControlArguments = {
    control: FormControl;
    dataKey: string;
    parentDataKey?: string;
};

export type ObjectWithKeys = {
    [key: string]: string | number | ObjectWithKeys;
};

export type LayoutArguments = {
    section: FormSection;
    component: ReactNode;
};
