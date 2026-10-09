const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const complaintsRoutes = require("./routes/complaints");
const app = express();
const errorHandler = require("./middleware/errorHandler");
const PORT = process.env.PORT || 3000;

dotenv.config();
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({
        message: "working"
    });
});

app.use("/complaints", complaintsRoutes)

app.use((req, res) => {
    res.status(404).json({
        message: "Page not found"
    })
})
app.use(errorHandler);

app.listen(PORT, () => {
    connectDB();
    console.log("Server running on " + PORT);
})