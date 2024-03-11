import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, expenses } = useContext(AppContext);

    const changeBudget = (val) => {
        const totalExpenses = expenses.reduce((total, item) => {
            return (total += item.cost);
        }, 0);

        if(val<totalExpenses) {
            alert("You cannot reduce the budget that is already allocated!");
        } else if(val > 20000) {
            alert("The budget cannot exceed 20000");
        } else {
            dispatch({
                type: 'SET_BUDGET',
                payload: val
            })
        }
    }

    const changeCurrency = (currency) => {
        dispatch ({
            type: 'CHG_CURRENCY',
            payload: currency
        })
        console.log(currency);
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget:</span>
            <select className="input-group-text" id="inputGroupSelect01" onChange={(event) => changeCurrency(event.target.value)}>
                <option  value="£" name="Pounds">£</option>
                <option defaultValue value="€" name="Euro">€</option>
            </select>
            <input type="number" step="10" value={budget} onInput={(event)=>changeBudget(event.target.value)} />
        </div>
    );
};

export default Budget;