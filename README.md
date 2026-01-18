# CRM Application Demo

A fully functional CRM (Customer Relationship Management) application built with React, TypeScript, and Material-UI. This demo showcases a complete CRM system with working CRUD operations, authentication, and interactive UI components.

## 🌟 Features

### ✅ Fully Interactive Components
- **Working Buttons & Forms** - All buttons and forms are fully functional
- **Real-time State Management** - useState, useEffect, and dynamic updates
- **Client-side Routing** - React Router with navigation
- **Form Validation** - Input validation with error handling
- **CRUD Operations** - Create, Read, Update, Delete for all entities

### 📊 CRM Functionality
- **Contacts Management** - Add, edit, delete, and search contacts
- **Leads Management** - Track and manage sales leads
- **Deals Pipeline** - Monitor deal progress and stages
- **Activities Tracking** - Log calls, meetings, emails, and tasks
- **Dashboard** - Overview with statistics and recent activities

### 🎨 Modern UI/UX
- **Material-UI Components** - Professional, responsive design
- **Interactive Data Tables** - Sortable, searchable tables
- **Modal Forms** - Clean form dialogs for data entry
- **Navigation Drawer** - Responsive sidebar navigation
- **Toast Notifications** - User feedback for all actions

## 🚀 Live Demo

[View Live Demo](https://sidescribe.github.io/Lorem)

## 📋 Demo Accounts

| Role  | Email          | Password |
|-------|----------------|----------|
| Admin | admin@crm.com  | any password |
| Sales | sales@crm.com  | any password |
| User  | john@crm.com   | any password |

## 🛠️ Technical Implementation

### Frontend Architecture
- **React 18** with TypeScript
- **Material-UI** for components
- **React Router** for navigation
- **Local Storage** for data persistence
- **Mock API Service** simulating backend operations

### Key Features Demonstrated
- ✅ **Event Handlers** - onClick, onChange, onSubmit
- ✅ **State Management** - useState, useEffect hooks
- ✅ **Form Handling** - Controlled components with validation
- ✅ **API Integration** - Mock API with async operations
- ✅ **Error Handling** - Try/catch with user feedback
- ✅ **Data Persistence** - localStorage for demo data
- ✅ **Responsive Design** - Mobile-friendly interface

## 📦 Local Development

```bash
# Run the setup script
chmod +x Lorem
bash Lorem

# Install dependencies
cd crm-app/frontend
npm install

# Start development server
npm start

# Open http://localhost:3000
```

## 🚀 Deployment

The application automatically deploys to GitHub Pages when pushed to the main branch via GitHub Actions.

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones

## 🔧 Development Scripts

- `npm start` - Start development server
- `npm run build` - Create production build
- `npm run deploy` - Deploy to GitHub Pages
- `npm test` - Run tests

## 🏗️ Architecture

```
crm-app/
├── frontend/
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── services/      # Mock API service
│   │   ├── contexts/      # React contexts
│   │   └── utils/         # Utility functions
│   ├── public/            # Static assets
│   └── build/            # Production build
└── .github/
    └── workflows/        # GitHub Actions deployment
```

---

**Note**: This is a demo application using localStorage for data persistence. In a production environment, you would replace the mock API service with actual backend API calls.