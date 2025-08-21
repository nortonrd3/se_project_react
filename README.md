# WTWR (What to Wear?) - Frontend

## About the Project

WTWR is a React-based weather clothing recommendation application that helps users decide what to wear based on current weather conditions. The app fetches real-time weather data based on the user's location and displays clothing items that are appropriate for the current temperature and weather conditions.

## Features

### Weather Integration

- **Automatic Location Detection**: Uses browser geolocation to get user's current location
- **Real-time Weather Data**: Fetches current weather conditions and temperature
- **Temperature Toggle**: Switch between Fahrenheit and Celsius display
- **Weather-based Filtering**: Shows clothing items appropriate for current weather

### User Authentication

- **User Registration**: Sign up with name, email, password, and optional avatar
- **User Login/Logout**: Secure authentication with persistent sessions
- **Protected Routes**: Profile page accessible only to authenticated users
- **JWT Token Management**: Automatic token handling and validation

### Profile Management

- **Edit Profile**: Update name and avatar image
- **Avatar Placeholders**: Shows user initials when no avatar is provided
- **Personal Wardrobe**: View and manage personal clothing items
- **Sign Out**: Secure logout with automatic redirect

### Clothing Item Management

- **Add New Items**: Users can add clothing items with images and weather categories (hot, warm, cold)
- **Delete Items**: Users can delete only their own clothing items
- **Like System**: Like and unlike clothing items from other users
- **Item Preview**: Full-size image preview with item details

### UI/UX Features

- **Modal System**: Clean modal interfaces for forms and item previews
- **Loading States**: Smooth user experience during API calls
- **Error Handling**: User-friendly error messages and fallbacks

## Tech Stack

- **React 18** - Component-based UI library with hooks
- **React Router DOM** - Client-side routing and navigation
- **Context API** - State management for user authentication and temperature unit
- **CSS3** - Custom styling with Flexbox layout
- **Vite** - Modern build tool and development server
- **JavaScript ES6+** - Modern JavaScript features

## Component Architecture

### Main Components

- **App** - Main application component with routing
- **Header** - Navigation bar with user authentication
- **Main** - Homepage with weather display and clothing recommendations
- **Profile** - User profile page with personal clothing items
- **Footer** - Application footer

### Modal Components

- **AddItemModal** - Form for adding new clothing items
- **LoginModal** - User login form
- **RegisterModal** - User registration form
- **EditProfileModal** - Profile editing form
- **ItemModal** - Clothing item preview with details

### Utility Components

- **ProtectedRoute** - Route wrapper for authenticated users only
- **ItemCard** - Individual clothing item display card
- **WeatherCard** - Current weather information display
- **SideBar** - User profile sidebar with actions

## Project Structure

```
src/
├── components/           # React components
│   ├── App/             # Main application component
│   ├── Header/          # Navigation header
│   ├── Main/            # Homepage component
│   ├── Profile/         # User profile page
│   ├── ItemCard/        # Clothing item card
│   ├── WeatherCard/     # Weather display
│   ├── ProtectedRoute/  # Route protection
│   └── ...              # Modal and utility components
├── contexts/            # React Context providers
│   ├── CurrentUserContext.js
│   └── CurrentTemperatureUnitContext.js
├── utils/               # API calls and utilities
│   ├── api.js           # Clothing items API
│   ├── auth.js          # Authentication API
│   ├── weatherApi.js    # Weather data API
│   └── constants.js     # API keys and constants
├── assets/              # Images and icons
└── index.css           # Global styles
```

## API Integration

The frontend integrates with a backend API for:

- **User Authentication** - Registration, login, profile management
- **Clothing Items** - CRUD operations and like functionality
- **Weather Data** - Real-time weather information

**Backend Repository**: [se_project_express](https://github.com/nortonrd3/se_project_express)

## Installation and Setup

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager
- Weather API key (OpenWeatherMap)
- Running backend server

### Installation Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/nortonrd3/se_project_react.git
   cd se_project_react
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure API settings in `/src/utils/constants.js`:

   ```javascript
   export const APIkey = "your_weather_api_key_here";
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000`

### Backend Setup

Make sure to set up and run the backend server from the [se_project_express](https://github.com/nortonrd3/se_project_express) repository. The backend should be running on `http://localhost:3001` for full functionality.

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint for code quality checks

## Usage

### For New Users

1. Visit the application homepage
2. Allow browser location access for weather data
3. Browse clothing recommendations based on current weather
4. Sign up to access full features (adding items, likes, profile)

### For Registered Users

1. Log in with your credentials
2. View personalized clothing recommendations
3. Add your own clothing items with photos
4. Like items from other users
5. Manage your profile and wardrobe in the profile section
6. Toggle between Fahrenheit and Celsius temperature display

## Weather Categories

- **Hot**: 86°F+ (30°C+) - Summer clothing, t-shirts, shorts
- **Warm**: 66-85°F (19-29°C) - Light jackets, long pants, light layers
- **Cold**: Below 65°F (18°C) - Heavy coats, warm clothing, winter gear

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Links

- **Backend Repository**: [se_project_express](https://github.com/nortonrd3/se_project_express)
