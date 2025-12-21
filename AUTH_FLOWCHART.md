# BoostCart Authentication Flow Chart

## Overview
This document provides a comprehensive flowchart of the entire authentication system using Better-Auth v1.4.6.

---

## 1. Sign Up Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                        USER VISITS /signup                       │
└────────────────────────────────┬────────────────────────────────┘
                                 │
                                 ▼
┌─────────────────────────────────────────────────────────────────┐
│                   Sign Up Form Displayed                         │
│   - Name field                                                   │
│   - Email field                                                  │
│   - Password field                                               │
│   - Google Sign-In button                                        │
│   - Magic Link option                                            │
└────────────────────────────────┬────────────────────────────────┘
                                 │
                    ┌────────────┴────────────┐
                    │                         │
                    ▼                         ▼
        ┌───────────────────┐     ┌─────────────────────┐
        │  Email/Password   │     │   Google OAuth or   │
        │    Sign Up        │     │    Magic Link       │
        └─────────┬─────────┘     └──────────┬──────────┘
                  │                           │
                  ▼                           │
    ┌──────────────────────────┐             │
    │ authClient.signUp({      │             │
    │   name, email, password  │             │
    │ })                       │             │
    └────────────┬─────────────┘             │
                 │                            │
                 ▼                            │
    ┌──────────────────────────┐             │
    │ Better-Auth creates:     │             │
    │ - User record            │             │
    │ - Account (credential)   │             │
    │ - Password (scrypt hash) │             │
    │ - Verification token     │             │
    └────────────┬─────────────┘             │
                 │                            │
                 ▼                            │
    ┌──────────────────────────┐             │
    │ Trigger email            │             │
    │ verification callback    │             │
    └────────────┬─────────────┘             │
                 │                            │
                 ▼                            │
    ┌──────────────────────────┐             │
    │ Send verification email  │             │
    │ via Resend (HTML)        │             │
    └────────────┬─────────────┘             │
                 │                            │
                 ▼                            │
    ┌──────────────────────────┐             │
    │ User sees success msg    │             │
    │ "Check email to verify"  │             │
    └────────────┬─────────────┘             │
                 │                            │
                 └────────────┬───────────────┘
                              │
                              ▼
                 ┌────────────────────────┐
                 │ User clicks email link │
                 │ /api/auth/verify-email │
                 └────────────┬───────────┘
                              │
                              ▼
                 ┌────────────────────────┐
                 │ Better-Auth validates  │
                 │ token & updates:       │
                 │ - emailVerified: true  │
                 │ - emailVerifiedAt      │
                 └────────────┬───────────┘
                              │
                              ▼
                 ┌────────────────────────┐
                 │ Redirect to /signin    │
                 │ with success message   │
                 └────────────────────────┘
```

---

## 2. Sign In Flow (Email/Password)

```
┌─────────────────────────────────────────────────────────────────┐
│                        USER VISITS /signin                       │
└────────────────────────────────┬────────────────────────────────┘
                                 │
                                 ▼
┌─────────────────────────────────────────────────────────────────┐
│                   Initial View: Social Options                   │
│   - Google Sign-In button                                        │
│   - Email input field                                            │
│   - "Sign in with Email" button                                  │
└────────────────────────────────┬────────────────────────────────┘
                                 │
                                 ▼
                    ┌────────────┴────────────┐
                    │    User enters email    │
                    │   clicks "Sign in with  │
                    │        Email"           │
                    └────────────┬────────────┘
                                 │
                                 ▼
┌─────────────────────────────────────────────────────────────────┐
│              Email Stored → Password Form Displayed              │
│   - Email (pre-filled)                                           │
│   - Password field                                               │
│   - "Forgot password?" button                                    │
│   - "Sign in" button                                             │
│   - "Email me a magic link" button                               │
└────────────────────────────────┬────────────────────────────────┘
                                 │
                    ┌────────────┴────────────┐
                    │                         │
                    ▼                         ▼
        ┌───────────────────┐     ┌─────────────────────┐
        │  User enters      │     │  User clicks        │
        │  password &       │     │  "Forgot password?" │
        │  clicks Sign In   │     │                     │
        └─────────┬─────────┘     └──────────┬──────────┘
                  │                           │
                  ▼                           │
    ┌──────────────────────────┐             │
    │ signIn.email({           │             │
    │   email, password        │             │
    │ })                       │             │
    └────────────┬─────────────┘             │
                 │                            │
                 ▼                            │
    ┌──────────────────────────┐             │
    │ Better-Auth validates:   │             │
    │ - User exists            │             │
    │ - Password match (scrypt)│             │
    │ - Email verified?        │             │
    └────────────┬─────────────┘             │
                 │                            │
        ┌────────┴────────┐                  │
        │                 │                  │
        ▼                 ▼                  │
