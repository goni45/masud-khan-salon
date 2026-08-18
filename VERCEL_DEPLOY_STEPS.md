# Vercel Deployment Instructions

আপনার সাইট Vercel এ deploy করতে এই ধাপগুলো follow করুন:

## Step 1: Vercel এ যান

1. https://vercel.com এ যান
2. GitHub দিয়ে login করুন (যদি না থাকে account তৈরি করুন)

## Step 2: New Project তৈরি করুন

1. Dashboard এ "Add New" → "Project" ক্লিক করুন
2. GitHub এ আপনার repository খুঁজুন: `masud-khan-salon`
3. "Import" ক্লিক করুন

## Step 3: Environment Variables যোগ করুন

Deploy করার আগে environment variables যোগ করুন:

1. "Environment Variables" সেকশনে যান
2. নিচের variables যোগ করুন:

```
NOTION_API_KEY = ntn_b8644161834mFbfGzS0luiPtG68IOsdD04V1a3wMBGBbKp
NOTION_DATABASE_ID = 3c02033b712a802aad67c50f7599dbc9
NEXT_PUBLIC_SUPABASE_URL = https://fscecbofbiezdebwatrs.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZzY2VjYm9mYmllemRlYndhdHJzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODcwNzk0NDgsImV4cCI6MjEwMjY1NTQ0OH0.XUs4mvWTs4OnAjAnZ4gXGH5334-TY3abrMkerBV-CKs
SUPABASE_SERVICE_ROLE_KEY = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZzY2VjYm9mYmllemRlYndhdHJzIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4NzA3OTQ0OCwiZXhwIjoyMTAyNjU1NDQ4fQ._RCMJc3qIfbH9RfemLzQoXqm4oYnlQZKnVR3gqao1YA
```

## Step 4: Deploy করুন

1. "Deploy" বাটন ক্লিক করুন
2. 2-3 মিনিট অপেক্ষা করুন

## Step 5: ওয়েবসাইট লাইভ!

Deploy complete হলে Vercel একটি URL দেবে, যেমন:
```
https://masud-khan-salon.vercel.app
```

এই লিঙ্কে ভিজিট করুন এবং আপনার সাইট দেখুন! 🎉

---

## লাইভ ওয়েবসাইট শেয়ার করুন!

✅ Facebook এ পোস্ট করুন
✅ WhatsApp এ পাঠান
✅ Google Business Profile এ যোগ করুন
✅ স্টোরে QR code লাগান
