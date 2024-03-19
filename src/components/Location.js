import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Location = () => {
    const { dispatch } = useContext(AppContext);

    const changeCurrency = (currency) => {
        dispatch ({
            type: 'CHG_CURRENCY',
            payload: currency
        })
        console.log(currency);
    }

    return (
            <select className='alert alert-info' name="Location" id="Location" onChange={(event) => changeCurrency(event.target.value)}>
                <option value="£">Uk(£)</option>
                <option value="₹">India(₹)</option>
                <option value="€">Europe(€)</option>
                <option value="CAD">Canada(CAD)</option>
            </select>
    );
};

export default Location;