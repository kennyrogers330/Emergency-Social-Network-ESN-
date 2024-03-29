import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/AuthServices.js";
import { UserContext } from "../../context/UserContext.jsx";
import Input from "../../components/Input.jsx";
import Button from "../../components/Button.jsx";
import { toast } from "react-hot-toast";
import Popup from "../../components/Popup.jsx";
import ExistingUsersContext from "../../context/ExistingUsersContext.jsx";

const LoginForm = () => {
  const [input, setInput] = useState({ username: "", password: "" });
  const [submitted, setSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { setCurrentUser } = useContext(UserContext);
  const { existingUsername,fetchExistingUsers } =
    useContext(ExistingUsersContext)


  const navigate = useNavigate();

  const handleChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const handleLogin = async () => {
    try {
      const userData = await login(input.username, input.password);
      if (userData) {
        setCurrentUser(userData);
        toast.success("Logged in successfully");
        await fetchExistingUsers()
        navigate("/dashboard", { replace: true });
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

  const handleYesClick = () => {
    handleLogin();
  };
  const handleNoClick = () => {
    setIsVisible(false);
    navigate("/login", { replace: true });
  };

  const tryLogin = () => {
    setSubmitted(true);
    if (input.username.length < 3 || input.password.length < 4) {
      return;
    }

    if (existingUsername?.includes(input.username)) {
      setIsVisible(false)
      handleLogin()
    } else {
      setIsVisible(true)
    }
  };

  return (
    <>
      <div className="flex flex-col justify-between w-full">
        <Popup
          clickYes={handleYesClick}
          clickNo={handleNoClick}
          visibility={isVisible}
          username={input.username}
        />
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
          onClick={tryLogin}
        >
          Login
        </Button>
      </div>
    </>
  );
};

export default LoginForm;