┌──────────────┐  ┌──────────────────┐      │
│ Email NOT    │  │ Email Verified & │      │
│ Verified     │  │ Password Correct │      │
└──────┬───────┘  └────────┬─────────┘      │
       │                   │                 │
       ▼                   ▼                 │
┌──────────────┐  ┌──────────────────┐      │
│ Show error & │  │ Create Session:  │      │
│ trigger auto │  │ - Session record │      │
│ resend logic │  │ - Session token  │      │
└──────┬───────┘  └────────┬─────────┘      │
       │                   │                 │
       ▼                   ▼                 │
┌──────────────┐  ┌──────────────────┐      │
│ Check last   │  │ Set cookie &     │      │
│ sent time    │  │ redirect to /    │      │
└──────┬───────┘  └──────────────────┘      │
       │                                     │
       ▼                                     │
┌──────────────┐                             │
│ Resend if    │                             │
│ >5 min ago   │                             │
└──────────────┘                             │
                                             │
                   ┌─────────────────────────┘
                   │ (Forgot Password Flow)
                   ▼
      ┌────────────────────────────┐
      │ Automatically call          │
      │ userForgotPassword({email}) │
      └────────────┬────────────────┘
                   │
                   ▼
      ┌────────────────────────────┐
      │ Show loading screen        │
      │ "Sending reset link..."    │
      └────────────┬────────────────┘
                   │
                   ▼
      ┌────────────────────────────┐
      │ auth.api.requestPassword   │
      │ Reset() creates token &    │
      │ triggers sendResetPassword │
      └────────────┬────────────────┘
                   │
                   ▼
      ┌────────────────────────────┐
      │ Send HTML email via Resend │
      │ with reset link            │
      └────────────┬────────────────┘
                   │
          ┌────────┴────────┐
          │                 │
          ▼                 ▼
  ┌──────────────┐  ┌──────────────┐
  │   Success    │  │    Error     │
  │   Screen:    │  │   Screen:    │
  │ ✓ Check email│  │ ✗ Try again  │
  └──────┬───────┘  └──────┬───────┘
         │                 │
         └────────┬────────┘
                  │
                  ▼
      ┌────────────────────────────┐
      │ "Back to Sign In" button   │
      │ resets to password form    │
      └────────────────────────────┘
```

---

## 3. Google OAuth Flow

```
┌─────────────────────────────────────────────────────────────────┐
│              User clicks "Sign in with Google"                   │
└────────────────────────────────┬────────────────────────────────┘
                                 │
                                 ▼
┌─────────────────────────────────────────────────────────────────┐
│                   Redirect to Google OAuth                       │
│   - Client ID validation                                         │
│   - Scope: email, profile                                        │
└────────────────────────────────┬────────────────────────────────┘
                                 │
                                 ▼
┌─────────────────────────────────────────────────────────────────┐
│              User authenticates with Google                      │
└────────────────────────────────┬────────────────────────────────┘
                                 │
                                 ▼
┌─────────────────────────────────────────────────────────────────┐
│              Google redirects back with code                     │
│                  /api/auth/callback/google                       │
└────────────────────────────────┬────────────────────────────────┘
                                 │
                                 ▼
