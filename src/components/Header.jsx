import './Header.css';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };
  const handleRegister = () => {
    navigate('/register');
  }

  return (
    <header className="header">
      <h1 className="title">Fentstreams</h1>
      <div>
        <div className="buttons">
          <div>
            <button className="login-button" onClick={handleLogin}>Login</button>
          </div>
          <div>
            <button className="register-button" onClick={handleRegister}>Register</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;