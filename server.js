// We don't use import syntax here because we will need babel then which we use in FE side
// i.e react, so using commonjs and require statements
const express = require("express")
const connectDB = require("./config/db")
const app = express()

//Connect database
connectDB()

app.get("/", (req, res) => res.json({ msg: "Welcome to Contact Keeper API" }))

//Define Routes
app.use("/api/users", require("./routes/users"))
app.use("/api/auth", require("./routes/auth"))
app.use("/api/contacts", require("./routes/contacts"))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`)
})
