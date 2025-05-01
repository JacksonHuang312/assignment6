import { useNavigate } from "react-router-dom";
import "./LoginView.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

function LoginView() {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/movies');
    };

    return (
        <div className="login-view">
            <Header />
            <div className="login-container">
                <div className="login-box">
                    <h2>Login to Continue</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <input type="email" placeholder="Email" required />
                        </div>
                        <div className="input-group">
                            <input type="password" placeholder="Password" required />
                        </div>
                        <button type="submit" className="login-button">Login</button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default LoginView;