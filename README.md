# Tracking App

A Laravel application for managing tracking codes with cookie consent. Add, edit, and run JavaScript tracking scripts (e.g. Google Analytics, Facebook Pixel) on customer-facing pages—only when visitors accept cookies.

## Prerequisites

Before running this application, install the following on your machine:

- **PHP 8.2+** with extensions: `bcmath`, `ctype`, `curl`, `dom`, `fileinfo`, `json`, `mbstring`, `openssl`, `pdo`, `tokenizer`, `xml`
- **Composer** – [getcomposer.org](https://getcomposer.org/)
- **Node.js 18+** and **npm** – [nodejs.org](https://nodejs.org/)
- **MySQL** (default database, usually included with PHP)

## Steps to Run on a Fresh Machine

### 1. Clone or copy the project

```bash
git clone <repository-url> tracking-app
cd tracking-app
```

Or copy the project folder to your machine.

### 2. Install PHP dependencies

```bash
composer install
```

### 3. Install Node.js dependencies

```bash
npm install
```

### 4. Environment setup

Copy the example environment file and generate an application key:

```bash
cp .env.example .env
php artisan key:generate
```

### 5. Database setup

The app uses **SQLite** by default. Create the database file and run migrations:

```bash
# Create SQLite database file
touch database/database.sqlite

# Run migrations
php artisan migrate
```

**Using MySQL or PostgreSQL instead?**

Edit `.env` and set:

```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=tracking_app
DB_USERNAME=root
DB_PASSWORD=your_password
```

Then run `php artisan migrate`.

### 6. Run the application

**Option A: Development (recommended for local development)**

Run both the Laravel server and Vite dev server. Use two terminals:

**Terminal 1 – Laravel:**
```bash
php artisan serve
```

**Terminal 2 – Vite (frontend):**
```bash
npm run dev
```

Open [http://localhost:8000](http://localhost:8000) in your browser.

**Option B: Production build**

Build the frontend assets once, then serve:

```bash
npm run build
php artisan serve
```

Open [http://localhost:8000](http://localhost:8000).

**Option C: All-in-one (Laravel + Vite + Queue + Pail)**

```bash
composer run dev
```

This runs the server, Vite, queue worker, and log viewer together.

## First-time usage

1. Open [http://localhost:8000](http://localhost:8000)
2. Click **Register** to create an account
3. Log in and go to **Tracking** in the sidebar
4. Add a tracking code, then visit `/customer` to see the cookie banner in action

## Main routes

| Route | Description |
|-------|-------------|
| `/` | Landing page |
| `/login` | Log in |
| `/register` | Create account |
| `/tracking-codes` | Manage tracking codes (auth required) |
| `/customer` | Customer-facing page with cookie banner |
| `/docs/download` | Download documentation (RTF) |

## Tech stack

- **Backend:** Laravel 11
- **Frontend:** React 18 + Inertia.js
- **Styling:** Tailwind CSS
- **Build:** Vite

## Troubleshooting

**"Class not found" or autoload errors**
```bash
composer dump-autoload
```

**Vite manifest or assets not found**
```bash
npm run build
```

**Permission errors (storage, cache)**
```bash
# Linux/macOS
chmod -R 775 storage bootstrap/cache
```

**Database errors**
- Ensure `database/database.mysql` exists for mysql
- For MySQL/PostgreSQL, check `.env` and that the database exists
