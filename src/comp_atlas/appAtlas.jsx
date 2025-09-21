import React, { useEffect, useState } from 'react'
import AtlasInfo from './atlasInfo';
import AtlasInput from './atlasInput';
import axios from 'axios';

const AppAtlas = () => {
    const [infoItem, setInfoItem] = useState({});
    useEffect(() => {
        doApi("Israel");
    }, []);
    const doApi = async (_country) => {
        setInfoItem({})
        let url = "https://restcountries.com/v3.1/name/" + _country;
        try {
            let response = await axios.get(url);
            console.log(response);
            setInfoItem(response.data[0])
        } catch (error) {
            console.log(error);
            alert("There is a problem, or the country not found")
        }

    }

    const doApiCountryCode = async (_countryCode) => {
        setInfoItem({})
        let url = "https://restcountries.com/v3.1/alpha/" + _countryCode; try {
            let response = await axios.get(url);
            console.log(response);
            setInfoItem(response.data[0])
        } catch (error) {
            console.log(error);
            alert("There is a problem, or the country not found")
        }
    }
    return (
        <div className="container">

            <h2>AppAtlas</h2>
            <AtlasInput doApi={doApi}></AtlasInput>
            <AtlasInfo item={infoItem} doApiCountryCode={doApiCountryCode}></AtlasInfo>
        </div>
    )
}

export default AppAtlas