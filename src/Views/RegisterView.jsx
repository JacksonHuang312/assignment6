import { useNavigate } from "react-router-dom";
import "./RegisterView.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Register() {
    const navigate = useNavigate();

    const registerInputs = [
        { type: "text", placeholder: "First Name" },
        { type: "text", placeholder: "Last Name" },
        { type: "email", placeholder: "Email" },
        { type: "password", placeholder: "Password" },
        { type: "password", placeholder: "Re-enter Password" }
    ];

    const genres = [
        "Sci-Fi", "Thriller", "Adventure", "Family", "Animation",
        "Action", "History", "Fantasy", "Horror", "Comedy"
    ];

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
                        {registerInputs.map((input, index) => (
                            <div className="Register-group" key={index}>
                                <input type={input.type} placeholder={input.placeholder} required />
                            </div>
                        ))}
                        <div className="Genre-select">
                            <h1>Select at least 5 Genres</h1>
                            {genres.map(genre => (
                                <div className="Genre-select-group" key={genre}>
                                    <input type="checkbox" id={genre} name={genre} value={genre} />
                                    <label htmlFor={genre}>{genre}</label>
                                </div>
                            ))}
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