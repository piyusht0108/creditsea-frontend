import { useState, useEffect } from "react";
import {
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  BarChart,
  Bar,
  Tooltip,
  Legend,
} from "recharts";
import { FaUsers } from "react-icons/fa6";
import { IoPersonRemoveSharp } from "react-icons/io5";
import { FaSortAmountUp, FaFilter } from "react-icons/fa";
import Header from "../Header";
import Dashboard from "../Dashboard";
import "./index.css";

function Admin() {
  const [loans, setLoans] = useState([]);
  const [monthlyLoans, setMonthlyLoans] = useState(0);
  const [activeLoans, setActiveLoans] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://creditsea-backend-vt36.onrender.com/activeloans");
        const data = await response.json();
        if (response.ok) {
          setActiveLoans(data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://creditsea-backend-vt36.onrender.com/monthlyloans");
        const data = await response.json();
        if (response.ok) {
          setMonthlyLoans(data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://creditsea-backend-vt36.onrender.com/getloans", {
          method: "GET",
        });
        const data = await response.json();
        if (response.ok) {
          setLoans(data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <Header />
      <div className="admin-container">
        <Dashboard />
        <div className="admin-content">
          <h1 className="admin-header">Dashboard</h1>
          <div className="info-cards-container">
            <div className="info-card">
              <div className="info-card-icon-container">
                <FaUsers className="info-card-icon" />
              </div>
              <div className="info-card-text-container">
                <p className="info-card-value">200</p>
                <p className="info-card-text">ACTIVE USERS</p>
              </div>
            </div>
            <div className="info-card">
              <div className="info-card-icon-container">
                <IoPersonRemoveSharp className="info-card-icon" />
              </div>
              <div className="info-card-text-container">
                <p className="info-card-value">100</p>
                <p className="info-card-text">BORROWERS</p>
              </div>
            </div>
            <div className="info-card">
              <div className="info-card-icon-container">
                <FaUsers className="info-card-icon" />
              </div>
              <div className="info-card-text-container">
                <p className="info-card-value">550,000</p>
                <p className="info-card-text">CASH DISBURSED</p>
              </div>
            </div>
            <div className="info-card">
              <div className="info-card-icon-container">
                <FaUsers className="info-card-icon" />
              </div>
              <div className="info-card-text-container">
                <p className="info-card-value">1,000,000</p>
                <p className="info-card-text">CASH RECEIVED</p>
              </div>
            </div>
            <div className="info-card">
              <div className="info-card-icon-container">
                <FaUsers className="info-card-icon" />
              </div>
              <div className="info-card-text-container">
                <p className="info-card-value">450,0000</p>
                <p className="info-card-text">SAVINGS</p>
              </div>
            </div>
            <div className="info-card">
              <div className="info-card-icon-container">
                <FaUsers className="info-card-icon" />
              </div>
              <div className="info-card-text-container">
                <p className="info-card-value">30</p>
                <p className="info-card-text">REPAID LOANS</p>
              </div>
            </div>
          </div>
          <div className="user-applied-loans">
            <div className="user-applied-loans-header">
              <div className="">
                <h2 className="">Recent Loans</h2>
              </div>
              <div className="">
                <button className="sort-filter-button">
                  <FaSortAmountUp />
                  <span className="">Sort</span>
                </button>
                <button className="sort-filter-button">
                  <FaFilter />
                  <span className="">Filter</span>
                </button>
              </div>
            </div>
            <div>
              <table>
                <thead>
                  <tr>
                    <th className="loan-officer-name">Reason</th>
                    <th>Customer Name</th>
                    <th>Date Applied</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {loans.map((loan) => {
                    let loanDate = loan.created_at.split(" ")[0];
                    let loanTime = loan.created_at.split(" ")[1];
                    return (
                      <tr key={loan.loan_id} className="table-row">
                        <td className="loan-officer-name">{loan.reason}</td>
                        <td className="loan-amount">{loan.full_name}</td>
                        <td className="loan-date">
                          {loanDate}
                          <br />
                          {loanTime}
                        </td>
                        <td className="loan-status">{loan.loan_status}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div className="monthly-loans-chart-container">
            <h1>Loans Released Monthly</h1>
            <AreaChart
              width={730}
              height={250}
              data={monthlyLoans}
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
              }}
            >
              <XAxis dataKey="months" />
              <YAxis />
              <Area dataKey="loan_count" stroke="#8884d8" fill="green" />
              <Tooltip />
            </AreaChart>
          </div>
          <div className="monthly-loans-chart-container">
            <h1>Total Outstanding Open Loans - Monthly</h1>
            <BarChart width={730} height={250} data={activeLoans}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="loan_count" fill="#8884d8" />
            </BarChart>
          </div>
        </div>
      </div>
    </>
  );
}
export default Admin;
