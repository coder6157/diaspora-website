# Email Domain Setup Guide

Your website now uses `hello@diaspora.com` for contact emails. To make this work, you need to:

## Step 1: Register a Domain

Choose and register a domain name:
- **diaspora.com** (if available)
- **diaspora.io** (tech-friendly alternative)
- **diaspora.health** (healthcare-focused)
- **getdiaspora.com** (alternative)

**Recommended registrars:**
- [Namecheap](https://www.namecheap.com) - ~$10-15/year
- [Google Domains](https://domains.google) - ~$12/year
- [Cloudflare](https://www.cloudflare.com/products/registrar) - ~$8-10/year (at-cost pricing)

## Step 2: Set Up Email Forwarding

Once you have the domain, set up email forwarding to `tklane@usc.edu`:

### Option A: Using Your Domain Registrar (Easiest)
Most registrars offer free email forwarding:
1. Log into your domain registrar
2. Go to Email/DNS settings
3. Add email forwarding: `hello@yourdomain.com` → `tklane@usc.edu`
4. Save changes (takes 5-30 minutes to propagate)

### Option B: Using Cloudflare (Free)
If you use Cloudflare for DNS:
1. Go to Cloudflare Dashboard → Email Routing
2. Enable Email Routing
3. Add destination: `tklane@usc.edu`
4. Create address: `hello@yourdomain.com` → forwards to destination

### Option C: Using Google Workspace (Professional)
For a full email solution ($6/user/month):
1. Sign up for Google Workspace
2. Verify domain ownership
3. Create `hello@yourdomain.com` mailbox
4. Or set up forwarding to `tklane@usc.edu`

### Option D: Using Zoho Mail (Free Tier)
Free for up to 5 users:
1. Sign up at [zoho.com/mail](https://www.zoho.com/mail)
2. Add your domain
3. Verify domain via DNS
4. Create `hello@yourdomain.com` and forward to `tklane@usc.edu`

## Step 3: Update Website Email Addresses

After setting up forwarding, update the email in your code:

**File: `components/CTA.tsx`**
- Change `hello@diaspora.com` to `hello@yourdomain.com`

**File: `components/Hero.tsx`** (if you add email links)
- Use the same domain

## Step 4: Test

1. Send a test email to `hello@yourdomain.com`
2. Verify it forwards to `tklane@usc.edu`
3. Check spam folder if needed

## Quick Start Recommendation

**Fastest path:**
1. Register domain on Namecheap (~$12/year)
2. Use Namecheap's free email forwarding
3. Forward `hello@yourdomain.com` → `tklane@usc.edu`
4. Done in 15 minutes!

---

**Note:** The website currently uses `hello@diaspora.com` as a placeholder. Update it to your actual domain once registered.
