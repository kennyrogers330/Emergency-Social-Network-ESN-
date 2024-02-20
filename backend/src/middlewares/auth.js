const isLogin = async (req, res, next) => {
  try {
    if (req.session.user) {
      next();
    }
  } catch (err) {
    res.status(400).json({
      status: "auth-failure",
      error: err.message,
    });
  }
};

export default isLogin;