┌─────────────────────────────────────────────────────────────────┐
│              Better-Auth processes OAuth:                        │
│   - Exchange code for tokens                                     │
│   - Fetch user profile from Google                               │
└────────────────────────────────┬────────────────────────────────┘
                                 │
                    ┌────────────┴────────────┐
                    │                         │
                    ▼                         ▼
        ┌───────────────────┐     ┌─────────────────────┐
        │  Existing User    │     │    New User         │
        │  (email matches)  │     │                     │
        └─────────┬─────────┘     └──────────┬──────────┘
                  │                           │
                  ▼                           ▼
    ┌──────────────────────────┐  ┌─────────────────────┐
    │ Link Google account to   │  │ Create new User:    │
    │ existing User:           │  │ - email             │
    │ - Create Account record  │  │ - name              │
    │ - providerId: "google"   │  │ - image             │
    │ - No password            │  │ - emailVerified:true│
    └────────────┬─────────────┘  └──────────┬──────────┘
                 │                           │
                 │                           ▼
                 │              ┌─────────────────────┐
                 │              │ Create Account:     │
                 │              │ - providerId:google │
                 │              │ - providerAccountId │
                 │              │ - No password       │
                 │              └──────────┬──────────┘
                 │                         │
                 └────────────┬────────────┘
                              │
                              ▼
                 ┌────────────────────────┐
                 │ Create Session         │
                 │ Set cookie             │
                 └────────────┬───────────┘
                              │
                              ▼
                 ┌────────────────────────┐
                 │ Redirect to /          │
                 │ (or callbackURL)       │
                 └────────────────────────┘
```

---

## 4. Magic Link Flow

```
┌─────────────────────────────────────────────────────────────────┐
│       User clicks "Email me a magic link" on sign-in page       │
└────────────────────────────────┬────────────────────────────────┘
                                 │
                                 ▼
┌─────────────────────────────────────────────────────────────────┐
│              signIn.magicLink({ email })                         │
└────────────────────────────────┬────────────────────────────────┘
                                 │
                                 ▼
┌─────────────────────────────────────────────────────────────────┐
│              Better-Auth creates magic link token                │
│   - Generates unique token                                       │
│   - Stores in Verification table                                 │
│   - Expires in 5 minutes                                         │
└────────────────────────────────┬────────────────────────────────┘
                                 │
                                 ▼
┌─────────────────────────────────────────────────────────────────┐
│              Trigger sendMagicLink callback                      │
└────────────────────────────────┬────────────────────────────────┘
                                 │
                                 ▼
┌─────────────────────────────────────────────────────────────────┐
│   Auto-verify email if user exists and not verified:            │
│   - Update emailVerified: true                                   │
│   - Update emailVerifiedAt: now                                  │
└────────────────────────────────┬────────────────────────────────┘
                                 │
                                 ▼
┌─────────────────────────────────────────────────────────────────┐
│              Send HTML email via Resend                          │
│   - "Sign in to BoostCart" subject                               │
│   - Magic link button                                            │
│   - Expires in 5 minutes notice                                  │
└────────────────────────────────┬────────────────────────────────┘
                                 │
                                 ▼
┌─────────────────────────────────────────────────────────────────┐
│              Toast: "Magic link sent! Check your email."         │
└────────────────────────────────┬────────────────────────────────┘
                                 │
                                 ▼
┌─────────────────────────────────────────────────────────────────┐
│              User clicks link in email                           │
│              /api/auth/magic-link/verify?token=xxx               │
└────────────────────────────────┬────────────────────────────────┘
                                 │
                                 ▼
┌─────────────────────────────────────────────────────────────────┐
│              Better-Auth validates token:                        │
│   - Token exists in Verification table                           │
│   - Not expired (< 5 minutes)                                    │
│   - Not already used                                             │
└────────────────────────────────┬────────────────────────────────┘
                                 │
                    ┌────────────┴────────────┐
                    │                         │
                    ▼                         ▼
        ┌───────────────────┐     ┌─────────────────────┐
        │   Valid Token     │     │   Invalid/Expired   │
        └─────────┬─────────┘     └──────────┬──────────┘
                  │                           │
                  ▼                           ▼
    ┌──────────────────────────┐  ┌─────────────────────┐
    │ Create/Update Session    │  │ Show error page     │
    │ Set session cookie       │  │ "Link expired"      │
    │ Mark token as used       │  │                     │
    └────────────┬─────────────┘  └─────────────────────┘
                 │
                 ▼
    ┌──────────────────────────┐
    │ Redirect to /            │
    │ User is signed in        │
    └──────────────────────────┘
```

---

## 5. Password Reset Flow

```
┌─────────────────────────────────────────────────────────────────┐
│   User clicks "Forgot password?" on sign-in (email entered)     │
└────────────────────────────────┬────────────────────────────────┘
                                 │
                                 ▼
┌─────────────────────────────────────────────────────────────────┐
│              handleForgotPassword() called automatically         │
│   - No navigation, stays on sign-in page                         │
│   - Shows loading screen                                         │
└────────────────────────────────┬────────────────────────────────┘
                                 │
                                 ▼
