# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# 🛠️ DigiTools - Premium Digital Marketplace

DigiTools is a sleek, modern, and high-performance digital marketplace built with **React** and **Tailwind CSS**. It allows users to browse premium digital assets, AI tools, and productivity software with a seamless "Add to Cart" experience and a fully responsive interface.

## 🌐 Live Project
Experience the application here: [DigiTools Live](https://b-13-a6-digitools.netlify.app/)

---

## 🚀 Key Features

* **⚡ Interactive Cart System:** Users can easily add products to their cart. The application features a dynamic toggle to switch between the "Products" list and the "Cart" view without page reloads.
* **📱 Optimized Mobile Experience:** Specially designed for high-end responsiveness, ensuring a perfect UI even on small devices (360px width) with centered layouts and a fixed professional navbar.
* **💎 Premium UI/UX:** Following modern design trends with linear-gradient buttons, smooth hover animations, and a clean, minimalist layout for high user engagement.

---

## 🛠️ Technologies Used

* **Core:** [React.js](https://reactjs.org/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **UI Components:** [DaisyUI](https://daisyui.com/)
* **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
* **State Management:** React `useState` & `useEffect` hooks for cart logic.
* **Deployment:** [Netlify](https://www.netlify.com/)

---

## 📂 Project Structure

- **Navbar:** Fixed top navigation with a responsive hamburger menu and real-time cart counter.
- **Banner:** Hero section with a call-to-action for exploring products.
- **ToolsCard:** The heart of the app, managing the state between available products and selected items.
- **SelectedCards:** A dedicated checkout view that calculates total price and allows item removal.
