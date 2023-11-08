const getApiError = (err) => {
	const msg = err?.response?.data?.message;
	return msg;
};

export default getApiError;
