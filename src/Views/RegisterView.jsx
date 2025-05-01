import { useNavigate } from "react-router-dom";
import "./RegisterView.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Register() {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/movies');
    };

    return (
        <div className="Register-view">
            <Header />
            <div className="Register-container">
                <div className="Register-box">
                    <h2>Register to Continue</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="Register-group">
                            <input type="text" placeholder="First Name" required />
                        </div>
                        <div className="Register-group">
                            <input type="text" placeholder="Last Name" required />
                        </div>
                        <div className="Register-group">
                            <input type="email" placeholder="Email" required />
                        </div>
                        <div className="Register-group">
                            <input type="password" placeholder="Password" required />
                        </div>
                        <div className="Register-group">
                            <input type="password" placeholder="Re-enter Password" required />
                        </div>
                        <button type="submit" className="Register-button">Register</button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Register;