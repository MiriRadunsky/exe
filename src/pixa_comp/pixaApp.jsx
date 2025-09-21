import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPixaImages } from '../service/getPixa';
import PixaInput from './pixaInput';
import PixaInfo from './pixaInfo'; 

const API_KEY = process.env.REACT_APP_API_PIXABAY_KEY;

const PixaApp = () => {
  const { term } = useParams();               
  const [items, setItems] = useState([]);

  useEffect(() => {
    doApi(term || 'cloud');
  }, [term]);

  const doApi = async (query) => {
    setItems([]);
    const localKey = `pixa_${query}`;
    const cached = localStorage.getItem(localKey);
    if (cached) {
      try {
        const images = JSON.parse(cached);
        setItems(images);
        return;
      } catch (e) {
       
      }
    }
    try {
      const images = await getPixaImages(query, API_KEY);
      setItems(images);
      localStorage.setItem(localKey, JSON.stringify(images));
    } catch (err) {
      console.log(err);
      alert('There was a problem fetching images');
    }
  };

  return (
    <div className="container py-4">
      <h2 className="mb-3">PixaApp</h2>
      <PixaInput onSearch={doApi} />
      <PixaInfo items={items} />
    </div>
  );
};

export default PixaApp;
