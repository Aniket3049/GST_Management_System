import React, { useState } from 'react';
import './Dash.css';
function Dashborad() {
  const [transactions, setTransactions] = useState([
    { name: 'Ananya Sharma', date: '23/07/24', time: '5 pm', amount: '2000 rs', status: 'Succeeded' },
    { name: 'Pankaj Sahu', date: '23/07/24', time: '4:58 pm', amount: '4500 rs', status: 'Succeeded' },
    { name: 'ARC', date: '23/07/24', time: '4:15 pm', amount: '4000 rs', status: 'Succeeded' },
  ]);

  return (
    <div className="contain">
      <div className="sidebar">
        <div className="logo">
          <img src="./logo2.jpeg" alt="Logo" />
        </div>
        <ul>
          <li><img src='./dash.png' alt="Dashboard"/></li>
          <li>GST Filing</li>
          <li>Invoice</li>
          <li>Payment</li>
          <li>Report</li>
          <li>Support</li>
          <li>Setting</li>
          <li>Log out</li>
        </ul>
      </div>
      <div className="content">
        <h1>Hello Shubham,</h1>
        <div className="card-container">
          <div className="card">
            <h3>Total Liability</h3>
            <p>XXXXX</p>
          </div>
          <div className="card">
            <h3>Input Tax Credit</h3>
            <p>XXXXX</p>
          </div>
          <div className="card">
            <h3>Net Tax Payable</h3>
            <p>XXXXX</p>
          </div>
          <div className="card">
            <h3>GST Filings</h3>
            <p>GSTR-3B (Pending)</p>
            <p>GSTR-1 (Due on 10 Aug 2024)</p>
          </div>
          <div className="card">
            <h3>Payments</h3>
            <p>1011 (Completed)</p>
            <p>1080 (Pending Amount)</p>
          </div>
          <div className="card">
            <h3>Refunds</h3>
            <p>2000 (Processed)</p>
            <p>108 (Pending Amount)</p>
          </div>
        </div>
        <h2>Recent Transaction</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.name}>
                <td>
                  <img src="https://via.placeholder.com/30" alt={transaction.name} />
                  {transaction.name}
                </td>
                <td>{transaction.date}</td>
                <td>{transaction.time}</td>
                <td>{transaction.amount}</td>
                <td className={transaction.status === 'Succeeded' ? 'succeeded' : 'failed'}>
                  {transaction.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashborad;
