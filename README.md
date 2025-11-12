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

## 🛠 Implementation

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
## Step 3: Deploy Your App with AWS Amplify

1. **Create an Amplify App**

   - Sign in to the [AWS Amplify Console](https://console.aws.amazon.com/amplify/apps).  
   - Click **Create new app** → **Host web app**.  

2. **Connect GitHub Repository**

   - Choose GitHub as the repository provider.  
   - Authorize AWS Amplify to access your GitHub account.  
   - Select the repository (`gift-shop`) and the branch (`main`).  
   - Click **Next**.

3. **Review Build Settings**

   - Amplify automatically detects the build commands.  
   - For a Create React App, ensure `baseDirectory` is set to `build`.  

   Example `amplify.yml`:

   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm ci
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: build
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
## Step 4: Continuous Deployment

- AWS Amplify provides **continuous deployment** for your app.  
- Every time you push changes to the `main` branch of your GitHub repository, Amplify automatically:

  1. Pulls the latest code from the repository.
  2. Runs the build commands defined in `amplify.yml`.
  3. Deploys the updated build to the hosting environment.

- **Important:**  
  - Make sure any API calls in your frontend point to the **deployed API URL** instead of `localhost`.  
  - This ensures your live app works correctly after each deployment.

- You can monitor the deployment progress and logs from the **AWS Amplify Console** under your app’s **Build & Deploy** section.

