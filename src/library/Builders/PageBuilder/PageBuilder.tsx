import axios from 'axios';
import { useContext } from 'react';
import { SmartContext } from '../../Core/SmartContext';
import { FormSection, PageBuilderArguments } from '../../Core/SmartTypes';
import PageTitleControl from '../../SimpleControls/PageTitleControl/PageTitleControl';
import FormBuilder from '../FormBuilder';

const PageBuilder = (args: PageBuilderArguments) => {
    const { state, dispatch } = useContext(SmartContext);
    // const { formConfig, data, domain, internal } = useLoaderData() as State;

    // dispatch({
    //     type: 'FETCH_PAGE_DATA_END',
    //     payload: { formConfig, data, domain, internal },
    // });

    // TODO: Should this be out.. and leverage functions passed from the child?
    // const getData = (pageName: string, id: number) => {
    //     const URL_FOR_CONFIG = `http://localhost:3007/Config/${pageName}`;
    //     const URL_FOR_FORM_DATA = `http://localhost:3007/${pageName}/${id}`;
    //     const URL_FOR_DOMAIN_DATA = `http://localhost:3007/domain`;

    //     dispatch({ type: 'FETCH_PAGE_DATA_BEGIN' });

    //     Promise.all([axios.get(URL_FOR_CONFIG), axios.get(URL_FOR_FORM_DATA), axios.get(URL_FOR_DOMAIN_DATA)]).then((values) => {
    //         dispatch({
    //             type: 'FETCH_PAGE_DATA_END',
    //             payload: {
    //                 config: values[0].data,
    //                 data: values[1].data,
    //                 domain: convertDomainArrayToMap(values[2].data),
    //                 internal: { gridState: [] },
    //             },
    //         });
    //     });
    // };

    const handleSubmit = (event: React.SyntheticEvent) => {
        const URL_FOR_FORM_DATA = `http://localhost:3007/${args.pageName}/${args.id}`;
        event.preventDefault();
        console.log(state?.data);
        console.log(state);
        axios.put(URL_FOR_FORM_DATA, state?.data);
    };

    // useEffect(() => {
    //     dispatch({
    //         type: 'FETCH_PAGE_DATA_END',
    //         payload: { formConfig, data, domain, internal },
    //     });
    // }, [formConfig, data, domain, internal]);

    const getSectionConfig = (sectionName: string) => state?.formConfig?.sectionRepository.find((section) => section.id === sectionName);

    return (
        <div className='bg-light'>
            {state?.flags.isDataLoading && <div>Loading...</div>}
            {/* TODO: Error display condition to be added*/}
            <div className='page_ttl_row border-bottom border-2 custom-border-gray p-4 pb-3'>
                <PageTitleControl />
            </div>

            {!state?.flags.isDataLoading && (
                <form className='needs-validation' noValidate onSubmit={handleSubmit}>
                    <div className='container bg-white border-top border-dark'>
                        <div className='d-flex flex-wrap justify-content-between align-items-center mx-auto max-630 pt-4 pt-sm-5 pb-5'>
                            {state?.formConfig?.sections.map((section) => (
                                <FormBuilder
                                    key={section}
                                    section={getSectionConfig(section) as FormSection}
                                    dataKey={getSectionConfig(section)?.id as string}
                                />
                            ))}

                            <button type='submit' className='btn btn-primary m-3'>
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            )}
        </div>
    );
};

export default PageBuilder;
