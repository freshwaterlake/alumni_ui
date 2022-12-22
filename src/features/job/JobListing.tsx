import { useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { useImmerReducer } from 'use-immer';
import PageBuilder from '../../library/Builders/PageBuilder/PageBuilder';
import { SmartContext } from '../../library/Core/SmartContext';
import smartReducer from '../../library/Core/SmartReducer';
import { DispatchEvent, State } from '../../library/Core/SmartTypes';
import {
    handleSearch,
    handleShowActiveListing,
    handleShowListedByYouListing,
    handleShowSavedListing,
    handleShowSentInterestListing,
} from './actions';

const JobListing = () => {
    const { id, pageName } = useParams();

    const [state, dispatch] = useImmerReducer<State, DispatchEvent>(smartReducer, {
        flags: { isDataLoading: true },
    } as any);

    const { formConfig, data, domain, internal } = useLoaderData() as State;

    const actions = {
        activeListing: handleShowActiveListing,
        saved: handleShowSavedListing,
        sentInterest: handleShowSentInterestListing,
        listedByYou: handleShowListedByYouListing,
        search: handleSearch,
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
            <button className='bg-primary' onClick={() => console.log(state)}>
                Print State
            </button>
        </SmartContext.Provider>
    );
};

export default JobListing;
