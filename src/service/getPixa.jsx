import axios from 'axios';

export const getPixaImages = async (query, apiKey) => {
	const url = `https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(query)}&image_type=photo&per_page=12&safesearch=true`;
	const { data } = await axios.get(url);
	return data?.hits || [];
};
