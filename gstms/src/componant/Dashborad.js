import React from 'react';

function App() {
  return (
    <div className="container">
      <header className="header">
        <div className="logo">
          <img src="https://i.ibb.co/pR9Jq88/mg.png" alt="MG Logo" />
          <h1>Esparse Matrix</h1>
        </div>
        <div className="search">
          <input type="text" placeholder="Search" />
        </div>
        <div className="notifications">
          <span className="notification bell">
            <i className="fas fa-bell"></i>
          </span>
          <span className="notification chat">
            <i className="fas fa-comments"></i>
          </span>
          <div className="profile">
            <img src="https://i.ibb.co/tJ6g573/profile-pic.png" alt="Profile Picture" />
          </div>
        </div>
      </header>
      <main className="main">
        <aside className="sidebar">
          <ul>
            <li>
              <i className="fas fa-tachometer-alt"></i>
              <span>Dashboard</span>
            </li>
            <li>
              <i className="fas fa-file-invoice"></i>
              <span>GST Filling</span>
            </li>
            <li>
              <i className="fas fa-receipt"></i>
              <span>Invoice</span>
            </li>
            <li>
              <i className="fas fa-credit-card"></i>
              <span>Payment</span>
            </li>
            <li>
              <i className="fas fa-file-alt"></i>
              <span>Report</span>
            </li>
            <li>
              <i className="fas fa-question-circle"></i>
              <span>Support</span>
            </li>
            <li>
              <i className="fas fa-cog"></i>
              <span>Setting</span>
            </li>
            <li>
              <i className="fas fa-sign-out-alt"></i>
              <span>Log out</span>
            </li>
          </ul>
        </aside>
        <section className="content">
          <div className="greeting">
            <h2>Hello Shubham,</h2>
          </div>
          <div className="cards">
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
              <p>GSTR-3B</p>
              <p>(Pending)</p>
              <p>GSTR-1</p>
              <p>(Due on 10 Aug 2024)</p>
              <i className="fas fa-money-bill-wave"></i>
            </div>
            <div className="card">
              <h3>Payments</h3>
              <p>1011</p>
              <p>(Completed)</p>
              <p>1080</p>
              <p>(Pending Amount)</p>
              <i className="fas fa-credit-card"></i>
            </div>
            <div className="card">
              <h3>Refunds</h3>
              <p>2000</p>
              <p>(Processed)</p>
              <p>108</p>
              <p>(Pending Amount)</p>
              <i className="fas fa-credit-card"></i>
            </div>
          </div>
          <div className="recent-transactions">
            <h3>Recent Transaction</h3>
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
                <tr>
                  <td>
                    Ananya Sharma
                  </td>
                  <td>23/07/24</td>
                  <td>5 pm</td>
                  <td>2000 rs</td>
                  <td><span className="status succeeded">Succeeded</span></td>
                </tr>
                <tr>
                  <td>
                    Pankaj Sahu
                  </td>
                  <td>23/07/24</td>
                  <td>4:58 pm</td>
                  <td>4500 rs</td>
                  <td><span className="status succeeded">Succeeded</span></td>
                </tr>
                <tr>
                  <td>
                    ARC
                  </td>
                  <td>23/07/24</td>
                  <td>4:15 pm</td>
                  <td>4000 rs</td>
                  <td><span className="status succeeded">Succeeded</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
