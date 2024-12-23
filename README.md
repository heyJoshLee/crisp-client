# Video Overview and Walkthrough
https://komododecks.com/recordings/ssQA7yJW0KWD6e2PFPjj

# To start

Make sure you have the .env file with the following otherwise, this doesn't know where to connect to the server. Also make sure this is the correct port.
REACT_APP_SERVER_URL=http://localhost:8080

- npm install
- npm start


# Detailed startup instructions (chatGPT)

To set up and run a React project locally, follow these steps:

### 1. **Install Node.js and npm**
First, ensure you have **Node.js** and **npm** installed on your system. npm (Node Package Manager) comes bundled with Node.js, so if you have Node.js installed, npm should already be available.

#### a. **Check if Node.js and npm are installed:**

Open your terminal or command prompt and run the following commands:

```bash
node -v
npm -v
```

- If both commands return a version number (e.g., `v18.x.x` for Node.js and `8.x.x` for npm), it means you have Node.js and npm installed.
- If not, follow the instructions to install them:

#### b. **Install Node.js and npm:**
- **Windows/macOS/Linux**: Download and install the latest LTS version from the [Node.js official website](https://nodejs.org/).
- After installing, restart your terminal or command prompt, and then check the versions again using `node -v` and `npm -v`.

### 2. **Navigate to Your Project Folder**
In your terminal or command prompt, navigate to the directory where the React project is located. For example:

```bash
cd /path/to/your/react/project
```

Make sure you're in the root folder of the React project, where the `package.json` file is located.

### 3. **Install Project Dependencies**
Now that you're in the project folder, you need to install the required dependencies listed in the `package.json` file.

Run the following command to install the dependencies using npm:

```bash
npm install
```

This command will read the `package.json` file and download all necessary dependencies (such as React, React-DOM, Webpack, etc.) into a `node_modules` folder inside your project directory.

This process might take a few minutes, depending on your internet speed and the number of dependencies the project has.

### 4. **Start the Development Server**
Once the dependencies are installed, you can start the React development server to view the application in your browser.

Run the following command:

```bash
npm start
```

This command will:
- Compile the React app.
- Start a local development server, usually accessible at [http://localhost:3000](http://localhost:3000).
- Open the app in your default browser, or you can manually visit `http://localhost:3000`.

### 5. **Verify the App is Running**
- After running `npm start`, you should see messages in the terminal that indicate the app is being compiled and the server is running.
- If everything is set up correctly, your browser should automatically open with the React app displayed. If not, you can open a browser and visit [http://localhost:3000](http://localhost:3000).

### 6. **Common Issues and Troubleshooting**
If you encounter any issues, here are some common troubleshooting steps:

- **Missing dependencies**: If you get an error related to missing modules or dependencies after running `npm install`, try deleting the `node_modules` folder and the `package-lock.json` file, and then run `npm install` again:
  ```bash
  rm -rf node_modules
  rm package-lock.json
  npm install
  ```
  
- **Port conflicts**: If port 3000 is already being used by another process, React will try to use the next available port (e.g., 3001). You can also specify a different port manually in the `.env` file by adding:
  ```plaintext
  PORT=3001
  ```

- **Outdated or incompatible Node/npm versions**: Ensure your Node.js and npm versions are compatible with the React project. If you’re unsure, refer to the project's documentation or `package.json` for recommended versions.

### 7. **Next Steps**
- If you want to make changes to the app, simply edit the code in the `src` folder. The development server will automatically reload the app when you save changes.
- If you plan to build the app for production (to deploy it, for example), you can use `npm run build`, which will create an optimized production build in a `build/` directory.

That’s it! You should now have the React project running locally on your machine.



# Things to improve

- Validation
- Show more child info
- Auth
- Visual reporting