import { ReactNode } from 'react';

export type Page = {
    title: string;
    urlPath: string;
    sections: string[];
    buttons: string;
    sectionRepository: FormSection[];
};

export type FormSection = {
    id?: string; // If ID is not present, no ID will be added
    dataId?: string;
    title: string;
    type: 'COMPLEX_CONTROL' | 'SECTION_WITH_HEADER' | 'SECTION_WITHOUT_HEADER';
    className: string;
    hideExpression: string;
    controlGroup: FormControl[];
};

export type FormControl = {
    id: string;
    dataId: string;
    fields: string[];
    type: string;
    hideExpression: string;
    required: number;
    dataKey: 'USE_PARENT' | string;
    defaultValue?: any;
    width: number;
    className?: string;
    props: ControlProperties;
    controlGroup: FormControl[];
};

// https://github.com/ngx-formly/ngx-formly/blob/main/src/core/src/lib/models/fieldconfig.ts
export type ControlProperties = {
    label?: string;
    inputMode?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search' | undefined;
    placeholder?: string;
    disabled?: boolean;
    description?: string;
    icon?: string;
    isCode?: boolean;
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
    numLines: number; // For text area
    radioTextClassName?: string;
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
    routeInfo: RouteInfo;
    formConfig?: Page;
    data?: any;
    domain?: Map<string, DomainElement[]>;
    flags: StateFlags;
    internal: InternalState;
    formValidationErrors: any;
    customControls?: ObjectWithComponents;
    actions: any;
};

export type RouteInfo = {
    id: string;
    pageName: string;
};

export type InternalState = {
    gridState: GridInternalData[];
    activitiesConfig?: any[];
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
    showFormErrors: number;
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
    handleChangeEvent?: (id: string, value: any, dataKey: string) => void;
};

export type ChildControlArguments = {
    type: string;
    control: FormControl;
    dataKey: string;
    parentDataKey?: string;
};

export type ObjectWithKeys = {
    [key: string]: string | number | ObjectWithKeys | any[];
};

export type ObjectWithComponents = {
    [key: string]: (props: any) => JSX.Element;
};

export type ObjectWithFunctions = {
    [key: string]: () => void;
};

export type ObjectWithFunctionsWithPram = {
    [key: string]: (param: any) => void;
};

export type LayoutArguments = {
    section: FormSection;
    component: ReactNode;
};
