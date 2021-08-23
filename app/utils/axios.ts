import axios, { AxiosResponse } from 'axios';

async function axiosRequest(url: string, headers: object): Promise<object> {
  const response: AxiosResponse = await axios.get(url, { headers: { ...headers } });
  return response.data;
}

export default axiosRequest;
