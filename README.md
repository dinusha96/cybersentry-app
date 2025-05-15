🛡️ CyberSentry App

CyberSentry is a modern, interactive cybersecurity learning platform designed to raise awareness and teach essential security practices through hands-on experience. Built with a focus on secure development, it features user authentication, MFA, and MongoDB-backed data management.

🚀 Features
✅ User Registration & Login
Secure account creation and access with encrypted credentials.

✅ Multi-Factor Authentication (MFA)
Adds an extra layer of protection using time-based OTPs (e.g., Google Authenticator or FreeOTP).

✅ MongoDB Integration
Real-time data storage and retrieval using a robust NoSQL database.

✅ Secure Password Storage
Passwords are hashed using industry best practices.

✅ Database Management Interface
Basic data admin tools for inspecting and managing stored data.

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
Make sure MongoDB is installed via Homebrew. Then run:

bash
Copy
Edit
brew services start mongodb-community
If not installed, run:

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
🔗 Visit: http://localhost:3000

🧠 Technologies Used
Next.js / React – Frontend & SSR

Node.js – Server runtime

MongoDB – NoSQL database

Mongoose – MongoDB ODM

bcrypt – Password hashing

NextAuth.js – Authentication & MFA

🛠️ Future Improvements
Admin dashboard with user analytics

Interactive cybersecurity games

Role-based access control (RBAC)

Email-based verification/reset

