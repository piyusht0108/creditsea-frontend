import { useState } from "react";
import { useNavigate, Outlet } from "react-router";
import "./index.css";

function Header(props) {
  const [userType, setUserType] = useState("");
  const location = window.location.href;
  const path = location.split("/");
  const selectedUserType = path[3];
  const navigate = useNavigate();
  const onUserTypeChange = (event) => {
    const selectedUserType = event.target.value;
    if (selectedUserType === "admin") {
      navigate("/admin");
    }
    if (selectedUserType === "verifier") {
      navigate("/verifier");
    }
    if (selectedUserType === "user") {
      navigate("/");
    }
    setUserType(event.target.value);
  };

  return (
    <>
      <header className="header-container">
        <div className="header-left">
          <h1 className="app-heading">Credit App</h1>
        </div>
        {selectedUserType === "" && (
          <div className="header-center">
            <ul className="header-user-list">
              <li className="list-items">
                <img
                  src="https://res.cloudinary.com/dj63dzhgu/image/upload/v1746857991/Vector_gchz5d.png"
                  className="header-logo "
                  alt="home-logo"
                />
                <a href="/" className="header-link">
                  Home
                </a>
              </li>
              <li className="list-items">
                <img
                  src="https://res.cloudinary.com/dj63dzhgu/image/upload/v1746858250/tabler_currency-naira_wncnb2.png"
                  className="header-logo "
                  alt="payments-logo"
                />
                <a href="/" className="header-link">
                  Payments
                </a>
              </li>
              <li className="list-items">
                <img
                  src="https://res.cloudinary.com/dj63dzhgu/image/upload/v1746858324/Vector_2_oxlrzq.png"
                  className="header-logo "
                  alt="budget-logo"
                />
                <a href="/" className="header-link">
                  Budget
                </a>
              </li>
              <li className="list-items">
                <img
                  src="https://res.cloudinary.com/dj63dzhgu/image/upload/v1746858377/Vector_3_dm3jzt.png"
                  className="header-logo "
                  alt="card-logo"
                />
                <a href="/" className="header-link">
                  Card
                </a>
              </li>
            </ul>
          </div>
        )}
        <div className="header-right">
          <ul className="header-user-list">
            <li>
              <img
                src="https://res.cloudinary.com/dj63dzhgu/image/upload/v1746858487/Vector_4_dfalcx.png"
                className="header-logo "
                alt="notification"
              />
            </li>
            <li>
              <img
                src="https://res.cloudinary.com/dj63dzhgu/image/upload/v1746858650/Vector_5_ymmmyg.png"
                className="header-logo "
                alt="comments"
              />
            </li>
            <li>
              <img
                src="https://res.cloudinary.com/dj63dzhgu/image/upload/v1746858704/account_circle_b0q2bt.png"
                className="header-logo "
                alt="profile"
              />
            </li>
            <li>
              <select
                onChange={onUserTypeChange}
                value={selectedUserType}
                className="header-select"
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
                <option value="verifier">Verifier</option>
              </select>
            </li>
          </ul>
        </div>
      </header>
      <Outlet />
    </>
  );
}

export default Header;
