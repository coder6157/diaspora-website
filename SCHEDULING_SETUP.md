# Video Call Scheduling Setup Guide

Your website now has a scheduling page at `/schedule` where visitors can book video calls directly. Here's how to set it up:

## Option 1: Calendly (Recommended - Free & Easy)

### Step 1: Create Calendly Account
1. Go to [calendly.com](https://calendly.com) and sign up (free)
2. Choose the **Free** plan (perfect for getting started)

### Step 2: Connect Your Calendar
1. Connect your Google Calendar, Outlook, or iCloud calendar
2. This prevents double-booking

### Step 3: Create an Event Type
1. Click **"Event Types"** → **"New Event Type"**
2. Name it: **"Diaspora Demo"** or **"Product Demo"**
3. Set duration: **30 minutes** (or your preference)
4. Add description about Diaspora
5. Enable **"Video Conferencing"** → Choose **Zoom**, **Google Meet**, or **Microsoft Teams**
6. Set your availability (business hours, timezone)
7. Save

### Step 4: Get Your Calendly Link
1. Go to your event type
2. Click **"Share"** → Copy the link
3. It will look like: `https://calendly.com/your-username/diaspora-demo`

### Step 5: Update Your Website
1. Open `app/schedule/page.tsx`
2. Find this line:
   ```tsx
   data-url="https://calendly.com/your-username/diaspora-demo"
   ```
3. Replace with your actual Calendly link
4. Save and deploy

### Step 6: Set Up Email Notifications
1. In Calendly → **Settings** → **Notifications**
2. Add your email (`tklane@usc.edu` or `hello@diaspora.com` once set up)
3. Enable email notifications for new bookings

**Done!** Visitors can now schedule calls directly from your website.

---

## Option 2: Cal.com (Open Source Alternative)

### Step 1: Sign Up
1. Go to [cal.com](https://cal.com) and sign up (free)
2. Or self-host for more control

### Step 2: Create Event Type
1. Create a new event type
2. Enable video conferencing
3. Get your booking link

### Step 3: Update Website
Replace the Calendly embed with Cal.com embed code in `app/schedule/page.tsx`

---

## Option 3: HubSpot Meetings (Free)

### Step 1: Create HubSpot Account
1. Sign up at [hubspot.com](https://www.hubspot.com) (free)
2. Go to **Sales** → **Meetings**

### Step 2: Create Meeting Link
1. Create a new meeting link
2. Connect your calendar
3. Enable video (Zoom/Google Meet)
4. Get your booking link

### Step 3: Update Website
Use HubSpot's embed code in your schedule page

---

## Custom Email Domain Integration

Once you have your email domain set up (`hello@diaspora.com`):

### With Calendly:
1. Go to Calendly → **Settings** → **Email**
2. Add your custom domain email
3. Verify domain ownership
4. Now bookings will come from `hello@diaspora.com`

### With Google Workspace:
1. Set up Google Workspace with your domain
2. Use Google Calendar for scheduling
3. Create booking page with Google Calendar appointment slots
4. Or use Calendly with your Google Workspace email

---

## Quick Start (5 Minutes)

**Fastest path to get scheduling working:**

1. **Sign up for Calendly** (free) → [calendly.com](https://calendly.com)
2. **Create event type** → "Diaspora Demo" (30 min, video enabled)
3. **Copy your Calendly link** → `https://calendly.com/your-username/diaspora-demo`
4. **Update** `app/schedule/page.tsx` line 30 with your link
5. **Deploy** → Done!

Visitors clicking "Schedule a Demo" will see your calendar and can book directly.

---

## Features You Get:

✅ **Video call links** automatically added to calendar invites  
✅ **Email notifications** when someone books  
✅ **Calendar sync** prevents double-booking  
✅ **Time zone detection** for international visitors  
✅ **Customizable** meeting types and durations  
✅ **Professional** booking experience  

---

## Testing

1. Visit `yourwebsite.com/schedule`
2. Try booking a test meeting
3. Check that you receive email notification
4. Verify video link is included in calendar invite

**That's it!** Your website now has professional video call scheduling built in.
