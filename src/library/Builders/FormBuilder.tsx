import { useContext } from 'react';
import { getControlFromFactory } from '../Core/ControlFactory';
import { SmartContext } from '../Core/SmartContext';
import { FormBuilderArguments, FormControl, FormSection, State } from '../Core/SmartTypes';
import LayoutBuilder from './LayoutBuilder';

const FormBuilder = (args: FormBuilderArguments) => {
    const { state } = useContext(SmartContext);
    const { section, dataKey } = args;

    const getChildKey = (control: FormControl, parentDataKey: string) => {
        if (!control.id) return parentDataKey;

        if (control.id && control?.dataId === 'USE_PARENT') return parentDataKey;

        if (control.id && control?.dataId?.length > 0 && control?.dataId !== 'USE_PARENT') return control.dataId;

        return parentDataKey + '.' + control.id;
    };

    const getControl = (control: FormControl) => {
        //const childDataKey = control.id ? dataKey + '.' + control.id : dataKey;
        const childDataKey = getChildKey(control, dataKey);

        const getSectionConfig = (sectionName: string) =>
            state?.formConfig?.sectionRepository.find((section) => section.id === sectionName);

        const keyVal = control.id ? control.id : 1 + Math.random() * 99999;
        let element;

        if (control.type === 'SMART')
            element = (
                <div key={keyVal} className={`has-validation ${control.className} p-2`}>
                    <FormBuilder section={getSectionConfig(control.id) as FormSection} dataKey={childDataKey} />
                </div>
            );
        else {
            element = getControlFromFactory(control, dataKey, childDataKey, state as State);
        }

        return element;
    };

    return <LayoutBuilder section={section} component={<>{section.controlGroup.map((control) => getControl(control))}</>} />;
};

export default FormBuilder;
