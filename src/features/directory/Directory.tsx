import { useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { useImmerReducer } from 'use-immer';
import PageBuilder from '../../library/Builders/PageBuilder/PageBuilder';
import { SmartContext } from '../../library/Core/SmartContext';
import smartReducer from '../../library/Core/SmartReducer';
import { DispatchEvent, State } from '../../library/Core/SmartTypes';
import AlumniCard from './controls/AlumniCard';
import AlumniDirectoryHeader from './controls/AlumniDirectoryHeader';
import FilterAndClear from './controls/FilterAndClear';
import FiltersApplied from './controls/FiltersApplied';

const Directory = () => {
    const { id, pageName } = useParams();

    const [state, dispatch] = useImmerReducer<State, DispatchEvent>(smartReducer, {
        flags: { isDataLoading: true },
    } as any);

    const { formConfig, data, domain, internal } = useLoaderData() as State;

    useEffect(() => {
        dispatch({
            type: 'DATA_INIT',
            payload: { formConfig, data, domain, internal },
        });
    }, []);

    return (
        <SmartContext.Provider value={{ state, dispatch }}>
            <AlumniDirectoryHeader />
            <div className='d-flex flex-wrap justify-content-center'>
                <div className='col-md-3 pt-2 px-2'>
                    <FilterAndClear />
                    <PageBuilder pageName={'directory'} id={parseInt(id as string)} />
                </div>
                <div className='col-md-8'>
                    <div className='px-2 pt-3'>
                        <FiltersApplied />
                    </div>
                    <div className='d-flex flex-wrap'>
                        <AlumniCard />
                        <AlumniCard />
                        <AlumniCard />
                        <AlumniCard />
                        <AlumniCard />
                        <AlumniCard />
                    </div>
                </div>
            </div>
        </SmartContext.Provider>
    );
};

export default Directory;
