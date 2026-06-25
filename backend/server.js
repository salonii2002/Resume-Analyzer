const express = require("express");
const cors = require("cors");
const multer = require("multer");
const fs = require("fs");
const pdf = require("pdf-parse");
const analyzeResume = require("./analyzer");
const app = express();

app.use(cors());

app.get("/", (req, res) => {
    res.send("JobFit AI Backend Running");
});

// Storage Configuration
const storage = multer.diskStorage({
    destination: "uploads/",
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    }
});

// Create Upload Object FIRST
const upload = multer({ storage });

// THEN use upload
app.post("/upload", upload.single("resume"), async (req, res) => {
console.log("UPLOAD API HIT");

    try {
	const jobDescription = req.body.jobDescription || "";
	console.log("JOB DESCRIPTION:");
	console.log(jobDescription);

        const dataBuffer = fs.readFileSync(req.file.path);

	const data = await pdf(dataBuffer);

	console.log("===== RESUME TEXT =====");
	console.log(data.text);

	const result = analyzeResume(
    data.text,
    jobDescription
);

res.json(result);

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "PDF Extraction Failed"
        });

    }

});
app.listen(5000, () => {
    console.log("Server running on port 5000");
});