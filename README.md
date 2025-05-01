# HR Cloud - Frontend

HR Cloud is a modern and responsive web application designed to streamline and simplify various Human Resource processes. This is the **frontend** part of the HR Cloud application, developed using React.js and styled with Bootstrap and custom CSS.

## Features

- **Home Page**: Overview of the HR Cloud platform, showcasing its core features.
- **Services Page**: Detailed explanation of the services offered by HR Cloud.
- **About Page**: Information about the platform and its development, vision, and mission.
- **Contact Page**: A contact form for users to get in touch with HR Cloud.
- **Responsive Navbar**: Fixed, dynamic navbar for easy navigation, staying visible even while scrolling.

## Tech Stack

- **Frontend**: React.js
- **Styling**: Bootstrap 5, Custom CSS
- **Hosting**: Netlify

## Getting Started

### Prerequisites

Ensure you have the following installed on your system:

- **Node.js**: [Download Node.js](https://nodejs.org/)
- **npm**: Comes with Node.js installation

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/hr-cloud.git
   cd hr-cloud
   install dependencies
npm install
Start the development server:
npm start
Open your browser and visit:
http://localhost:3000
Folder Structure
hr-cloud-frontend/
├── public/                # Public static files
│   └── index.html
├── src/                   # Source files
│   ├── components/        # Reusable components like Navbar, Footer, etc.
│   ├── pages/             # Page components like Home, Services, About, Contact
│   ├── styles/            # Custom CSS files
│   └── App.js             # Main app component
├── package.json           # Project dependencies and scripts
├── README.md              # Project documentation
└── .gitignore             # Git ignore file

---

## ⚙️ Getting Started Locally

Clone the repo and run it locally:

```bash
git clone https://github.com/HarshMishra54/hr-cloud-frontend.git
cd hr-cloud-frontend
npm install
npm start

Available Scripts
In the project directory, you can run the following scripts:

npm start
Runs the app in development mode.
Open http://localhost:3000 to view it in your browser.
The page will reload when you make changes.
You may also see any lint errors in the console.

npm test
Launches the test runner in interactive watch mode.
See the section about running tests for more information.

npm run build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed on platforms like Netlify.

npm run eject
Note: this is a one-way operation. Once you eject, you can't go back!

If you aren't satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc.) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point, you're on your own.

You don't have to ever use eject. The curated feature set is suitable for small and medium deployments, and you shouldn't feel obligated to use this feature.

Deployment on Netlify
Create a Netlify account at Netlify.

After logging in, click on New site from Git.

Connect your GitHub repository where this project is stored.

Follow the steps to deploy, making sure to set the build command to:

bash
Copy
Edit
npm run build
Netlify will automatically build and deploy your site.

License
This project is open-source and available under the MIT License.




