# Resume Analyzer

A Resume Analyzer that extracts text from PDF resumes, identifies technical skills, calculates an ATS score, and provides improvement suggestions.

## Features

- Upload PDF resumes
- ATS score calculation
- Skill extraction
- Domain recommendation
- Resume improvement suggestions

## Tech Stack

- Node.js
- Express.js
- HTML, CSS, JavaScript
- PM2

## AWS Services

- Amazon S3– Frontend hosting
- Amazon EC2 – Backend deployment
- Amazon CloudWatch – Infrastructure monitoring
- IAM Role – Secure access for EC2 to AWS services
- PM2 – Node.js process management

## Run Locally

bash
npm install
node server.js

or

bash
pm2 start server.js --name resume-analyzer

## Future Improvements
- AI-powered resume feedback
- User authentication
- Resume history
- Database integration

  

Author: Saloni Bhosale
