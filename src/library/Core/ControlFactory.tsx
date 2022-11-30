import TableControl from '../ComplexControls/TableControl';
import MultiSelectWithAdditionalInputs from '../SimpleControls/MultiSelectWithAdditionalInputs';
import PhoneControl from '../SimpleControls/PhoneControl';
import RadioControl from '../SimpleControls/RadioControl';
import SelectControl from '../SimpleControls/SelectControl';
import TextAreaControl from '../SimpleControls/TextAreaControl';
import TextControl from '../SimpleControls/TextControl';
import YearAndMonthSelector from '../SimpleControls/YearAndMonthSelector';
import { FormControl } from './SmartTypes';

export const getControlFromFactory = (control: FormControl, dataKey: string, childDataKey: string) => {
    const keyVal = control.id ? control.id : 1 + Math.random() * 99999;
    let element;

    switch (control.type) {
        case 'TEXT':
            element = <TextControl control={control} dataKey={childDataKey} />;
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
        case 'PHONE':
            element = <PhoneControl control={control} dataKey={childDataKey} />;
            break;
        case 'YEAR_AND_MONTH':
            element = <YearAndMonthSelector key={keyVal} control={control} dataKey={childDataKey} />;
            break;
        case 'MULTI_SELECT_WAI':
            element = <MultiSelectWithAdditionalInputs key={keyVal} control={control} dataKey={childDataKey} />;
            break;
        case 'TABLE':
            element = <TableControl control={control} dataKey={dataKey} />;
            break;
        default:
            throw new Error();
    }

    return (
        <div key={keyVal} className={`has-validation ${control.className} p-2`}>
            {element}
        </div>
    );
};
