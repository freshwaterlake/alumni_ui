import { useImmerReducer } from 'use-immer';
import PageBuilder from '../../library/Builders/PageBuilder';
import { SmartContext } from '../../library/Core/SmartContext';
import smartReducer from '../../library/Core/SmartReducer';
import { DispatchEvent, State } from '../../library/Core/SmartTypes';

const Demo = () => {
    const [state, dispatch] = useImmerReducer<State, DispatchEvent>(smartReducer, {
        domain: new Map(),
        flags: { isDataLoading: false },
    } as State);

    return (
        <SmartContext.Provider value={{ state, dispatch }}>
            {/* <div className='row'>
                <div className='bg-light col-3'></div>
                <div className='bg-white col-6'> */}
            <PageBuilder pageName='STUDENT' id={1000} />
            {/* </div>
                <div className='bg-light col-3'></div>
            </div>
            <div className='bg-light'></div> */}
        </SmartContext.Provider>
    );
};

export default Demo;
