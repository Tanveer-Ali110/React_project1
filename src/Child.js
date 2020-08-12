import React from 'react';
import './App.css';

function Child() {
  return (
    <div className ="container">
        <h1 className="text-center">Expense Tracker</h1>
        <hr/>

    <div className = "container-element">
        <h3>Your Balance<br/> $250</h3>

        <div className= "element-box">
            <h3>INCOME <br/> $300</h3>
            <h3>EXPENSE <br/> $200</h3>
        </div>
    </div>
    
    <div className = "container-element">
        <h1>Add/New Transaction</h1>
        <hr/>
        <br/>
        <form className="transection-form">
            <label>
                Ener Discription <br/>
                <input type = "text" required/>
            </label>
            <br/>
            <label>
                Ener Amount <br/>
                <input type = "number" required/>
            </label>
            <br/>
            <input type="submit" value="Add Transaction"/>
        </form>

    </div>

    <div className = "container-element">

    </div>
    
    </div>
  );
}

export default Child;
