import axios from 'axios';

const getConfigService = () => {
    return axios.get(`${process.env.REACT_APP_API_URL}/ef-config`);
}

const configAPI = {getConfigService};
export default configAPI;