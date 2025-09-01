# 🔥 Konfiguracja Firebase dla Badań Klinicznych

## 📝 KROK 1: Utwórz projekt Firebase

1. Idź na: https://console.firebase.google.com/
2. Kliknij "Create a project" (Utwórz projekt)
3. Nazwa projektu: `neurocentrum-badania` (lub inna)
4. Wyłącz Google Analytics (nie potrzebne)
5. Kliknij "Create project"

## 🔧 KROK 2: Skonfiguruj Firestore Database

1. W konsoli Firebase, kliknij "Firestore Database"
2. Kliknij "Create database"
3. Wybierz "Start in test mode" (na razie)
4. Wybierz lokalizację: `europe-west3` (Frankfurt - najbliżej Polski)
5. Kliknij "Done"

## 🔑 KROK 3: Pobierz konfigurację

1. W konsoli Firebase, kliknij ikonę ⚙️ (Settings)
2. Wybierz "Project settings"
3. Przewiń w dół do sekcji "Your apps"
4. Kliknij ikonę `</>` (Web)
5. Nazwa aplikacji: `Neurocentrum Admin`
6. NIE zaznaczaj "Firebase Hosting"
7. Kliknij "Register app"
8. **SKOPIUJ KONFIGURACJĘ** (będzie wyglądać tak):

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyC...",
  authDomain: "twoj-projekt.firebaseapp.com",
  projectId: "twoj-projekt",
  storageBucket: "twoj-projekt.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123",
};
```

## 📝 KROK 4: Wklej konfigurację

1. Otwórz plik: `src/firebase/config.js`
2. Zastąp `firebaseConfig` swoimi danymi
3. Zapisz plik

## 🔒 KROK 5: Skonfiguruj reguły bezpieczeństwa

1. W Firestore Database, kliknij zakładkę "Rules"
2. Zastąp zawartość tym kodem:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Pozwól na wszystko w trybie testowym
    // UWAGA: Zmień to w produkcji!
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
```

3. Kliknij "Publish"

## ✅ GOTOWE!

Teraz Firebase jest skonfigurowany i gotowy do użycia!

## 🧪 Test połączenia

Po skonfigurowaniu, uruchom aplikację i sprawdź konsolę przeglądarki - nie powinno być błędów Firebase.
