# Tracking Codes Implementation Task

## 📹 Video Walkthrough

**IMPORTANT:** Before starting, please watch the provided video walkthrough that shows:
- The application's UI/UX and design language
- The primary color scheme and styling patterns
- Examples of existing settings pages
- Overall visual design expectations

This video will help you understand the design context and ensure your implementation matches our application's look and feel.

Video: https://www.loom.com/share/58f3153a9b3a4feda0fc28862ef9e81a

---

## Requirements

**Important:** All views can be very BASIC and don't need to have a lot of content inside. The functionality + basic brand-matching design choices are the most important things here.

### 1. Cookie Banner

Implement a cookie banner that appears on all customer-facing pages (routes under `/customer/*`).

**Features:**
- Display a cookie consent banner on customer-facing sites
- Two buttons:
  - **"Accept all"** → Accepts all cookies → Tracking scripts are executed
  - **"Reject all"** → Declines all cookies → Tracking scripts are NOT executed
- Store the user's choice (localStorage or sessionStorage)
- The banner should not appear again after the user has made a choice

**Implementation Note:**
We could use an open-source library like [cookieconsent.orestbida.com](https://cookieconsent.orestbida.com/), but we are not sure if it offers any benefits that would be useful vs. a separate implementation.

### 2. Tracking Codes CRUD

Create a SIMPLE **Settings > Tracking Codes** page where users can manage their tracking code setup.

**Features:**
- **Add Tracking Code** button that opens a form/wizard
- Form fields:
  - **Name** (text input) - A descriptive name for the tracking code
  - **Tracking Code Script** (textarea) - The JavaScript code WITHOUT `<script>` tags
    - Users should paste the tracking code without script tags
    - You will wrap it in `<script>` tags when executing it
- **List view** showing all created tracking codes with:
  - Name
  - Edit button
  - Delete button (with confirmation dialog)
- **Edit functionality** - Users can modify existing tracking codes
- **Delete functionality** - Users can delete tracking codes (with confirmation)

**Important:** Create a `TrackingCodeFormFields.tsx` component to prevent code duplication between Create and Edit views.

### 3. Database Schema

Create a `tracking_codes` table with a structure that you think would be useful. 

### 4. Integration

Tracking codes should be executed on **all customer-facing pages** when:
- The user has clicked "Accept all" in the cookie banner
- The tracking code belongs to the current page's creator/user

After the user has clicked Accept All this choice should be saved for 30 days.

We have separate routes for customer facing pages.

---

## Technical Stack

- **Backend:** Laravel 11.x
- **Frontend:** React 18+ with TypeScript
- **Framework:** Inertia.js (for Laravel-React integration)
- **Styling:** Tailwind CSS
- **Translations:** Tolgee (use `<T>` component for all user-facing text)
- **UI Components:** shadcn/ui components (Button, Dialog, Input, Label, etc.)

---

## Design Guidelines

### Primary Color

**Default Primary Color Values:**
- **HSL:** `hsl(232, 99%, 59%)` 
- **Hex:** `#3B5FFF` (approximate)

### UI Patterns

- **List Views:** Use cards with shadow styling (see `DiscountCodes/Index.tsx`)
- **Icons:** Use Lucide React icons (e.g., `PlusIcon`, `PencilIcon`, `TrashIcon`)

---

## Reference Files

**The attached files are provided as references** to help you understand our codebase patterns and coding style. Study these files to understand how we structure similar features, but **do not copy them directly** - use them as guidance for your implementation.

---

## Questions?

If you have any questions about the requirements or need clarification on any part of the implementation, please don't hesitate to ask. We're looking for a clean, maintainable implementation that follows our existing patterns.

**Good luck!** 🚀

