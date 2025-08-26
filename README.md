# Clothes Shop Frontend

This is the **frontend application** for the Clothes Shop e-commerce platform. It is built with **React.js**, **Tailwind CSS**, and **React Router**, and includes features such as a shopping cart, checkout with M-Pesa payment integration, and a protected Super Admin page.

---

## Table of Contents

* [Features](#features)
* [Tech Stack](#tech-stack)
* [Getting Started](#getting-started)
* [Available Scripts](#available-scripts)
* [Project Structure](#project-structure)
* [Contributing](#contributing)
* [License](#license)

---

## Features

* Browse products by category (**Men** and **Women**)
* Add items to shopping cart
* Checkout with M-Pesa payment integration
* Cart summary and total calculation
* Input validation for checkout form (name & phone)
* Success messages on payment request

---

## Tech Stack

* **React.js** - Frontend framework
* **React Router** - Routing between pages
* **Tailwind CSS** - Styling and responsive design
* **Context API** - State management for cart and authentication

---

## Getting Started

### Prerequisites

* Node.js (v16+)
* npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
```

2. Navigate into the project directory:

```bash
cd clothes-shop
```

3. Install dependencies:

```bash
npm install
# or
yarn install
```

4. Start the development server:

```bash
npm run dev
# or
yarn dev
```

5. Open the app in your browser at:

```
http://localhost:5173
```

---

## Available Scripts

* `npm run dev` / `yarn dev` → Start development server
* `npm run build` / `yarn build` → Build production-ready app
* `npm run preview` / `yarn preview` → Preview production build

---

## Project Structure

```
src/
├── components/        # Reusable components (Navbar, Footer, etc.)
├── context/           # React Context for cart and auth state
├── hooks/             # Custom hooks (useAuth)
├── pages/             # Pages (Home, Men, Women, Cart, Checkout, SuperAdminPage)
├── routes/            # Route protection (AdminRoute)
├── App.jsx            # Main App component with routing
└── index.jsx          # Entry point
```

---

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/YourFeature`)
3. Make your changes and commit (`git commit -m "Add feature"`)
4. Push to your branch (`git push origin feature/YourFeature`)
5. Open a pull request

---
Backend repository:
https://github.com/Elvis24-tech/Clothify-backend

## License

This project is licensed under the MIT License.
