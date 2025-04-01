# React Student Management Mini-Project

A simple frontend application built with React to demonstrate fundamental CRUD (Create, Read, Update, Delete) operations for managing student data. This project utilizes client-side routing and state management with mock data.

## Features

- **View Students:** Displays a list of all registered students in a table format on the home page.
- **Add Student:** Allows adding a new student record through a dedicated form page (includes Name, Enrollment No., Class, Score).
- **Edit Student:** Enables modification of an existing student's details via a pre-filled form accessible from the student list.
- **Delete Student:** Provides functionality to remove a student record from the list (includes a confirmation step).
- **Client-Side Routing:** Uses React Router for seamless navigation between the student list, add form, and edit form pages without full page reloads.

## Technologies Used

- **Frontend Library:** [React.js](https://reactjs.org/) (v18+)
  - Utilizes Functional Components and Hooks (`useState`, `useEffect`, `useCallback`, `useMemo`).
- **Routing:** [React Router DOM](https://reactrouter.com/) (v6+)
- **Styling:** [Bootstrap](https://getbootstrap.com/) (v5+)
- **Build Tool / Dev Server:** [Vite](https://vitejs.dev/)
- **Language:** JavaScript (ES6+)
- **Data:** Mock data stored in a local JavaScript array (no backend required).

## Project Structure

```
student-management-mini/
├── public/ # Static assets
├── src/
│ ├── components/ # Reusable UI components (StudentList, StudentForm)
│ ├── data/ # Mock data definition (mockData.js)
│ ├── pages/ # Page-level components (HomePage, AddStudentPage, etc.)
│ ├── App.jsx # Main application component: Routing setup, state management
│ ├── index.css # Global CSS styles
│ └── main.jsx # Application entry point, React DOM rendering
├── .gitignore # Git ignore file
├── index.html # Main HTML template
├── package.json # Project dependencies and scripts
├── vite.config.js # Vite configuration
└── README.md # This file
```

## Setup and Installation

To run this project locally, follow these steps:

1.  **Clone the repository:**

    ```bash
    git clone <your-repository-url>
    cd student-management-mini
    ```

    _(Replace `<your-repository-url>` with the actual URL of your Git repository if applicable)_

2.  **Install dependencies:**
    Make sure you have [Node.js](https://nodejs.org/) (which includes npm) installed.

    ```bash
    npm install
    ```

3.  **Start the development server:**

    ```bash
    npm run dev
    ```

4.  **Open the application:**
    Open your web browser and navigate to `http://localhost:5173` (or the address provided by Vite in your terminal).

## Usage

- The **Home** page displays the list of current students.
- Click the **"Add Student"** link in the navigation bar to go to the form for adding a new student.
- In the student list on the home page:
  - Click the **"Edit"** button next to a student to go to a form pre-filled with their data for modification.
  - Click the **"Delete"** button to remove that student (you will be asked for confirmation).
- On the Add/Edit forms:
  - Fill in the required details.
  - Click **"Save Student"** to submit the form and return to the student list.
  - Click **"Cancel"** to discard changes and return to the student list.

## Potential Future Improvements

- Connect to a real backend API (e.g., built with Node.js/Express, Python/Flask/Django) instead of mock data.
- Implement user authentication and authorization.
- Add more detailed student fields (e.g., address, contact info, attendance details).
- Implement sorting, filtering, or searching functionality for the student list.
- Add pagination for handling large numbers of students.
- Implement more robust form validation (client-side and potentially server-side).
- Add unit and integration tests.

---

_Feel free to modify this template to better suit your specific project details or preferences._
