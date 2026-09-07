# 🛍️ ZenShop

A full-stack e-commerce marketplace built with the **MERN stack** (MongoDB, Express, React, Node.js). Users can sign up as buyers or sellers — sellers list and manage their own products, buyers browse, search, add to cart, and check out securely. Includes role-based auth, image uploads, payments, and an admin dashboard.

![MERN Stack](https://img.shields.io/badge/stack-MERN-61DAFB?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)
![Node](https://img.shields.io/badge/node-%3E%3D18-339933?style=flat-square&logo=node.js)

---

## ✨ Features

- 🔐 **Authentication** — JWT-based register/login with role support (buyer, seller, admin)
- 🏪 **Seller dashboard** — create, edit, and delete your own product listings
- 🔍 **Product browsing** — search, category and price filtering, pagination
- ⭐ **Reviews & ratings** on products
- 🛒 **Cart & checkout** — persistent cart, server-side price calculation, stock management
- 💳 **Payments** — Stripe integration (PaymentIntent + webhook confirmation)
- ☁️ **Image uploads** — product photos stored via Cloudinary
- 🛠️ **Admin panel** — view and update all orders

## 🧱 Tech Stack

| Layer      | Tech                                      |
|------------|--------------------------------------------|
| Frontend   | React (Vite), React Router, Axios          |
| Backend    | Node.js, Express                           |
| Database   | MongoDB with Mongoose                      |
| Auth       | JSON Web Tokens (JWT), bcrypt              |
| Payments   | Stripe                                     |
| Media      | Cloudinary                                 |

## 📁 Project Structure

\```
zenshop/
├── backend/          # Express API
│   ├── config/        # DB + Cloudinary setup
│   ├── controllers/    # Route logic
│   ├── middleware/    # Auth & error handling
│   ├── models/        # Mongoose schemas
│   ├── routes/        # API routes
│   └── utils/          # Seed script
└── frontend/         # React (Vite) client
    └── src/
        ├── api/         # Axios instance
        ├── components/  # Reusable UI
        ├── context/     # Auth & Cart state
        └── pages/       # Route pages
\```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- A MongoDB database (local via [MongoDB Community Server](https://www.mongodb.com/try/download/community) + [Compass](https://www.mongodb.com/products/compass), or free cloud via [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))
- (Optional) [Cloudinary](https://cloudinary.com) account for image uploads
- (Optional) [Stripe](https://dashboard.stripe.com) account (test mode) for payments

### 1. Clone the repo
\```bash
git clone https://github.com/<your-username>/zenshop.git
cd zenshop
\```

### 2. Backend setup
\```bash
cd backend
npm install
cp .env.example .env
# edit .env with your MONGO_URI, JWT_SECRET, and optional Cloudinary/Stripe keys
npm run seed   # optional: creates a demo admin + seller + sample products
npm run dev    # runs on http://localhost:5000
\```

### 3. Frontend setup
\```bash
cd frontend
npm install
npm run dev    # runs on http://localhost:5173
\```

Open **http://localhost:5173** — the Vite dev server proxies `/api` calls to the backend automatically.

### Demo accounts (after running the seed script)
| Role   | Email                | Password    |
|--------|-----------------------|-------------|
| Admin  | admin@zenshop.com     | admin1234   |
| Seller | seller@zenshop.com    | seller1234  |

## 🔑 Environment Variables

See `backend/.env.example`. At minimum you need:
\```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=some_long_random_string
\```
Cloudinary and Stripe keys are only required for image uploads and payments respectively.

## 🗺️ Roadmap

- [ ] Wire up Stripe `<PaymentElement>` on the order page (backend endpoint already built)
- [ ] Add request validation (e.g. `zod`)
- [ ] Add rate limiting & security headers (`helmet`, `express-rate-limit`)
- [ ] Pagination controls on the product listing page
- [ ] Deploy (Render/Railway for backend, Vercel/Netlify for frontend)

## 📄 License

This project is licensed under the MIT License.