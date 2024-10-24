
# Social Media App

This is a simple **React Native** social media app built with **Expo**. The app features a dynamic user interface allowing users to browse recent posts, view popular users, and switch between different views such as home and profile.

## Features

- **Home View**: Displays recent posts, popular users, and a bottom navigation bar for switching between views.
- **Profile View**: Shows user profile details including posts, followers, following count, and recent posts.
- **Bottom Navigation Bar**: Quick navigation between `Home`, `Profile`, and placeholder icons for `Heart`, `Search`, and `Add Post`.
- **Dynamic Dots**: Adds a visual background effect with randomized dot positions in the Profile View.

## Installation

To run the app locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/social-media-app.git
   cd social-media-app
   ```

2. **Install dependencies**:

   Make sure you have `npm` and `Expo` installed on your system. Then run:

   ```bash
   npm install
   ```

3. **Run the app**:

   Start the app using Expo:

   ```bash
   expo start
   ```

4. **Open the app**:

   You can either open the app on your mobile device using the **Expo Go** app or on an Android/iOS emulator.

## Project Structure

- `App.js`: The main component rendering the app, switching between Home and Profile views.
- `components`: Contains reusable components like the **BottomNav** for navigation and **PostCard** for rendering posts.
- `assets`: Holds images or other static resources used in the app.
- `styles.js`: Centralized stylesheet using React Native's `StyleSheet` API.

## Screenshots

| Home View  | Profile View |
|------------|--------------|
| ![Home Screenshot](https://via.placeholder.com/200) | ![Profile Screenshot](https://via.placeholder.com/200) |

## Technologies

- **React Native**: Framework for building native apps using React.
- **Expo**: A platform to quickly develop and deploy React Native apps.
- **Feather Icons**: Icon library used for navigation icons.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
