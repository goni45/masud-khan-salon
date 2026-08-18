# 🚀 Quick Start Checklist

আপনার সেলুন ওয়েবসাইট লাইভ করতে এই ধাপগুলো follow করুন।

---

## Phase 1: Setup (আজই করুন - 30 মিনিট)

### ✅ Notion Setup
- [ ] https://www.notion.so এ গিয়ে account তৈরি করুন (না থাকলে)
- [ ] https://www.notion.so/profile/integrations এ যান
- [ ] "New integration" ক্লিক করুন
  - Name: `Masud Khan Salon`
  - Workspace সিলেক্ট করুন
- [ ] **Internal Integration Token** কপি করুন
- [ ] একটি Notion page তৈরি করুন: `Masud Khan Salon CMS`
- [ ] Table database তৈরি করুন (Inline Table)
- [ ] NOTION_SETUP.md থেকে সব properties যোগ করুন
- [ ] Sample data (Services, Barbers, etc) এন্ট্রি করুন
- [ ] Database আপনার integration এ share করুন
- [ ] Database ID কপি করুন (URL থেকে)

### ✅ Supabase Setup
- [ ] https://supabase.com এ গিয়ে account তৈরি করুন (GitHub দিয়ে)
- [ ] "New project" তৈরি করুন
  - Name: `masud-khan-salon`
  - Strong password সেট করুন
  - Region: Singapore
  - Plan: Free tier
- [ ] Project ready হওয়ার জন্য 2-3 মিনিট অপেক্ষা করুন
- [ ] Settings → API এ যান
- [ ] নিচের keys কপি করুন:
  - Project URL
  - anon public key
  - service_role key (Show ক্লিক করুন)
- [ ] SQL Editor এ যান
- [ ] init-database.sql এর SQL কোড পেস্ট করুন
- [ ] Run করুন

### ✅ Environment Variables সেট করুন
- [ ] `.env.local` ফাইল খুলুন
- [ ] নিচের values পূরণ করুন:
  ```
  NOTION_API_KEY=secret_xxxxxxxxxxxx
  NOTION_DATABASE_ID=xxxxxxxxxxxxxxxx
  NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
  NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiI...
  SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiI...
  ```
- [ ] Save করুন

### ✅ স্থানীয়ভাবে টেস্ট করুন
```bash
cd /c/animated\ web\ for\ salon/masud-khan-salon
npm run dev
```
- [ ] http://localhost:3000 এ ভিজিট করুন
- [ ] চেক করুন:
  - হোম পেজ লোড হয়েছে?
  - Services দেখা যাচ্ছে?
  - Booking form কাজ করছে?
  - কোনো error নেই?

---

## Phase 2: GitHub এ Push করুন (5 মিনিট)

### ✅ GitHub Repository তৈরি করুন
- [ ] GitHub.com এ লগইন করুন
- [ ] "New repository" ক্লিক করুন
- [ ] Name: `masud-khan-salon`
- [ ] Public করুন
- [ ] Repository তৈরি করুন

### ✅ কোড Push করুন
```bash
cd /c/animated\ web\ for\ salon/masud-khan-salon

git init
git add .
git commit -m "Initial commit: Masud Khan Salon website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/masud-khan-salon.git
git push -u origin main
```

- [ ] GitHub এ গিয়ে কোড দেখা যাচ্ছে?

---

## Phase 3: Vercel এ Deploy করুন (5 মিনিট)

### ✅ Vercel Project তৈরি করুন
- [ ] Vercel.com এ গিয়ে account তৈরি করুন (GitHub দিয়ে)
- [ ] "Add New" → "Project" ক্লিক করুন
- [ ] GitHub repository import করুন
- [ ] `masud-khan-salon` সিলেক্ট করুন
- [ ] **Deploy** ক্লিক করুন
- [ ] Deployment complete হওয়ার জন্য অপেক্ষা করুন (2-3 মিনিট)

### ✅ Environment Variables Vercel এ সেট করুন
- [ ] Vercel Dashboard এ যান
- [ ] Settings → Environment Variables এ যান
- [ ] `.env.local` থেকে সব variables কপি করুন এবং যোগ করুন
- [ ] Save করুন
- [ ] Vercel automatically redeploy করবে

### ✅ লাইভ চেক করুন
- [ ] Vercel থেকে domain URL কপি করুন (যেমন: `masud-khan-salon.vercel.app`)
- [ ] ওয়েবসাইট ভিজিট করুন
- [ ] সব কিছু কাজ করছে?

---

## Phase 4: শেষ পরীক্ষা (5 মিনিট)

### ✅ Functionality চেক করুন
- [ ] Hero section সুন্দর দেখাচ্ছে?
- [ ] Services গ্রিড দেখা যাচ্ছে?
- [ ] Gallery images দেখা যাচ্ছে?
- [ ] Booking form কাজ করছে?
- [ ] একটি test booking করুন
- [ ] Supabase Dashboard এ booking data দেখা যাচ্ছে?
- [ ] Facebook লিঙ্ক কাজ করছে?
- [ ] WhatsApp বাটন কাজ করছে?

### ✅ Performance চেক করুন
- [ ] মোবাইলে ভিজিট করুন - সব ঠিক দেখাচ্ছে?
- [ ] Vercel Analytics চেক করুন (slow pages আছে?)
- [ ] Page loading time ভালো?

### ✅ Content আপডেট করুন
- [ ] Notion এ আরও services যোগ করুন
- [ ] আরও barbers যোগ করুন
- [ ] Gallery images যোগ করুন
- [ ] ওয়েবসাইট refresh করুন - নতুন কন্টেন্ট দেখা যাচ্ছে?

---

## Phase 5: শেয়ার করুন! 🎉

### ✅ সবাইকে জানান!
- [ ] Facebook এ পোস্ট করুন: আপনার নতুন ওয়েবসাইটের লিঙ্ক
- [ ] WhatsApp status এ শেয়ার করুন
- [ ] Google Business Profile এ ওয়েবসাইট URL যোগ করুন
- [ ] স্টোরে প্রিন্ট করে লাগান: QR code + ওয়েবসাইট URL
- [ ] বন্ধুদের কাছে পাঠান

---

## 🆘 যদি কিছু কাজ না করে?

### "Services দেখা যাচ্ছে না?"
1. `.env.local` এ API keys ঠিক কি?
2. Notion database সঠিক data দিয়ে পূর্ণ?
3. Browser console এ errors আছে? (F12 দেখুন)

### "Bookings save হচ্ছে না?"
1. Supabase dashboard এ bookings table আছে?
2. API key correct?
3. Network tab এ request fail হচ্ছে?

### "Vercel এ deploy fail হয়েছে?"
1. Deployments tab এ logs দেখুন
2. GitHub এ সব files push হয়েছে?
3. Environment variables সব আছে?

---

## 📞 হেল্প প্রয়োজন?

Documents পড়ুন:
- `README.md` - সম্পূর্ণ গাইড
- `NOTION_SETUP.md` - Notion configuration
- `SUPABASE_SETUP.md` - Database setup
- `DEPLOYMENT.md` - Vercel deployment

---

## ✨ তৈরি!

আপনার **Masud Khan Men's Salon** ওয়েবসাইট এখন লাইভ! 🚀

এই চেকলিস্টের সব আইটেম complete হলে আপনি done! 

**প্রতিদিন নতুন features যোগ করুন, Notion এ কন্টেন্ট আপডেট করুন, এবং গ্রাহক বাড়ান!** 💪

---

**Happy Grooming! ✂️**
