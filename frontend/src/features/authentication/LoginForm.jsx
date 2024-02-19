import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/AuthServices.js";
import { UserContext } from "../../context/UserContext.jsx";
import Input from "../../components/Input.jsx";
import Button from "../../components/Button.jsx";
import { toast } from "react-hot-toast";

const LoginForm = () => {
  const [input, setInput] = useState({ username: "", password: "" });
  const [submitted, setSubmitted] = useState(false);
  const { setCurrentUser } = useContext(UserContext);

  const navigate = useNavigate();

  const handleChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const handleLogin = async () => {
    setSubmitted(true);
    if (input.username.length < 3 || input.password.length < 4) {
      return;
    }

    try {
      const userData = await login(input.username, input.password);
      if (userData) {
        setCurrentUser(userData);
        toast.success("Logged in successfully");
        navigate("/dashboard", { replace: true });
        console.log("User logged in:", userData);
      } else {
        setInput({ username: "", password: "" });
        toast.error("Login failed");
        throw new Error("Login failed");
      }
    } catch (err) {
      setInput({ username: "", password: "" });
      if (!err.message || !err.message.includes("Login failed")) {
        if (err.response) {
          toast.error(`Login failed: ${err.response.data.error}`);
        } else {
          toast.error("Password or username is incorrect. Please try again.");
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
          name="username"
          error={
            submitted && (!input.username || input.username.length < 3)
              ? "Username must be at least 3 characters"
              : ""
          }
          onChange={handleChange}
        />
        <Input
          placeholder="Enter Password"
          label="Password"
          name="password"
          error={
            submitted && (!input.password || input.password.length < 4)
              ? "Please enter a valid password"
              : ""
          }
          type="password"
          onChange={handleChange}
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
