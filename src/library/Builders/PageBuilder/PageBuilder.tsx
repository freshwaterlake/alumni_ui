import { useContext } from 'react';
import { pageSave } from '../../Core/PageLoader';
import { storePageData } from '../../Core/SessionStore';
import { SmartContext } from '../../Core/SmartContext';
import { FormSection, PageBuilderArguments } from '../../Core/SmartTypes';
import FormBuilder from '../FormBuilder';

const PageBuilder = (args: PageBuilderArguments) => {
    const { state, dispatch } = useContext(SmartContext);

    const handleSubmit = (event: any) => {
        if (Object.values(state?.formValidationErrors).flat().length > 0) {
            dispatch({ type: 'SHOW_ERRORS' });
            alert('Please enter the mandatory fields!');
        } else {
            console.log(state?.data);
            console.log(state);
            pageSave(state?.data.id, state).then((response: any) => {
                console.log(response);
                storePageData(state?.routeInfo.pageName as string, response['data'], state?.data.id);
                dispatch({
                    type: 'POST_SAVE_RESPONSE_DATA',
                    payload: { data: response['data'] },
                });
            });
        }
        event.preventDefault();
        //axios.put(URL_FOR_FORM_DATA, state?.data);
    };

    const getSectionConfig = (sectionName: string) => state?.formConfig?.sectionRepository.find((section) => section.id === sectionName);

    return (
        <div className="bg-white">
            {state?.flags.isDataLoading && <div>Loading...</div>}

            {!state?.flags.isDataLoading && (
                <form className="needs-validation" noValidate onSubmit={handleSubmit}>
                    <div className="container bg-white border-top border-dark">
                        <div className="d-flex flex-wrap justify-content-between p-2">
                            {state?.formConfig?.sections.map((section) => (
                                <FormBuilder
                                    key={section}
                                    section={getSectionConfig(section) as FormSection}
                                    dataKey={
                                        getSectionConfig(section)?.dataId
                                            ? (getSectionConfig(section)?.dataId as string)
                                            : (getSectionConfig(section)?.id as string)
                                    }
                                />
                            ))}
                        </div>
                    </div>
                    <div className="d-flex justify-content-center col-md-12">
                        {state?.formConfig?.buttons.split(',').map((button) => (
                            <button
                                key={button}
                                type={button.trim().match(/Save|Update/) ? 'submit' : 'button'}
                                className="btn btn-primary col-md-3 m-2">
                                {button.trim()}
                            </button>
                        ))}
                    </div>
                </form>
            )}
        </div>
    );
};

export default PageBuilder;
