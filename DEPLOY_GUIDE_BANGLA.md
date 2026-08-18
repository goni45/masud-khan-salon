# 🚀 আপনার ওয়েবসাইট Vercel এ Deploy করার সম্পূর্ণ গাইড

## ⚠️ গুরুত্বপূর্ণ

Vercel deployment শেষ ধাপ। এটা করলে আপনার ওয়েবসাইট লাইভ হবে!

---

## 📋 প্রয়োজনীয় জিনিস

✅ GitHub account (আপনার আছে: `goni45`)
✅ GitHub repository (আপনার আছে: `masud-khan-salon`)
✅ Vercel account (নতুন তৈরি করবেন)

---

## 🎯 ধাপে ধাপে নির্দেশনা

### **Step 1: Vercel Account তৈরি করুন**

1. https://vercel.com খুলুন
2. **"Sign Up"** ক্লিক করুন
3. **"Continue with GitHub"** ক্লিক করুন
4. GitHub authorization দিন
5. Email verify করুন

### **Step 2: Vercel এ নতুন Project তৈরি করুন**

1. Vercel Dashboard এ যান
2. **"Add New"** বাটনে hover করুন
3. **"Project"** ক্লিক করুন
4. GitHub repositories list দেখা যাবে
5. **`masud-khan-salon`** খুঁজুন এবং ক্লিক করুন
6. **"Import"** ক্লিক করুন

### **Step 3: Environment Variables যোগ করুন**

**এটা অত্যন্ত গুরুত্বপূর্ণ!**

1. Project settings এ যান
2. **"Environment Variables"** সেকশন খুঁজুন
3. নিচের প্রতিটি variable যোগ করুন:

```
Variable Name: NOTION_API_KEY
Value: ntn_b8644161834mFbfGzS0luiPtG68IOsdD04V1a3wMBGBbKp

Variable Name: NOTION_DATABASE_ID
Value: 3c02033b712a802aad67c50f7599dbc9

Variable Name: NEXT_PUBLIC_SUPABASE_URL
Value: https://fscecbofbiezdebwatrs.supabase.co

Variable Name: NEXT_PUBLIC_SUPABASE_ANON_KEY
Value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZzY2VjYm9mYmllemRlYndhdHJzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODcwNzk0NDgsImV4cCI6MjEwMjY1NTQ0OH0.XUs4mvWTs4OnAjAnZ4gXGH5334-TY3abrMkerBV-CKs

Variable Name: SUPABASE_SERVICE_ROLE_KEY
Value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZzY2VjYm9mYmllemRlYndhdHJzIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4NzA3OTQ0OCwiZXhwIjoyMTAyNjU1NDQ4fQ._RCMJc3qIfbH9RfemLzQoXqm4oYnlQZKnVR3gqao1YA
```

4. প্রতিটি variable এর পর **"Save"** ক্লিক করুন

### **Step 4: Deploy করুন**

1. সব variables save করার পরে
2. **"Deploy"** বাটন ক্লিক করুন
3. Vercel deployment শুরু হবে (progress দেখা যাবে)
4. **2-3 মিনিট অপেক্ষা করুন**

### **Step 5: ওয়েবসাইট লাইভ!**

Deployment complete হলে:

1. Vercel একটি URL দেবে, যেমন:
   ```
   https://masud-khan-salon.vercel.app
   ```

2. এই link এ ক্লিক করুন এবং আপনার সাইট দেখুন!

3. চেক করুন:
   - ✅ Home page load হয়েছে?
   - ✅ Services দেখা যাচ্ছে?
   - ✅ Booking form কাজ করছে?
   - ✅ Gallery দেখা যাচ্ছে?

---

## 📱 এখন শেয়ার করুন!

একবার লাইভ হলে:

```
1. Facebook এ পোস্ট করুন:
   "আমাদের নতুন অনলাইন বুকিং সিস্টেম চালু হয়েছে!
   https://masud-khan-salon.vercel.app"

2. WhatsApp এ বন্ধুদের পাঠান

3. Google Business Profile এ যোগ করুন

4. স্টোরে QR code + URL লাগান
```

---

## 🆘 যদি সমস্যা হয়?

### Deployment fail হলে:
- Vercel Dashboard এ Deployments tab দেখুন
- Build logs চেক করুন
- Environment variables সব আছে কি?

### Website slow চলছে:
- Vercel Analytics দেখুন
- First time slow থাকতে পারে (normal)

### Booking কাজ করছে না:
- Supabase dashboard চেক করুন
- Database table আছে কি?

---

## ✨ ব্যস! আপনার সাইট লাইভ!

এখন আপনি:
- ✅ Notion এ কন্টেন্ট এডিট করতে পারবেন
- ✅ Customers bookings নিতে পারবেন
- ✅ Supabase dashboard এ সব bookings দেখতে পারবেন

---

**প্রশ্ন থাকলে জিজ্ঞাসা করুন!** 💪

Happy Grooming! ✂️
