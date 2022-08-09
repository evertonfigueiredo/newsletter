import React from "react";
import { Link } from "react-router-dom";
import swal from 'sweetalert';
import AuthMiddleware from "../../authMiddleware";

function Login() {


  const [rememberSelected, setRememberSelected] = React.useState(true)

  function onSelectRemembersClick() {
    setRememberSelected({
      rememberSelected: !rememberSelected
    });
  }

  async function loginUser(credentials) {
    console.log(credentials);
    return fetch('http://localhost:8000/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
  }


  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await loginUser({
      email,
      password
    });
    console.log(response);
    if ('token' in response) {
      swal("Success", "Login realizado com sucesso!", "success", {
        buttons: false,
        timer: 2000,
      })
        .then((value) => {
          localStorage.setItem('token', response['token']);
          localStorage.setItem('user', JSON.stringify(response['user']));
          window.location.href = "/";
        });
    } else {
      swal("Failed", response.error, "error");
    }
  }

  return (
    <>
      <AuthMiddleware page="Login" />
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center p-4">
            <div className="col-md-12 col-lg-10">
              <div className="wrap d-md-flex">
                <div
                  className="img img-log"
                ></div>
                <div className="login-wrap p-4 p-md-5">
                  <div className="d-flex">
                    <div className="w-100">
                      <h3 className="mb-4">Sign In</h3>
                    </div>
                    <div className="w-100">
                      <p className="social-media d-flex justify-content-end">
                        <a
                          href="/#"
                          className="social-icon d-flex align-items-center justify-content-center"
                        >
                          <span className="fa fa-facebook"></span>
                        </a>
                        <a
                          href="/#"
                          className="social-icon d-flex align-items-center justify-content-center"
                        >
                          <span className="fa fa-twitter"></span>
                        </a>
                      </p>
                    </div>
                  </div>
                  <form className="signin-form" onSubmit={handleSubmit}>
                    <div className="form-group mb-3">
                      <label className="label" htmlFor="name">
                        Useremail
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="E-mail"
                        id="email"
                        name="email"
                        onChange={e => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label className="label" htmlFor="password">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        id="password"
                        name="password"
                        onChange={e => setPassword(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <button
                        type="submit"
                        className="form-control btn btn-primary rounded submit px-3"
                      >
                        Sign In
                      </button>
                    </div>
                    <div className="form-group d-md-flex">
                      <div className="w-50 text-left">
                        <label className="checkbox-wrap checkbox-primary mb-0">
                          Remember Me
                          <input type="checkbox" id="checkbox" onClick={() => onSelectRemembersClick()}
                            defaultChecked={rememberSelected} />
                          <span className="checkmark"></span>
                        </label>
                      </div>
                      <div className="w-50 text-md-right">
                        <a href="/#">Forgot Password</a>
                      </div>
                    </div>
                  </form>
                  <p className="text-center">
                    Not a member?
                    <Link data-toggle="tab" to="/">
                      Sign Up
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
