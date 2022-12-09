import GridCardsControl from '../ComplexControls/GridCardsControl';
import TableControl from '../ComplexControls/TableControl';
import FiltersControl from '../SimpleControls/FiltersControl';
import ListControl from '../SimpleControls/ListControl';
import MultiSelectWithAdditionalInputsTwo from '../SimpleControls/MultiSelectWithAdditionalAttributesTwo';
import MultiSelectWithAdditionalInputsOne from '../SimpleControls/MultiSelectWithAdditionalInputsOne';
import PhoneControl from '../SimpleControls/PhoneControl';
import RadioControl from '../SimpleControls/RadioControl';
import SelectControl from '../SimpleControls/SelectControl';
import TextAreaControl from '../SimpleControls/TextAreaControl';
import TextAsLabelControl from '../SimpleControls/TextAsLabelControl';
import TextControl from '../SimpleControls/TextControl';
import YearAndMonthSelector from '../SimpleControls/YearAndMonthSelector';
import { ChildWrapperControl } from './ChildWrapperControl';
import { FormControl } from './SmartTypes';

export const getControlFromFactory = (control: FormControl, dataKey: string, childDataKey: string) => {
    const keyVal = control.id ? control.id : 1 + Math.random() * 99999;
    let element;

    switch (control.type) {
        case 'TEXT':
            element = <TextControl control={control} dataKey={childDataKey} />;
            break;
        case 'TEXT_AS_LABEL':
            element = <TextAsLabelControl control={control} dataKey={childDataKey} />;
            break;
        case 'TEXTAREA':
            element = <TextAreaControl control={control} dataKey={childDataKey} />;
            break;
        case 'RADIO':
            element = <RadioControl control={control} dataKey={childDataKey} />;
            break;
        case 'SELECT':
            element = <SelectControl control={control} dataKey={childDataKey} parentDataKey={dataKey} />;
            break;
        case 'LIST':
            element = <ListControl control={control} dataKey={childDataKey} parentDataKey={dataKey} />;
            break;
        case 'PHONE':
            element = <PhoneControl control={control} dataKey={childDataKey} />;
            break;
        case 'YEAR_AND_MONTH':
            element = <YearAndMonthSelector key={keyVal} control={control} dataKey={childDataKey} />;
            break;
        case 'MULTI_SELECT_WAI_1':
            element = <MultiSelectWithAdditionalInputsOne key={keyVal} control={control} dataKey={childDataKey} />;
            break;
        case 'MULTI_SELECT_WAI_2':
            element = <MultiSelectWithAdditionalInputsTwo key={keyVal} control={control} dataKey={childDataKey} />;
            break;
        case 'SEARCH_FILTER':
            element = <FiltersControl key={keyVal} control={control} dataKey={childDataKey} />;
            break;
        case 'GRID_CARD':
            element = <GridCardsControl key={keyVal} control={control} dataKey={childDataKey} />;
            break;
        case 'TABLE':
            element = <TableControl control={control} dataKey={dataKey} />;
            break;
        default:
            element = <ChildWrapperControl type={control.type} control={control} dataKey={childDataKey} parentDataKey={dataKey} />;
    }

    return (
        <div key={keyVal} className={`has-validation ${control.className} p-2`}>
            {element}
        </div>
    );
};
