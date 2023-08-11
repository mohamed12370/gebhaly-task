const { default: baseUrl } = require('../API/baseuri');

export const useGetData = async (url, param) => {
  const { data } = await baseUrl.get(url, param);
  return data;
};
