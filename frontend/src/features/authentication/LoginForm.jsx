import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/AuthServices.js";
import { UserContext } from "../../context/UserContext.jsx";
import Input from "../../components/Input.jsx";
import Button from "../../components/Button.jsx";
import { toast } from "react-hot-toast";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const { setCurrentUser } = useContext(UserContext);

  const navigate = useNavigate();

  const handleLogin = async () => {
    setSubmitted(true);
    if (username.length < 3 || password.length < 4) {
      return;
    }

    try {
      const userData = await login(username, password);
      if (userData) {
        setCurrentUser(userData);
        toast.success("Logged in successfully");
        navigate("/dashboard", { replace: true });
        console.log("User logged in:", userData);
      } else {
        setUsername("");
        setPassword("");
        toast.error("Login failed");
        throw new Error("Login failed");
      }
    } catch (err) {
      setUsername("");
      setPassword("");
      if (!err.message || !err.message.includes("Login failed")) {
        if (err.response) {
          toast.error(`Login failed: ${err.response.error}`);
          setUsername("");
          setPassword("");
        } else {
          toast.error("Password or username is incorrect. Please try again.");
          setUsername("");
          setPassword("");
        }
      }
    }
  };
  return (
    <>
      <div className="flex flex-col justify-between w-full">
        <Input
          placeholder="Enter Username"
          label="Username"
          error={
            submitted && (!username || username.length < 3)
              ? "Username must be at least 3 characters"
              : ""
          }
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <Input
          placeholder="Enter Password"
          label="Password"
          error={
            submitted && (!password || password.length < 4)
              ? "Please enter a valid password"
              : ""
          }
          type="password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
      </div>
      <div className="items-center w-full mt-12">
        <Button
          size="large"
          backgroundColor={`bg-colorBluePrimary`}
          textColor={`text-white`}
          onClick={handleLogin}
        >
          Login
        </Button>
      </div>
    </>
  );
};

export default LoginForm;
