import axios from 'axios';
import { convertDomainArrayToMap } from '../../library/Core/SmartFunctions';

const DashboardLoader = (params: any) => {
    // const URL_FOR_CONFIG = `http://localhost:3009/api/v1/pageConfig/${params.pageName}`;
    const URL_FOR_CONFIG = `http://localhost:3007/config/dashboard`;
    const URL_FOR_ACTIVITIES_CONFIG = `http://localhost:3009/api/v1/appConfig/ACTIVITY_CONFIG`;
    const URL_FOR_FORM_DATA = `http://localhost:3007/activities/${params.id}`;
    const URL_FOR_DOMAIN_DATA = `http://localhost:3007/domain`;

    const state: any = {};

    // Note: Need to return promise and await in the loader
    return Promise.all([
        axios.get(URL_FOR_CONFIG),
        axios.get(URL_FOR_FORM_DATA),
        axios.get(URL_FOR_DOMAIN_DATA),
        axios.get(URL_FOR_ACTIVITIES_CONFIG),
    ]).then((values) => {
        state.formConfig = values[0].data;
        state.data = values[1].data;
        state.domain = convertDomainArrayToMap(values[2].data);
        state.internal = { gridState: [], activitiesConfig: values[3].data };
        return state;
    });
};

export default DashboardLoader;
