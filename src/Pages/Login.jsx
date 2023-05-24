import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header/Header";
import "./App.css";
import LoginImg from "./Rectangle 26.png";
import { Footer } from "../Components/Footer";
export function Login() {
  document.title = "login";

  const navigate = useNavigate();
  const HandleSubmit = (evt) => {
    evt.preventDefault();

    const { email, password } = evt.target.elements;

    axios
      .post("https://reqres.in/api/login", {
        email: email.value.trim(),
        password: password.value.trim(),
      })
      .then((json) => {
        localStorage.setItem("token", JSON.stringify(json.data.token));
        navigate("/");
      });
  };

  return (
    <form onSubmit={HandleSubmit}>
      <div>
        <Header />
        <div className="cover">
          <h1>LOGIN</h1>
          <input
            className="inp"
            name="email"
            type="email"
            defaultValue={"eve.holt@reqres.in"}
            placeholder="Enter your email"
          />
          <input
            className="inp"
            name="password"
            type="password"
            defaultValue={"cityslicka"}
            placeholder="Enter your pasword"
          />
          <button
            style={{
              width: "120px",
              border: "none",
              height: "40px",
              cursor: "pointer",
            }}
          >
            LOGIN
          </button>
          <p className="text">OR LOGIN USING</p>
          <div className="alt-login">
            <div className="facebook">
              <img
                className="image-facebook"
                src="https://traff.ink/wp-content/uploads/2021/12/f.png"
                alt=""
              />
            </div>
            <div className="google">
              <img
                className="image-google"
                src="https://tarsimm.com/students/shabani/Step%203/images/Illustration-of-Google-icon-on-transparent-background-PNG.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <img className="login-img" src={LoginImg} alt="" />
      </div>
      <div style={{marginTop: '60px'}}>
      <Footer/>
      </div>
      
    </form>
  );
}
