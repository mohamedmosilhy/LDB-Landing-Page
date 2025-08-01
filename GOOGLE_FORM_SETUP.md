# Google Form Setup Guide

This guide will help you connect your website's contact form to a Google Form for data collection.

## Step 1: Create a Google Form

1. Go to [forms.google.com](https://forms.google.com)
2. Click "Create a new form"
3. Add the following questions:
   - **Name** (Short answer)
   - **Email** (Short answer)
   - **Message** (Paragraph)

## Step 2: Get Your Form URL and Entry IDs

1. **Get the Form URL:**

   - Click "Send" in your Google Form
   - Click the "Link" tab
   - Copy the URL (it should look like: `https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform`)

2. **Get Entry IDs:**
   - Right-click on your form and select "View page source"
   - Press `Ctrl+F` and search for "entry."
   - You'll find entries like `entry.1234567890`, `entry.0987654321`, etc.
   - Note down which entry ID corresponds to which field (name, email, message)

## Step 3: Update the Configuration

Your Google Form is already configured! The configuration file `src/constants/googleFormConfig.js` has been updated with your form details:

```javascript
export const GOOGLE_FORM_CONFIG = {
  // Your Google Form URL
  formUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSeAElA2xOzaOMtsMEaZ3ZMDqE3c52bG93QAsMTAh5YdVuyHDA/formResponse",

  // Entry IDs for your form fields
  fieldIds: {
    name: "entry.2005620554", // Name field entry ID
    email: "entry.1045781291", // Email field entry ID
    message: "entry.839337160", // Message field entry ID
  },

  // Customize messages if needed
  messages: {
    success: "Thank you! Your message has been sent successfully.",
    error: "There was an error sending your message. Please try again.",
    required: "Please fill in all required fields.",
  },
};
```

**Note:** If the entry IDs don't work correctly, you can find the exact IDs by:

1. Opening your Google Form in a browser
2. Right-clicking and selecting "View page source"
3. Searching for "entry." to find the correct entry IDs

## Step 4: Test the Form

1. Run your development server: `npm run dev`
2. Fill out the contact form on your website
3. Submit the form
4. Check your Google Form responses to see if the data was received

## How It Works

The form submission uses a hidden iframe technique to bypass CORS restrictions that Google Forms has. When a user submits the form:

1. The form data is validated
2. A hidden iframe is created
3. The form data is submitted to Google Forms through the iframe
4. The form is reset and a success message is shown
5. The iframe is cleaned up

## Troubleshooting

- **Form not submitting:** Check that your entry IDs are correct
- **CORS errors:** The iframe method should handle this automatically
- **No data received:** Verify your Google Form URL is correct and the form is published

## Alternative: Using Google Apps Script

If you need more control over the form submission, you can also use Google Apps Script:

1. Create a Google Apps Script project
2. Set up a web app that receives form data
3. Update the form submission to use the Apps Script URL instead

This method provides better error handling and more customization options.