┌─────────────────────────────────────────────────────────────────┐
│              userForgotPassword({ email })                       │
│              → auth.api.requestPasswordReset()                   │
└────────────────────────────────┬────────────────────────────────┘
                                 │
                                 ▼
┌─────────────────────────────────────────────────────────────────┐
│              Better-Auth:                                        │
│   - Generates reset token                                        │
│   - Stores in Verification table                                 │
│   - Expires in 1 hour                                            │
└────────────────────────────────┬────────────────────────────────┘
                                 │
                                 ▼
┌─────────────────────────────────────────────────────────────────┐
│              Trigger sendResetPassword callback                  │
└────────────────────────────────┬────────────────────────────────┘
                                 │
                                 ▼
┌─────────────────────────────────────────────────────────────────┐
│              Send HTML email via Resend                          │
│   - "Reset your password" subject                                │
│   - Reset link with token                                        │
│   - Expires in 1 hour notice                                     │
└────────────────────────────────┬────────────────────────────────┘
                                 │
                                 ▼
┌─────────────────────────────────────────────────────────────────┐
│              Show success/error screen (no navigation)           │
│   Success: ✓ Check email + email address shown                  │
│   Error: ✗ Error message + "Try Again" button                   │
└────────────────────────────────┬────────────────────────────────┘
                                 │
                                 ▼
┌─────────────────────────────────────────────────────────────────┐
│              User clicks link in email                           │
│              /reset-password?token=xxx                           │
└────────────────────────────────┬────────────────────────────────┘
                                 │
                                 ▼
┌─────────────────────────────────────────────────────────────────┐
│              Reset Password Form                                 │
│   - Token pre-filled (hidden)                                    │
│   - New password field                                           │
│   - Confirm password field                                       │
└────────────────────────────────┬────────────────────────────────┘
                                 │
                                 ▼
┌─────────────────────────────────────────────────────────────────┐
│              User submits new password                           │
└────────────────────────────────┬────────────────────────────────┘
                                 │
                                 ▼
┌─────────────────────────────────────────────────────────────────┐
│              userResetPassword({ token, password })              │
│              → auth.api.resetPassword()                          │
└────────────────────────────────┬────────────────────────────────┘
                                 │
                                 ▼
┌─────────────────────────────────────────────────────────────────┐
│              Better-Auth:                                        │
│   - Validates token (not expired, not used)                      │
│   - Hashes new password with scrypt                              │
│   - Updates Account.password                                     │
│   - Marks token as used                                          │
└────────────────────────────────┬────────────────────────────────┘
                                 │
                    ┌────────────┴────────────┐
                    │                         │
                    ▼                         ▼
        ┌───────────────────┐     ┌─────────────────────┐
        │     Success       │     │      Error          │
        └─────────┬─────────┘     └──────────┬──────────┘
                  │                           │
                  ▼                           ▼
    ┌──────────────────────────┐  ┌─────────────────────┐
    │ Toast: "Password reset!" │  │ Toast: Error msg    │
    │ Redirect to /signin      │  │ Stay on form        │
    └──────────────────────────┘  └─────────────────────┘
```

---

## 6. Change Password Flow (Authenticated User)

```
┌─────────────────────────────────────────────────────────────────┐
│              User navigates to /account/settings                 │
└────────────────────────────────┬────────────────────────────────┘
                                 │
                                 ▼
