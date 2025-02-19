
<div align="center">
  <img src="public/EZ Visa Mockup.png" alt="Visa Navigator Mockup" width="700">
</div>

# 🌍 **EZ Visa** 🌍  

**EZ Visa** is your ultimate gateway to simplifying visa processes. This dynamic, user-friendly platform empowers users to check visa requirements, apply online, and track applications effortlessly. ✈️✨  

---

## 🌐 **Live Demo & Repositories**

- 🚀 **[Live Website](https://ez-visa-1.web.app/)**  
- 💻 **[Client-side Repository](https://github.com/ornobaadi/Visa-Navigator-Client)**  
- 🛠️ **[Server-side Repository](https://github.com/ornobaadi/Visa-Navigator-Server)**  

---

## 🎯 **Overview**

EZ Visa helps streamline the often complicated visa process by offering an intuitive, secure, and interactive experience. Users can explore visa options, apply online, and track their applications with ease.

---

## 🌟 **Core Features**

- **Dynamic Visa Explorer**: Discover tailored visa options through a visually stunning, user-friendly interface.
- **Hassle-Free Applications**: Secure and guided visa application process.
- **Personalized Tracking**: Track your visa applications via a sleek, real-time dashboard.
- **Responsive Design**: Optimized for mobile, tablet, and desktop for seamless use across all devices.
- **Theme Toggle**: Effortlessly switch between light and dark modes for a customized browsing experience.

---

## 🔐 **Authentication & Security**

- **Secure Login & Registration**: Email/password authentication with Google sign-in via Firebase.
- **Protected Routes**: Restricted access to sensitive pages like visa applications and tracking.
- **Environment Security**: Sensitive information such as Firebase keys and MongoDB credentials are securely managed using `.env` files.

---

## 💻 **Tech Stack**

- **Frontend**: React, Tailwind CSS  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB  
- **Authentication**: Firebase Authentication  
- **Hosting**: Surge (Client) & Vercel (Server)  

---

## 📦 **Dependencies**

- **React Router DOM**: Handles navigation and routing.
- **Firebase**: Authentication and real-time database services.
- **Axios**: API requests and data fetching.
- **Lottie React**: Interactive animations for an engaging UI.
- **React Awesome Reveal**: Smooth animation effects for UI components.
- **React Hot Toast**: Clean toast notifications for user feedback.

---

## 🛠️ **Getting Started**

Follow these steps to run **Visa Navigator** locally:

1. **Clone the Client & Server Repositories**

   ```bash
   git clone https://github.com/ornobaadi/Visa-Navigator-Client.git
   git clone https://github.com/ornobaadi/Visa-Navigator-Server.git
   ```

2. **Navigate to Each Project Directory**

   ```bash
   cd Visa-Navigator-Client
   cd Visa-Navigator-Server
   ```

3. **Install Dependencies for Both Projects**

   ```bash
   npm install
   ```

4. **Set Up Environment Variables**

   Create a `.env` file in both the **client** and **server** directories and add your Firebase and MongoDB credentials.

   **Client `.env`**

   ```env
   VITE_API_KEY=your_firebase_api_key
   VITE_AUTH_DOMAIN=your_project_auth_domain
   VITE_PROJECT_ID=your_project_id
   VITE_STORAGE_BUCKET=your_storage_bucket
   VITE_MESSAGING_SENDER_ID=your_messaging_sender_id
   VITE_APP_ID=your_app_id
   ```

   **Server `.env`**

   ```env
   MONGODB_URI=your_mongodb_connection_string
   PORT=5000
   ```

5. **Run the Development Servers**

   **For the Client:**

   ```bash
   npm run dev
   ```

   **For the Server:**

   ```bash
   nodemon index.js
   ```

6. **View the Application**

   Open your browser and go to [http://localhost:5173](http://localhost:5173) for the client and [http://localhost:5000](http://localhost:5000) for the server.

---

## 🖼️ **Screenshots**

### 🏠 **Home Page**
- Engaging banner with dynamic visuals.
- Display of the latest visas and informative sections.

### ✏️ **Add Visa**
- User-friendly form with multi-select options for adding new visas.

### 🗂️ **All Visas**
- Grid layout showcasing all available visas with advanced filtering capabilities.

### 📜 **Visa Details**
- Detailed visa information, including processing time, fees, and an "Apply for Visa" button.

---

## 💡 **Future Enhancements**

- 🌍 Multi-language support for global users.
- 🏢 Integration with embassy APIs for real-time visa updates.
- 📊 Enhanced analytics dashboard for tracking user interactions and visa trends.

---

## 🤝 **Contributors**

Developed with ❤️ and dedication by [**Ornob Aadi**](https://github.com/ornobaadi).

---

🎉 **Get started with Visa Navigator today and make visa applications a breeze!** ✈️🌍
