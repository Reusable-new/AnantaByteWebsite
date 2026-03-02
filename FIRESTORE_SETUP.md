## ⚠️ FIRESTORE SECURITY RULES SETUP

If you're getting errors when trying to add testimonials or inquiries, you likely need to update your Firestore security rules.

### Quick Fix (Development):

1. Go to Firebase Console → Firestore → Rules
2. Replace the default rules with:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow authenticated users to read and write to inquiries collection
    match /inquiries/{doc=**} {
      allow read, write: if request.auth != null;
    }
    
    // Allow authenticated users to read and write to testimonials collection
    match /testimonials/{doc=**} {
      allow read: if true;  // Everyone can read testimonials
      allow write: if request.auth != null;  // Only authenticated users can write
    }
  }
}
```

3. Click "Publish"
4. Try adding a testimonial again

### What This Does:
- ✅ Allows authenticated admins to add inquiries and testimonials
- ✅ Allows everyone to read testimonials from the website
- ✅ Secure by default - only logged-in users can write

### Alternative (Even Easier for Testing):

If you want to allow all write operations (not recommended for production):

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
```

⚠️ **WARNING**: This is NOT secure. Change this before going to production!

### Still Getting Errors?

Check your browser console (F12 → Console tab) for the exact error message and share it for debugging.
