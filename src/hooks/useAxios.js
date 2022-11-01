function useAxios(api) {
  const API = async (params = [], config = {}) => {
    const { onSuccess } = config;
    const { result } = await api(...params);
    const { data, status } = result;

    if (status >= 200 && status < 300) {
      if (onSuccess) {
        await onSuccess(data);
      }
    }
  };

  return API;
}

export default useAxios;
