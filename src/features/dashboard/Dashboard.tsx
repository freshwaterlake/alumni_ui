import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { useImmerReducer } from 'use-immer';
import { SmartContext } from '../../library/Core/SmartContext';
import smartReducer from '../../library/Core/SmartReducer';
import { DispatchEvent, State } from '../../library/Core/SmartTypes';
import ActivityControl from './controls/ActivityControl';
import ActivityGroupControl from './controls/ActivityGroupControl';

const Dashboard = () => {
    const [showDetailForGroup, setShowDetailForGroup] = useState();

    const [state, dispatch] = useImmerReducer<State, DispatchEvent>(smartReducer, {
        flags: { isDataLoading: true },
    } as any);

    const { formConfig, data, domain, internal } = useLoaderData() as State;
    const customControls = { ACTIVITY_GROUP: ActivityGroupControl };

    const handleBackToSummary = () => setShowDetailForGroup(undefined);

    useEffect(() => {
        dispatch({
            type: 'DATA_INIT',
            payload: { formConfig, data, domain, internal, customControls },
        });
    }, []);

    return (
        <SmartContext.Provider value={{ state, dispatch }}>
            <div className='main flex-1'>
                <section className='milestoneSection'>
                    <div className='container max-1140 px-lg-0'>
                        <div className='row'>
                            <div className='col-md-12 mb-4'>
                                <div className='white-block m-w-90-parent white-block-notopborderradius h-100'>
                                    <div className='m-w-90 max-1010 mx-auto'>
                                        <div className='d-flex justify-content-between align-items-start py-4'>
                                            <div className='welcome-title' data-aos='fade-right'>
                                                <h1>Welcome to </h1>
                                                <p>We recommend below activities to get you started.</p>
                                            </div>
                                            <div className='dashboard smart-scroll' data-aos='fade-left'>
                                                <div className='d-flex flex-wrap'>
                                                    {showDetailForGroup && (
                                                        <button className='btn-darkblue text-nowrap mx-3' onClick={handleBackToSummary}>
                                                            <span>Back to Summary</span>
                                                        </button>
                                                    )}
                                                    <button className='btn-green text-nowrap'>
                                                        <span>Go to Dashboard</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        {!showDetailForGroup && <ActivityGroupControl onCompleteNowClick={setShowDetailForGroup} />}
                                        {showDetailForGroup && <ActivityControl selectedGroup={showDetailForGroup} />}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </SmartContext.Provider>
    );
};

export default Dashboard;
