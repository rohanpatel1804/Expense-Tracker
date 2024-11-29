import React from 'react';
import './To.css';

function To() {
  const [Data, setData] = React.useState({});
  const [Array, setArray] = React.useState([]);
  const [updateIdx, setUpdateIdx] = React.useState();

  const handleChange = (e, type) => {
    if (type === 'reason') {
      setData({ ...Data, reason: e.target.value });
    } else if (type === 'amount') {
      setData({ ...Data, amount: e.target.value });
    } else if (type === 'Credit/debit') {
      setData({ ...Data, credit: e.target.value });
    }
  };

  const handleClick = () => {
    setArray([...Array, Data]);
    setData({
      reason: '',
      amount: '',
      credit: '',
    });
  };

  const deletehandleClick = (idx) => {
    const deletearray = [...Array];
    deletearray.splice(idx, 1);
    setArray(deletearray);
  };

  const updateClick = (idx) => {
    setData(Array[idx]);
    setUpdateIdx(idx);
  };

  const handleUpClick = () => {
    if (updateIdx === undefined || updateIdx < 0 || updateIdx >= Array.length) {
      alert("No valid item selected for update.");
      return;
    }
  
    const updatedArray = [...Array];
    updatedArray[updateIdx] = {
      reason: Data.reason,
      amount: Data.amount,
      credit: Data.credit,
    };
    setArray(updatedArray);
    setData({
      reason: '',
      amount: '',
      credit: '',
    });
    setUpdateIdx(undefined); 
  };
  


  return (
    <div className="container2">
      <div className="header">
        <h1>Expense Tracker</h1>
      </div>

      <div className="form-group">
        <label>Reason:</label>
        <input type="text" value={Data.reason} onChange={(e) => handleChange(e, 'reason')} />
        <label>Amount:</label>
        <input type="text" value={Data.amount} onChange={(e) => handleChange(e, 'amount')} />
        <label>Credit/Debit:</label>
        <input type="text" value={Data.credit} onChange={(e) => handleChange(e, 'Credit/debit')} />
      </div>

      <div className="button-group">
        <input className='btn btn-outline-dark' type="button" value="Submit" onClick={handleClick} />
        <button className='btn btn-outline-dark' onClick={handleUpClick}>Update</button>
      </div>

      <div className="table-header">
        <div>Reason</div>
        <div>Amount</div>
        <div>Credit/Debit</div>
      </div>

      {Array.map((val, idx) => (
        <div key={idx} className="table-row">
          <div>{val.reason}</div>
          <div>{val.amount}</div>
          <div>{val.credit}</div>
          <div>
            <button className='btn btn-outline-dark' onClick={() => deletehandleClick(idx)}>Delete</button>
            <button className='btn btn-outline-dark' onClick={() => updateClick(idx)}>Update</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default To;