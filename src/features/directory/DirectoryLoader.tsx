import axios from 'axios';
import { convertDomainArrayToMap } from '../../library/Core/SmartFunctions';

const DirectoryLoader = (params: any) => {
    const URL_FOR_CONFIG = `http://localhost:3007/LISTING/jobListing`;
    const URL_FOR_FORM_DATA = `http://localhost:3007/alumni/directory`;
    const URL_FOR_DOMAIN_DATA = `http://localhost:3007/domain`;

    const state: any = {};

    // Note: Need to return promise and await in the loader
    return Promise.all([axios.get(URL_FOR_CONFIG), axios.get(URL_FOR_FORM_DATA), axios.get(URL_FOR_DOMAIN_DATA)]).then((values) => {
        state.formConfig = values[0].data;
        state.data = values[1].data;
        state.domain = convertDomainArrayToMap(values[2].data);
        state.internal = { gridState: [] };
        return state;
    });
};

export default DirectoryLoader;
