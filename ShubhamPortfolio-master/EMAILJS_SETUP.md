# EmailJS Setup Guide

This guide will help you set up EmailJS for your contact form to send emails directly without requiring a backend server.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your chosen provider
5. Note down your **Service ID** (e.g., `service_xxxxxxx`)

## Step 3: Create Email Template

1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template structure:

```
Subject: New Contact Form Message - {{subject}}

From: {{from_name}} ({{from_email}})

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Note down your **Template ID** (e.g., `template_xxxxxxx`)

## Step 4: Get Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (e.g., `user_xxxxxxxxxxxxxxxx`)

## Step 5: Update Your Code

Replace the placeholder values in `assets/js/modern-script.js`:

```javascript
// Line 131: Replace with your public key
emailjs.init("YOUR_PUBLIC_KEY");

// Line 174: Replace with your service and template IDs
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
```

## Step 6: Test Your Setup

1. Open your portfolio website
2. Fill out the contact form
3. Submit the form
4. Check your email for the message

## Troubleshooting

### Common Issues:

1. **"EmailJS is not defined" error**
   - Make sure the EmailJS script is loaded before your custom script
   - Check that the CDN link is correct

2. **"Service not found" error**
   - Verify your Service ID is correct
   - Make sure the service is active in your EmailJS dashboard

3. **"Template not found" error**
   - Verify your Template ID is correct
   - Make sure the template is published

4. **Emails not being sent**
   - Check your email service configuration
   - Verify your email provider settings
   - Check the browser console for error messages

## Free Tier Limits

- 200 emails per month
- 2 email services
- 2 email templates
- Basic support

## Upgrade Options

If you need more emails or features, EmailJS offers paid plans starting at $15/month.

## Security Notes

- Your public key is safe to use in client-side code
- Never expose your private keys or API secrets
- Consider adding rate limiting for production use
- Validate all form inputs on both client and server side

## Alternative Solutions

If you prefer not to use EmailJS, consider:

1. **Formspree** - Simple form handling
2. **Netlify Forms** - If hosting on Netlify
3. **Vercel Forms** - If hosting on Vercel
4. **Custom Backend** - Node.js, Python, PHP, etc.

---

Once you've completed this setup, your contact form will send emails directly to your inbox without requiring any backend server!

