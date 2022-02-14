import { AxiosResponse } from 'axios';
import axios from '../configs/HttpRequest';

const getAll = async(limit: number, offset: number):Promise<AxiosResponse> => {
    const response: AxiosResponse = await axios.get(`pokemon?limit=${limit}&offset=${offset}`);
    return response;
};

const get = async(path: string):Promise<AxiosResponse> => {
    const response: AxiosResponse = await axios.get(`${path}`);
    return response;
};

const PokemonService = {
    getAll,
    get
};
export default PokemonService;