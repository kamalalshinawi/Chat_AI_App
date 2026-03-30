# Chat AI App

A React Native mobile application where users sign in with Google and chat with an AI assistant powered by the Hugging Face Chat Completions API.

## Highlights

- Google Sign-In authentication gate before accessing chat
- Clean chat interface with sent/received message cards
- AI response typing animation for better UX
- Hugging Face API integration with clear runtime error messages
- Boot splash support for smoother app startup

## Tech Stack

- React Native `0.84.1` + TypeScript
- React `19`
- `@react-native-google-signin/google-signin`
- `axios`
- `react-native-config`
- `react-native-bootsplash`
- `react-native-size-matters`
- Firebase Messaging dependency scaffold (`@react-native-firebase/messaging`)

## Project Structure

```text
.
├── App.tsx
├── src
│   ├── api
│   │   └── httpRequest.ts
│   ├── components
│   │   ├── AppHeader.tsx
│   │   ├── EmptyChat.tsx
│   │   ├── InputMessage.tsx
│   │   ├── ResponseMessage.tsx
│   │   ├── SentMessageCard.tsx
│   │   └── TypingEffect.tsx
│   ├── features
│   │   ├── auth
│   │   │   └── GoogleSignIn.tsx
│   │   └── ImagePicker
│   │       └── CameraGallery.tsx
│   ├── notification
│   │   └── useNotifications.ts
│   └── screens
│       ├── AuthScreen.tsx
│       └── ChatScreen.tsx
└── android/app/google-services.json (local setup file)
```

## Prerequisites

- Node.js `>= 22.11.0`
- npm (or yarn)
- React Native development environment configured:
  - [Android setup](https://reactnative.dev/docs/set-up-your-environment?os=linux&platform=android)
  - [iOS setup](https://reactnative.dev/docs/set-up-your-environment?os=macos&platform=ios) (macOS only)

## Getting Started

### 1) Install dependencies

```bash
npm install
```

### 2) Configure environment variables

Create `.env` from the example template:

```bash
cp .env.example .env
```

Add your Hugging Face token in `.env`:

```env
TOKEN_KEY_HUGGING_FACE=hf_your_token_here
```

### 3) Configure Google Sign-In (Android)

1. Add your Firebase Android config file to:
   - `android/app/google-services.json`
2. Ensure `webClientId` in `src/features/auth/GoogleSignIn.tsx` matches your Google OAuth Web Client ID.
3. In Firebase/Google Cloud Console, configure:
   - Android package name: `com.kamal.chat`
   - SHA-1 / SHA-256 fingerprints for your debug/release keys

### 4) Start Metro

```bash
npm start
```

### 5) Run the app

```bash
# Android
npm run android
```

```bash
# iOS (macOS only)
cd ios && pod install && cd ..
npm run ios
```

## How It Works

1. `App.tsx` starts at `AuthScreen` until login succeeds.
2. `GoogleSignIn.tsx` handles OAuth and notifies the app on successful sign-in.
3. `ChatScreen.tsx` sends prompts through `src/api/httpRequest.ts`.
4. `httpRequest.ts` calls Hugging Face endpoint `https://router.huggingface.co/v1/chat/completions`.
5. Responses are rendered as assistant messages with typing animation.

## Available Scripts

- `npm start` - start Metro bundler
- `npm run android` - build/run Android app
- `npm run ios` - build/run iOS app
- `npm test` - run Jest tests
- `npm run lint` - run ESLint

## Troubleshooting

- **Missing Hugging Face token**
  - Ensure `.env` exists and includes `TOKEN_KEY_HUGGING_FACE`
  - Rebuild the app after editing `.env`

- **Hugging Face 401 error**
  - Verify token value and permissions
  - Confirm token is passed without extra quotes or duplicate `Bearer` prefix

- **Google Sign-In fails**
  - Confirm `google-services.json` belongs to the same Firebase project
  - Validate package name and SHA fingerprints
  - Check Google Play Services availability on emulator/device

- **Android build issues**
  - Clean and retry:
    ```bash
    cd android && ./gradlew clean && cd ..
    npm run android
    ```

## Security Notes

- Keep `.env` out of source control
- Do not commit production API keys
- Rotate tokens immediately if exposed

## Roadmap Ideas

- Persist authenticated session across app restarts
- Add sign-out action in chat header
- Save chat history locally or remotely
- Wire notification hook into active app flow

## License

This project currently has no explicit license. Add a `LICENSE` file before public/open-source distribution.
