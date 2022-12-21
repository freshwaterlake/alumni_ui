import axios from 'axios';
import { useContext } from 'react';
import { SmartContext } from '../../Core/SmartContext';
import { FormSection, PageBuilderArguments } from '../../Core/SmartTypes';
import FormBuilder from '../FormBuilder';

const PageBuilder = (args: PageBuilderArguments) => {
    const { state, dispatch } = useContext(SmartContext);

    const handleSubmit = (event: React.SyntheticEvent) => {
        const URL_FOR_FORM_DATA = `http://localhost:3007/${args.pageName}/${args.id}`;
        event.preventDefault();
        console.log(state?.data);
        console.log(state);
        axios.put(URL_FOR_FORM_DATA, state?.data);
    };

    const getSectionConfig = (sectionName: string) => state?.formConfig?.sectionRepository.find((section) => section.id === sectionName);

    return (
        <div className='bg-white'>
            {state?.flags.isDataLoading && <div>Loading...</div>}

            {!state?.flags.isDataLoading && (
                <form className='needs-validation' noValidate onSubmit={handleSubmit}>
                    <div className='container bg-white border-top border-dark'>
                        <div className='d-flex flex-wrap justify-content-between align-items-center p-2'>
                            {state?.formConfig?.sections.map((section) => (
                                <FormBuilder
                                    key={section}
                                    section={getSectionConfig(section) as FormSection}
                                    dataKey={getSectionConfig(section)?.id as string}
                                />
                            ))}
                        </div>
                    </div>
                </form>
            )}
        </div>
    );
};

export default PageBuilder;
