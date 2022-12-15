import { useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { useImmerReducer } from 'use-immer';
import PageBuilder from '../../library/Builders/PageBuilder/PageBuilder';
import { SmartContext } from '../../library/Core/SmartContext';
import smartReducer from '../../library/Core/SmartReducer';
import { DispatchEvent, State } from '../../library/Core/SmartTypes';

const Profile = () => {
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
            <PageBuilder pageName={pageName as string} id={parseInt(id as string)} />
        </SmartContext.Provider>
    );
};

export default Profile;
