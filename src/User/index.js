import Header from "../Header";
import { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import Popup from "reactjs-popup";
import { FaSearch, FaSortAmountUp, FaFilter } from "react-icons/fa";
import "./index.css";

function User() {
  const [loans, setLoans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    userId: 3,
    fullName: "",
    loanAmount: "",
    loanTenure: "",
    reason: "",
    employmentStatus: "",
    employmentAddress1: "",
    employmentAddress2: "",
    termsAccepted: false,
  });
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    const submitData = async () => {
      try {
        const response = await fetch("https://creditsea-backend-vt36.onrender.com/submitLoan", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        if (response.ok) {
          alert("Loan application submitted successfully!");
        } else {
          alert("Error submitting loan application.");
        }
      } catch (error) {
        console.error("Error submitting data:", error);
      }
    };
    submitData();
    alert("Application submitted successfully!");
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://creditsea-backend-vt36.onrender.com/getUserLoans?user_id=3",
          {
            method: "GET",
          }
        );
        const data = await response.json();
        if (response.ok) {
          setLoans(data);
          setLoading(false);
        }
        
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <header>
        <Header />
      </header>

      <div className="user-container">
        <div className="user-header">
          <div className="user-header-left">
            <div className="rectangle">
              <span className="">
                <img
                  src="https://res.cloudinary.com/dj63dzhgu/image/upload/v1746888289/Vector_6_x452ev.png"
                  alt="currency"
                />
              </span>
            </div>
            <div>
              <div className="">DEFICIT</div>
              <div className="">₹ 0.0</div>
            </div>
          </div>
          <Popup
            trigger={<button className="get-loan-btn"> Get a Loan </button>}
            modal
            nested
          >
            {(close) => (
              <div className="modal">
                <div className="header"> Apply For a Loan </div>
                <form className="form-el" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <div className="input-group">
                      <label htmlFor="name" className="form-label">
                        Full name as it appears on bank account
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Full name as it appears on bank account"
                        className="form-input"
                        value={formData.fullName}
                        onChange={handleChange}
                        name="fullName"
                        required
                      />
                    </div>
                    <div className="input-group">
                      <label htmlFor="amount" className="form-label">
                        How much do you need?
                      </label>
                      <input
                        type="text"
                        id="amount"
                        name="loanAmount"
                        value={formData.loanAmount}
                        onChange={handleChange}
                        placeholder="How much do you need?"
                        className="form-input"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <label htmlFor="tenure" className="form-label">
                        Loan Tenure(in months)
                      </label>
                      <input
                        id="tenure"
                        type="text"
                        name="loanTenure"
                        value={formData.loanTenure}
                        onChange={handleChange}
                        placeholder="Loan Tenure(in months)"
                        className="form-input"
                        required
                      />
                    </div>
                    <div className="input-group">
                      <label htmlFor="status" className="form-label">
                        Employment Status
                      </label>
                      <input
                        type="text"
                        id="status"
                        name="employmentStatus"
                        value={formData.employmentStatus}
                        onChange={handleChange}
                        placeholder="Employment Status"
                        className="form-input"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <label htmlFor="reason" className="form-label">
                        Reason for loan
                      </label>
                      <textarea
                        id="reason"
                        type="text"
                        name="reason"
                        value={formData.reason}
                        onChange={handleChange}
                        placeholder="Reason for loan"
                        className="reason"
                      ></textarea>
                    </div>
                    <div>
                      <div className="input-group">
                        <label htmlFor="address" className="form-label">
                          Employment Address
                        </label>
                        <input
                          type="text"
                          id="employment-address-1"
                          name="employmentAddress1"
                          value={formData.employmentAddress1}
                          onChange={handleChange}
                          placeholder="Employment Status"
                          className="form-input"
                          required
                        />
                      </div>
                      <div className="input-group">
                        <label htmlFor="address" className="form-label">
                          Employment Address
                        </label>
                        <input
                          type="text"
                          id="employment-address-2"
                          name="employmentAddress2"
                          value={formData.employmentAddress2}
                          onChange={handleChange}
                          placeholder="Employment Status"
                          className="form-input"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="terms-and-conditions">
                      <input
                        type="checkbox"
                        id="terms"
                        name="termsAccepted"
                        checked={formData.termsAccepted}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="terms" className="form-label">
                        I have read the important information and accept that by
                        completing the application I will be bound by the terms
                      </label>
                    </div>
                    <div className="terms-and-conditions">
                      <input type="checkbox" id="conditions" />
                      <label htmlFor="conditions" className="form-label">
                        Any personal and credit information obtained may be
                        disclosed from time to time to other lenders, credit
                        bureaus or other credit reporting agencies.
                      </label>
                    </div>
                  </div>
                  <div className="actions">
                    <button className="button" type="submit">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            )}
          </Popup>
        </div>
        <div className="user-category-buttons">
          <button className="category-buttons left-category-button">
            Borrow Cash
          </button>
          <button className="category-buttons">Transact</button>
          <button className="category-buttons right-category-button">
            Deposit Cash
          </button>
        </div>
        <div className="user-search-bar">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search for loans"
            className="search-bar"
          />
        </div>
        {loading && (
          <div>
            <ClipLoader
              cssOverride={{
                display: "block",
                margin: "0 auto",
                borderColor: "blue",
              }}
              loading={loading}
              size={100}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        )}
        {!loading && (
          <div className="user-applied-loans">
            <div className="user-applied-loans-header">
              <div className="">
                <h2 className="">Applied Loans</h2>
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
                    <th className="loan-officer-name">Loan Officer</th>
                    <th>Amount</th>
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
                        <td className="loan-officer-name">{loan.full_name}</td>
                        <td className="loan-amount">{loan.loan_amount}</td>
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
        )}
      </div>
    </>
  );
}

export default User;
