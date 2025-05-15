🛡️ CyberSentry App
CyberSentry is a modern, interactive cybersecurity learning platform designed to raise awareness and teach essential security practices through hands-on experience. Built with a focus on secure development, it features user authentication, multi-factor authentication (MFA), and MongoDB-backed data management.

🚀 Features
✅ User Registration & Login
Secure account creation and access with encrypted credentials.

✅ Multi-Factor Authentication (MFA)
Adds an extra layer of protection using time-based OTPs (e.g., Google Authenticator or FreeOTP).

✅ MongoDB Integration
Real-time data storage and retrieval using a robust NoSQL database.

✅ Secure Password Storage
Passwords are hashed securely using industry best practices.

✅ Database Management Interface
Basic admin tools for inspecting and managing user data.

📦 Installation Guide
1. 📥 Clone the Repository
bash
Copy
Edit
git clone https://github.com/dinusha96/cybersentry-app.git
cd cybersentry-app
2. 📚 Install Dependencies
bash
Copy
Edit
npm install
3. 🍃 Start MongoDB (macOS)
Ensure MongoDB is installed via Homebrew. Then start the service:

bash
Copy
Edit
brew services start mongodb-community
If MongoDB is not installed, run:

bash
Copy
Edit
brew tap mongodb/brew
brew install mongodb-community
4. 💻 Start the Development Server
bash
Copy
Edit
npm run dev
🔗 Open your browser and visit: http://localhost:3000

🧠 Technologies Used
Next.js / React – Frontend and Server-Side Rendering (SSR)

Node.js – Server-side runtime

MongoDB – NoSQL database

Mongoose – ODM for MongoDB

bcrypt – Secure password hashing

NextAuth.js – Authentication and MFA integration

🛠️ Future Improvements
🧑‍💼 Admin dashboard with user analytics

🎮 Interactive cybersecurity learning games

🔐 Role-Based Access Control (RBAC)

✉️ Email-based verification and password reset

🤝 Contribution
Contributions are welcome!
If you'd like to suggest improvements or fix issues, feel free to fork the repo and submit a pull request.


