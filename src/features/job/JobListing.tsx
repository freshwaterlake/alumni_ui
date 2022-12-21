import { useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { useImmerReducer } from 'use-immer';
import PageBuilder from '../../library/Builders/PageBuilder/PageBuilder';
import { SmartContext } from '../../library/Core/SmartContext';
import smartReducer from '../../library/Core/SmartReducer';
import { DispatchEvent, ObjectWithFunctions, State } from '../../library/Core/SmartTypes';
import { handleShowActiveListing, handleShowListedByYouListing, handleShowSavedListing, handleShowSentInterestListing } from './actions';

const JobListing = () => {
    const { id, pageName } = useParams();

    const [state, dispatch] = useImmerReducer<State, DispatchEvent>(smartReducer, {
        flags: { isDataLoading: true },
    } as any);

    const { formConfig, data, domain, internal } = useLoaderData() as State;

    const actions: ObjectWithFunctions = {
        activeListing: handleShowActiveListing,
        saved: handleShowSavedListing,
        sentInterest: handleShowSentInterestListing,
        listedByYou: handleShowListedByYouListing,
    };

    useEffect(() => {
        dispatch({
            type: 'DATA_INIT',
            payload: { formConfig, data, domain, internal, actions },
        });
    }, []);

    return (
        <SmartContext.Provider value={{ state, dispatch }}>
            <div className='main flex-1'>
                <section className='updatebasicinformation'>
                    <div className='container max-1140 px-lg-0 overflow-hidden'>
                        <div className='row'>
                            <div className='col-md-12 mb-4'>
                                <div className='white-block white-block-notopborderradius p-0 h-100'>
                                    <PageBuilder pageName={pageName as string} id={parseInt(id as string)} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </SmartContext.Provider>
    );
};

export default JobListing;
