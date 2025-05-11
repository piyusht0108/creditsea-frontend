import { CgProfile } from "react-icons/cg";
import { AiFillDashboard } from "react-icons/ai";
import { HiDocumentReport } from "react-icons/hi";
import { FaMoneyBill,FaBalanceScale,FaRegCreditCard } from "react-icons/fa";
import { IoPersonRemoveSharp,IoBarChartSharp } from "react-icons/io5";
import { BsFillPersonCheckFill } from "react-icons/bs";
import './index.css'

function Dashboard() {
    return (
        <div className="dashboard-conatiner">
            <div className="user-details">
                <CgProfile className="user-logo" />
                <h1 className="user-name">John Doe</h1>
            </div>
            <div>
                <nav className="nav">
                    <ul className="nav-list">
                        <li className="nav-list-item"><AiFillDashboard className="nav-logo" /><a className="nav-link" href="#dashboard">Dashboard</a></li>
                        <li className="nav-list-item"><IoPersonRemoveSharp className="nav-logo" /><a className="nav-link" href="#borrowers">Borrowers</a></li>
                        <li className="nav-list-item"><FaMoneyBill className="nav-logo" /><a className="nav-link" href="#loans">Loans</a></li>
                        <li className="nav-list-item"><BsFillPersonCheckFill className="nav-logo" /><a className="nav-link" href="#repayments">Repayments</a></li>
                        <li className="nav-list-item"><FaBalanceScale className="nav-logo"/><a className="nav-link" href="#loanParameters">Loan Parameters</a></li>
                        <li className="nav-list-item"><FaRegCreditCard className="nav-logo" /><a className="nav-link" href="#accounting">Accounting</a></li>
                        <li className="nav-list-item"><IoBarChartSharp className="nav-logo" /><a className="nav-link" href="#reports">Reports</a></li>
                        <li className="nav-list-item"><HiDocumentReport className="nav-logo" /><a className="nav-link" href="#collateral">Collaterals</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Dashboard;