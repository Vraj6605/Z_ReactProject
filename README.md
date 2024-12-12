# Android Components Overview

## 1. Activities
An activity represents a single screen in an app. It is where users interact with the app.  
The activity lifecycle includes states such as `onCreate()`, `onStart()`, `onResume()`, `onPause()`, `onStop()`, and `onDestroy()`.

## 2. Services
A service runs in the background to perform long-running operations, such as downloading files or playing music.  
There are two types of services:
- **Started services**: Run in the background indefinitely.
- **Bound services**: Interact with other components.

## 3. Broadcast Receivers
A broadcast receiver listens for broadcast messages from other apps or the system itself.  
It responds to events like network changes, incoming messages, or battery status.

## 4. Content Providers
A content provider manages access to structured data (like databases and files) and allows sharing data between different apps.  
Examples include accessing contacts or photos from other apps.

## 5. Intents
An intent is used for communication between components. It can either be explicit (specifying a target component) or implicit (declaring an action).  
Intents are used to start activities, services, or send broadcasts.

## 6. Views and ViewGroups
- **Views** are UI elements like buttons, text fields, and images that interact with the user.  
- **ViewGroups** are containers for organizing views, such as `LinearLayout` and `RelativeLayout`.

## 7. Fragments
Fragments are portions of an activity's UI that can be reused across multiple activities.  
They have their own lifecycle and help create flexible UIs for devices with different screen sizes.

## 8. App Widgets
App widgets are small views that can be placed on the home screen or lock screen.  
They allow users to interact with specific app functionalities without opening the app itself.

## 9. Notifications
Notifications are messages that inform the user about events and appear in the notification bar or as pop-ups.  
Users can interact with notifications to open the app, dismiss it, or take action on it.
