import { useContext } from 'react';
import { getControlFromFactory } from '../Core/ControlFactory';
import { SmartContext } from '../Core/SmartContext';
import { FormBuilderArguments, FormControl, FormSection } from '../Core/SmartTypes';
import LayoutBuilder from './LayoutBuilder';

const FormBuilder = (args: FormBuilderArguments) => {
    const { state } = useContext(SmartContext);
    const { section, dataKey } = args;

    const getControl = (control: FormControl) => {
        const childDataKey = control.id ? dataKey + '.' + control.id : dataKey;

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
            element = getControlFromFactory(control, dataKey, childDataKey);
        }

        return element;
    };

    return <LayoutBuilder section={section} component={<>{section.controlGroup.map((control) => getControl(control))}</>} />;
};

export default FormBuilder;
