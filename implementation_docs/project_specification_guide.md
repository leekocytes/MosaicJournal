# Project Specification Guide: Journaling App

## Overview

A modern, minimalistic journaling app with AI integration designed to provide users a seamless and personalized journaling experience.

## Target Platforms

- Initial launch: iOS
- Future support: Android

## Technology Stack

- **Frontend**: React Native, Expo
- **Backend**: Firebase Authentication, Firestore, Google Cloud Functions
- **AI Integration**: OpenAI API -> this will be handled in Google Cloud Function, with FE making requests to the function which will relay the request to OpenAI
- **UI Library**: React Native Paper (hybrid approach)

## Features and Functionalities

### User Authentication

- Firebase authentication for secure user login and registration.

### Journaling Features

- Create, edit, and delete journal entries.
- Organize entries into multiple journals (structured via Firestore).
- Mood tracking per journal entry.
- Tagging system for easy categorization and searching.
- Location metadata integration (optional).

### User Interface and Design

- Minimalistic, modern design.
- Subtle gradients and soft glow effects for a clean aesthetic.
- Responsive layout optimized for various screen sizes (iPhone, iPad).
- Avatar button with user initials for quick access to user preferences.
- Support for both dark and light modes.
- Emphasis on micro-interactions and haptic feedback to enhance user experience and joyfulness.

### AI Assistant Integration

- Chat-style AI interaction overlay, providing feedback and insights based on journal entries.
- AI context awareness using current journal entry text.

### App Views

- **Splash Screen**: Initial loading screen with branding.
- **Authentication Screens**: Registration and login.
- **Journal View**: Interface to write and view individual journal entries.
- **Entries List View**: Overview of all journal entries, sortable by date, mood, and tags.
- **Preferences View**: User settings for customization.

## Data Structure

Firestore collections:

- **Users**: User-specific data (preferences, profile).
- **Journals**: Each journal belonging to a user, containing multiple entries.
- **Entries**: Individual journal entries, containing metadata (mood, tags, location).

## Future Enhancements

- Porting to Android platform.
- Advanced analytics of mood tracking and tagging.
- Enhanced AI functionalities, like personalized suggestions and mood trend analysis.

## UI Implementation Strategy

### Hybrid Approach with React Native Paper

- **Core Components**: Utilize React Native Paper for common UI elements such as buttons, inputs, cards, and navigation components to ensure consistency and accelerate development.

- **Custom Components**: Develop custom components for specialized features unique to the app, such as the mood selector, journal entry editor, and any other UI elements requiring a distinct look and feel.

- **Theming**: Leverage React Native Paper's theming system to maintain visual consistency while customizing the appearance to match the minimalistic design goals.

- **Component Extension**: When needed, extend React Native Paper components rather than building from scratch to maintain consistency while adding custom functionality.

- **Performance Optimization**: Selectively import only the necessary components from React Native Paper to minimize bundle size and optimize performance.

This hybrid approach balances development efficiency with design flexibility, allowing for rapid implementation while maintaining the unique aesthetic vision of the app.

## Development Considerations

- Ensure data privacy and security compliance.
- Focus on performance and lightweight app structure for optimal user experience.
- Consider potential impacts of third-party libraries on app performance and bundle size.
