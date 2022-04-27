/**
 * user register
 * This is a public route
 */
const registerUser = (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res
      .status(400)
      .json({ message: "PLease alll information to all of the fields" });
  }else{
      console.log(req.body);
    res.send("You got the register route");
  }
  
};

const loginUser = (req, res) => {
  res.send("Got into Login root");
};
module.exports = {
  registerUser,
  loginUser,
};
