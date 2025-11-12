# Static Website Deployment with AWS Amplify

This repository demonstrates how to create, deploy, and host a **static website** using **React**, **Vite**, and **AWS Amplify**. Amplify provides a fully managed Git-based CI/CD workflow to build, deploy, and host static websites globally via Amazon CloudFront and Amazon S3.

---

## 📌 What You Will Learn

- How to **host a static website** using AWS Amplify.
- How to **set up continuous deployment** from a GitHub repository.
- How to create a **React application** using Vite.
- How to manage your app with Git and GitHub.

---

## 🚀 Prerequisites

Before starting, you will need:

- An **AWS account**.  
- AWS CLI configured for your environment.  
- **Node.js** and **npm** installed locally.  
- Familiarity with **Git** and a **GitHub account**.

---

##  Implementation

### Step 1: Create a New React Application

Create a React app using Vite:

```bash
npm create vite@latest staticwebsite -- --template react
cd staticwebsite
npm install
npm run dev
## Step 2: Initialize GitHub Repository

1. **Create a new repository on GitHub**

   - Go to [GitHub](https://github.com/) and sign in.  
   - Click **New repository**.  
   - Enter the repository name, e.g., `gift-shop`.  
   - Choose **Public** and click **Create repository**.

2. **Push the local project to GitHub**

   Open a terminal in your project root and run:

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin git@github.com:<your-username>/gift-shop.git
   git branch -M main
   git push -u origin main
   