┌─────────────────────────────────────────────────────────────────┐
│              Check if user has password (credential account)     │
└────────────────────────────────┬────────────────────────────────┘
                                 │
                    ┌────────────┴────────────┐
                    │                         │
                    ▼                         ▼
        ┌───────────────────┐     ┌─────────────────────┐
        │  Has Password     │     │  No Password        │
        │  (email/password) │     │  (OAuth user)       │
        └─────────┬─────────┘     └──────────┬──────────┘
                  │                           │
                  ▼                           ▼
    ┌──────────────────────────┐  ┌─────────────────────┐
    │ Show "Change Password"   │  │ Show "Set Password" │
    │ form:                    │  │ form:               │
    │ - Current password       │  │ - New password only │
    │ - New password           │  │                     │
    │ - Confirm password       │  │                     │
    └────────────┬─────────────┘  └──────────┬──────────┘
                 │                           │
                 ▼                           ▼
    ┌──────────────────────────┐  ┌─────────────────────┐
    │ updatePassword({         │  │ setPassword({       │
    │   currentPassword,       │  │   newPassword       │
    │   newPassword            │  │ })                  │
    │ })                       │  └──────────┬──────────┘
    └────────────┬─────────────┘             │
                 │                            │
                 ▼                            ▼
    ┌──────────────────────────┐  ┌─────────────────────┐
    │ auth.api.changePassword({│  │ auth.api.setPassword│
    │   headers: session,      │  │ ({                  │
    │   body: {                │  │   headers: session, │
    │     currentPassword,     │  │   body: {           │
    │     newPassword,         │  │     newPassword     │
    │     revokeOtherSessions  │  │   }                 │
    │   }                      │  │ })                  │
    │ })                       │  │                     │
    └────────────┬─────────────┘  └──────────┬──────────┘
                 │                           │
                 ▼                           ▼
    ┌──────────────────────────┐  ┌─────────────────────┐
    │ Better-Auth:             │  │ Better-Auth:        │
    │ - Verify current pwd     │  │ - Create Account    │
    │ - Hash new pwd (scrypt)  │  │   with credential   │
    │ - Update Account.password│  │ - Hash pwd (scrypt) │
    │ - Optionally revoke      │  │ - Set password      │
    │   other sessions         │  │                     │
    └────────────┬─────────────┘  └──────────┬──────────┘
                 │                           │
                 └────────────┬──────────────┘
                              │
                              ▼
                 ┌────────────────────────┐
                 │ Toast: "Password       │
                 │ updated successfully!" │
                 └────────────────────────┘
```

---

## 7. Email Verification Resend Flow

```
┌─────────────────────────────────────────────────────────────────┐
│   User tries to sign in with unverified email                   │
└────────────────────────────────┬────────────────────────────────┘
                                 │
                                 ▼
┌─────────────────────────────────────────────────────────────────┐
│              Better-Auth rejects: "Email not verified"           │
└────────────────────────────────┬────────────────────────────────┘
                                 │
                                 ▼
┌─────────────────────────────────────────────────────────────────┐
│              checkAndResendVerification(email)                   │
└────────────────────────────────┬────────────────────────────────┘
                                 │
                                 ▼
┌─────────────────────────────────────────────────────────────────┐
│              Check Verification table for recent emails          │
└────────────────────────────────┬────────────────────────────────┘
                                 │
                    ┌────────────┴────────────┐
                    │                         │
                    ▼                         ▼
        ┌───────────────────┐     ┌─────────────────────┐
        │  Sent < 5 min ago │     │  Sent > 5 min ago   │
        │                   │     │  or never sent      │
        └─────────┬─────────┘     └──────────┬──────────┘
                  │                           │
                  ▼                           ▼
    ┌──────────────────────────┐  ┌─────────────────────┐
    │ Toast: "Verification     │  │ Generate new token  │
    │ email already sent"      │  │ & send email        │
    └──────────────────────────┘  └──────────┬──────────┘
                                              │
                                              ▼
                                 ┌────────────────────────┐
                                 │ Toast: "New            │
                                 │ verification email     │
                                 │ sent"                  │
                                 └────────────────────────┘
```

---

## 8. Session Management

```
┌─────────────────────────────────────────────────────────────────┐
│                      Every Authenticated Request                 │
└────────────────────────────────┬────────────────────────────────┘
                                 │
                                 ▼
┌─────────────────────────────────────────────────────────────────┐
│              Better-Auth middleware checks session cookie        │
└────────────────────────────────┬────────────────────────────────┘
                                 │
                    ┌────────────┴────────────┐
                    │                         │
                    ▼                         ▼
        ┌───────────────────┐     ┌─────────────────────┐
        │  Valid Session    │     │  No/Invalid Session │
        └─────────┬─────────┘     └──────────┬──────────┘
                  │                           │
                  ▼                           ▼
    ┌──────────────────────────┐  ┌─────────────────────┐
    │ Lookup Session in DB:    │  │ Redirect to /signin │
    │ - Match token            │  │                     │
    │ - Check expiry           │  │                     │
    │ - Load User data         │  │                     │
    └────────────┬─────────────┘  └─────────────────────┘
                 │
                 ▼
    ┌──────────────────────────┐
    │ Attach user to request   │
    │ context                  │
    └────────────┬─────────────┘
                 │
                 ▼
    ┌──────────────────────────┐
    │ useSession() hook returns│
    │ current user data        │
    └──────────────────────────┘
