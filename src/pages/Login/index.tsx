import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { Image } from 'react-bootstrap';

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = () => navigate('/home/all');

  return (
    <div
    data-testid="root-login"
      style={{
        backgroundImage: "url('./assets/imgs/background-login.jpg')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        opacity: '0.9',
      }}
    >
      <div className="container vh-100 d-flex justify-content-center align-items-center">
        <form className="p-5" data-testid="form-login" style={{
          borderRadius: '4%',
          background: 'rgba(1, 1, 1, 0.2)'
        }}>
          <div
            className="mb-5"
            style={{
              fontFamily: 'Roboto',
              lineHeight: '34.09px',
              textAlign: 'center',
              fontSize: '36px',
              color: '#5B7EEA',
              fontWeight: '700',
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: '15px' }}>
              <Image src="./assets/imgs/movie.png" alt="movie" />
            </div>
            <span className="mt-50">
              TAKE A<br />
            </span>
            <span>MOVIE</span>
          </div>
          <div className="mb-3">
            <input
              type="text"
              data-testid="form-email"
              className="form-control"
              placeholder="E-mail"
              style={{ background: 'none', border: '1px solid #5B7EEA', color: '#fff' }}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              data-testid ="form-password"
              className="form-control"
              placeholder="Password"
              style={{ background: 'none', border: '1px solid #5B7EEA', color: '#fff' }}
            />
          </div>
          <div className="mb-3 d-grid mt-5">
            <Button
              variant="primary"
              style={{
                fontFamily: 'Roboto',
                lineHeight: '21.09px',
                backgroundColor: '#5B7EEA',
                color: '#000',
                fontWeight: '700',
                border: 'none',
              }}
              onClick={handleSubmit}
            >
              Go to my movies!
            </Button>
            <span className="mt-1" style={{ textAlign: 'right' }}>
              <a
                href=""
                style={{
                  textDecoration: 'none',
                  color: '#fff',
                  fontSize: '0.9rem',
                  fontFamily: 'Roboto',
                  fontWeight: '100',
                }}
              >
                Create an account
              </a>
            </span>
          </div>
        </form>
      </div>
      </div>
  );
};

export default Login;
