# Complete Domain & Email Setup Guide

This guide will help you:
1. Register a domain (diaspora.com or similar)
2. Set up email forwarding (hello@yourdomain.com)
3. Connect it to Calendly for professional scheduling

---

## Step 1: Register Your Domain

### Option A: diaspora.com (if available)
**Best option if available** - Most professional and memorable

### Option B: Alternative domains
- `diaspora.io` - Tech-friendly, ~$30/year
- `diaspora.health` - Healthcare-focused, ~$30/year  
- `getdiaspora.com` - Good alternative, ~$12/year
- `diasporahq.com` - Professional, ~$12/year

### Where to Register:

**Recommended: Namecheap** (Easiest for beginners)
1. Go to [namecheap.com](https://www.namecheap.com)
2. Search for your desired domain
3. Add to cart and checkout (~$10-15/year)
4. Complete purchase

**Alternative: Cloudflare** (Cheapest, but more technical)
1. Go to [cloudflare.com](https://www.cloudflare.com/products/registrar)
2. Search and register (at-cost pricing, ~$8-10/year)
3. More technical setup required

**Alternative: Google Domains** (Simple, reliable)
1. Go to [domains.google](https://domains.google)
2. Search and register (~$12/year)

---

## Step 2: Set Up Email Forwarding

Once you have your domain, set up email forwarding to `tklane@usc.edu`:

### If you used Namecheap:

1. **Log into Namecheap**
2. Go to **Domain List** → Click **Manage** next to your domain
3. Go to **Advanced DNS** tab
4. Scroll to **Email Forwarding** section
5. Click **Add Forwarder**
6. Create: `hello@yourdomain.com` → forwards to `tklane@usc.edu`
7. Save

**That's it!** Emails to `hello@yourdomain.com` will now forward to your USC email.

### If you used Cloudflare:

1. **Log into Cloudflare Dashboard**
2. Select your domain
3. Go to **Email Routing** (in left sidebar)
4. Click **Get Started**
5. Add destination: `tklane@usc.edu`
6. Create address: `hello@yourdomain.com` → forwards to destination
7. Verify your email (check USC inbox for verification email)

### If you used Google Domains:

1. **Log into Google Domains**
2. Click on your domain
3. Go to **Email** section
4. Click **Add email alias**
5. Create: `hello@yourdomain.com` → forwards to `tklane@usc.edu`
6. Verify email

---

## Step 3: Set Up Calendly Account

1. **Go to [calendly.com](https://calendly.com)**
2. **Sign up** (use `tklane@usc.edu` for now, we'll change it later)
3. **Choose Free plan** (perfect to start)
4. **Connect your calendar:**
   - Click **Integrations** → **Calendar**
   - Connect Google Calendar, Outlook, or iCloud
   - This prevents double-booking

5. **Create Event Type:**
   - Click **Event Types** → **New Event Type**
   - Name: **"Diaspora Demo"**
   - Duration: **30 minutes**
   - Description: "Learn how Diaspora can transform your reimbursement process"
   - **Enable Video Conferencing:**
     - Choose **Zoom** (if you have Zoom account)
     - Or **Google Meet** (free, works with Google Calendar)
     - Or **Microsoft Teams**
   - Set your availability (business hours, timezone)
   - Save

6. **Get your Calendly link:**
   - Go to your event type
   - Click **Share** → Copy the link
   - It will look like: `https://calendly.com/your-username/diaspora-demo`

---

## Step 4: Connect Custom Email Domain to Calendly

Once your domain email is working:

1. **In Calendly:**
   - Go to **Settings** → **Email**
   - Click **Add Email Address**
   - Enter: `hello@yourdomain.com`
   - Click **Verify**

2. **Verify Domain Ownership:**
   - Calendly will give you DNS records to add
   - Go to your domain registrar (Namecheap/Cloudflare)
   - Add the DNS records Calendly provides
   - Wait 5-30 minutes for DNS to propagate
   - Go back to Calendly and click **Verify**

3. **Set as Default:**
   - Once verified, set `hello@yourdomain.com` as your default email
   - Now all Calendly notifications will come from your domain email!

---

## Step 5: Update Your Website

1. **Update Calendly Link:**
   - Open `app/schedule/page.tsx`
   - Find line 30: `data-url="https://calendly.com/your-username/diaspora-demo"`
   - Replace with your actual Calendly link
   - Save

2. **Update Email Addresses:**
   - Open `components/CTA.tsx`
   - Find `mailto:hello@diaspora.com`
   - Replace with `mailto:hello@yourdomain.com`
   - Save

3. **Deploy:**
   - Commit and push changes
   - Deploy to Vercel

---

## Quick Checklist

- [ ] Register domain (diaspora.com or alternative)
- [ ] Set up email forwarding: `hello@yourdomain.com` → `tklane@usc.edu`
- [ ] Test email forwarding (send test email)
- [ ] Create Calendly account
- [ ] Create "Diaspora Demo" event type with video
- [ ] Connect calendar to Calendly
- [ ] Get Calendly link
- [ ] Update website with Calendly link
- [ ] (Optional) Connect custom email domain to Calendly
- [ ] Test booking flow end-to-end

---

## Testing

1. **Test Email:**
   - Send email to `hello@yourdomain.com`
   - Check that it arrives at `tklane@usc.edu`

2. **Test Scheduling:**
   - Visit `yourwebsite.com/schedule`
   - Book a test meeting
   - Verify you receive email notification
   - Check calendar for event with video link

---

## Cost Breakdown

- **Domain:** ~$10-15/year (one-time annual cost)
- **Email Forwarding:** FREE (included with domain)
- **Calendly:** FREE (free plan is perfect to start)
- **Total:** ~$10-15/year

---

## Need Help?

If you get stuck:
1. Domain registration issues → Contact your registrar's support
2. Email forwarding not working → Check DNS propagation (can take up to 48 hours)
3. Calendly setup → Calendly has great support docs

**You're all set!** Once complete, you'll have:
✅ Professional domain email (`hello@yourdomain.com`)
✅ Video call scheduling on your website
✅ Automatic calendar integration
✅ Professional booking experience