```

---

## 9. Sign Out Flow

```
┌─────────────────────────────────────────────────────────────────┐
│              User clicks "Sign Out" button                       │
└────────────────────────────────┬────────────────────────────────┘
                                 │
                                 ▼
┌─────────────────────────────────────────────────────────────────┐
│              signOut()                                           │
└────────────────────────────────┬────────────────────────────────┘
                                 │
                                 ▼
┌─────────────────────────────────────────────────────────────────┐
│              Better-Auth:                                        │
│   - Delete Session record from DB                                │
│   - Clear session cookie                                         │
└────────────────────────────────┬────────────────────────────────┘
                                 │
                                 ▼
┌─────────────────────────────────────────────────────────────────┐
│              Redirect to /signin                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## Database Schema

### Core Tables (Better-Auth)

**User**
- id (primary key)
- email (unique)
- name
- image
- emailVerified (boolean)
- emailVerifiedAt (timestamp)
- createdAt
- updatedAt

**Account**
- id (primary key)
- userId (foreign key → User)
- providerId (e.g., "credential", "google")
- providerAccountId
- password (hashed with scrypt, only for credential provider)
- accessToken
- refreshToken
- expiresAt
- createdAt
- updatedAt

**Session**
- id (primary key)
- userId (foreign key → User)
- token (unique session token)
- expiresAt
- ipAddress
- userAgent
- createdAt
- updatedAt

**Verification**
- id (primary key)
- identifier (email)
- value (token)
- expiresAt
- createdAt
- Used for: email verification, password reset, magic links

---

## Security Features

### Password Hashing
- **Algorithm**: scrypt (handled by Better-Auth internally)
- **Never** use bcrypt or manual hashing
- Better-Auth ensures proper salt and iterations

### Token Management
- **Email Verification**: Long-lived tokens
- **Password Reset**: 1-hour expiration
- **Magic Links**: 5-minute expiration
- **Sessions**: Configurable expiration (default: 7 days)

### Email Sending
- **Provider**: Resend
- **HTML Templates**: Styled, responsive emails
- **Non-blocking**: Emails sent without awaiting (prevents timing attacks)

### Rate Limiting
- Verification emails: Max 1 per 5 minutes per email
- Handled in `checkAndResendVerification()`

---

## Key API Endpoints (Better-Auth)

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/api/auth/sign-up` | POST | Create account (email/password) |
| `/api/auth/sign-in` | POST | Sign in (email/password) |
| `/api/auth/sign-out` | POST | Sign out (delete session) |
| `/api/auth/callback/google` | GET | OAuth callback handler |
| `/api/auth/verify-email` | GET | Verify email token |
| `/api/auth/magic-link/verify` | GET | Verify magic link token |
| `/api/auth/session` | GET | Get current session |

---

## Environment Variables Required

```env
# Better-Auth
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Database
DATABASE_URL=postgresql://...

# Email (Resend)
RESEND_API_KEY=re_...
EMAIL_FROM=BoostCart <noreply@boostcart.com>

# OAuth (Google)
AUTH_GOOGLE_ID=...
AUTH_GOOGLE_SECRET=...
```

---

## Implementation Notes

1. **Better-Auth handles all password hashing** - Never use bcrypt directly
2. **Session management is automatic** - Cookie-based with DB persistence
3. **Email verification is enforced** - Users must verify before signing in with password
4. **OAuth users auto-verified** - Google sign-in sets emailVerified: true
5. **Magic links auto-verify** - Using magic link verifies the email
6. **Forgot password stays on page** - No navigation, shows inline success/error
7. **All emails use HTML templates** - Styled with inline CSS for compatibility

---

## Error Handling

### Common Errors
- "Email not verified" → Auto-trigger resend logic
- "Invalid credentials" → Generic message (security)
- "Token expired" → Show error, offer to resend
- "User not found" → Generic message for forgot password (security)

### User-Facing Messages
- Always friendly and actionable
- Never reveal if email exists (forgot password always succeeds)
- Clear next steps provided

---

*Last Updated: December 21, 2025*
*Better-Auth Version: 1.4.6*
