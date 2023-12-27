#Internshala Github Project

Description:
Explore GitHub profiles with ease using this React app. Simply input a GitHub username, and the app fetches and displays real-time data from the GitHub API. The app features a custom contribution graph, designed for clarity and aesthetics, showcasing the user's GitHub contributions. It also includes the user's avatar and a contribution counter for quick insights. A user-friendly and visually appealing tool for exploring GitHub activity.

Technologies:
Reactjs

Usage:
clone the repository
cd InternShala-Github-Project
npm install
npm start

Update GitHub Access Token (if needed):
If you encounter authentication issues during development, it might be due to an expired GitHub access token. To resolve this, follow these steps:

Generate a new GitHub Personal Access Token from your GitHub account settings.
Open the Home.jsx in src/Page folder.
Replace the existing token value with your new access token in gettingData(Callback).
