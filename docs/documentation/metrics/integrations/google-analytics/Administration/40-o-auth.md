---
title: OAuth Authentication for Google Analytics
---
# OAuth Authentication for Google Analytics GA4 API 🔑

:::tip Recommended Approach
For most use cases, we recommend using a [Service Account](./30-service-account.md) instead of OAuth. Service Accounts provide more secure and scalable access to Google Analytics data. However, if you prefer OAuth or have specific requirements, follow the steps below.
:::

## Prerequisites
- A Google account with access to the desired Google Analytics properties

## OAuth Authentication Process

### 1. Initiate OAuth Flow
1. Click the "Connect to Google Analytics" button in Smaply
2. You will be redirected to Google's OAuth consent screen

### 2. Grant Permissions
1. Sign in with your Google account (if not already signed in)
2. Review the permissions requested by Smaply
3. Click "Allow" to grant access to your Google Analytics data

### 3. Verify Account Suitability
After granting permissions, Smaply will automatically check:

- If your account has access to any Google Analytics properties
- The list of properties you have access to
- Your permission level for each property (e.g., Read & Analyze, Edit, Manage Users, etc.)

:::note
Ensure you're using a Google account that has the necessary permissions for the Google Analytics properties you want to integrate with Smaply.
:::

## Troubleshooting

If you encounter issues during the OAuth process or property verification:

1. **No properties available**: Ensure your Google account has access to at least one Google Analytics property
2. **Insufficient permissions**: Check your access level in Google Analytics. You need at least "Read & Analyze" permissions for the properties you want to integrate
3. **OAuth errors**: Try clearing your browser cache and cookies, then attempt the process again


:::tip
If problems persist, contact your Google Analytics administrator to verify your account permissions, or reach out to Smaply support for assistance.
:::

:::warning Token Expiration
OAuth tokens have an expiration period. Smaply will handle token refresh automatically, but ensure you don't revoke the app's permissions in your Google account to maintain uninterrupted access.
:::