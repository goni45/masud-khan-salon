# Vercel Deployment গাইড

## শুরু করার আগে

✅ GitHub account
✅ Vercel account
✅ Notion API token
✅ Supabase credentials
✅ কোড GitHub এ আপ্লোড করেছেন

---

## Step 1: GitHub এ কোড আপলোড করুন

```bash
# নতুন repository তৈরি করুন GitHub এ
# তারপর:

cd /c/animated\ web\ for\ salon/masud-khan-salon

git init
git add .
git commit -m "Initial commit: Masud Khan Salon website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/masud-khan-salon.git
git push -u origin main
```

---

## Step 2: Vercel এ Deploy করুন

### অপশন A: ওয়েব ইন্টারফেস (সবচেয়ে সহজ)

1. **Vercel এ যান**: https://vercel.com
2. **"New Project"** ক্লিক করুন
3. GitHub repository সিলেক্ট করুন (`masud-khan-salon`)
4. **"Deploy"** ক্লিক করুন
5. 2-3 মিনিট অপেক্ষা করুন

### অপশন B: CLI দিয়ে

```bash
npm install -g vercel
cd /c/animated\ web\ for\ salon/masud-khan-salon
vercel
# প্রম্পট ফলো করুন
```

---

## Step 3: Environment Variables যোগ করুন

1. Vercel Dashboard এ আপনার প্রজেক্ট খুলুন
2. **"Settings"** → **"Environment Variables"** এ যান
3. নিচের variables যোগ করুন:

```
NOTION_API_KEY=your_token_here
NOTION_DATABASE_ID=your_id_here
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key_here
SUPABASE_SERVICE_ROLE_KEY=your_key_here
NEXT_PUBLIC_SALON_NAME=Masud Khan Men's Salon
NEXT_PUBLIC_SALON_PHONE=01304-603705
NEXT_PUBLIC_SALON_WHATSAPP=01304-603705
NEXT_PUBLIC_SALON_FACEBOOK=https://www.facebook.com/MasudKhanMensSalonMymensingh
NEXT_PUBLIC_SALON_MESSENGER=https://www.facebook.com/messages/t/560803953781207
```

4. **"Save"** ক্লিক করুন
5. Vercel স্বয়ংক্রিয়ভাবে redeploy করবে

---

## Step 4: কাস্টম ডোমেইন যোগ করুন (Optional)

### বিনামূল্যে Vercel subdomain
- ডিফল্টভাবে পাবেন: `masud-khan-salon.vercel.app`

### আপনার নিজস্ব ডোমেইন
1. কোথাও থেকে ডোমেইন কিনুন (GoDaddy, Namecheap, etc.)
2. Vercel → Settings → Domains এ যান
3. ডোমেইন যোগ করুন
4. DNS settings আপডেট করুন (Vercel দেখাবে)

---

## Step 5: Verify করুন

১. ওয়েবসাইটে যান (যেমন: `masud-khan-salon.vercel.app`)
२. চেক করুন:
   - হোম পেজ লোড হয়েছে?
   - এনিমেশন কাজ করছে?
   - বুকিং ফর্ম কাজ করছে?
   - সার্ভিসেস দেখা যাচ্ছে?

---

## আপডেট করুন

### লোকাল কোডে পরিবর্তন করার পর:

```bash
cd /c/animated\ web\ for\ salon/masud-khan-salon

git add .
git commit -m "আপনার পরিবর্তনের বর্ণনা"
git push origin main
```

Vercel স্বয়ংক্রিয়ভাবে detect করবে এবং redeploy করবে!

---

## Notion থেকে আপডেট করুন

Notion এ কিছু পরিবর্তন করলে:
1. আপনার ওয়েবসাইটে গিয়ে **কোন git push দরকার নেই**!
2. পেজ refresh করুন - নতুন ডেটা দেখা যাবে
3. (কিছু পরিবর্তনের জন্য 1-2 মিনিট সময় লাগতে পারে)

---

## Booking ডেটা দেখুন

1. Supabase Dashboard এ যান
2. Table Editor → bookings
3. সব bookings দেখুন
4. প্রতিটি booking এ নাম, ফোন, তারিখ দেখা যাবে

---

## Performance অপটিমাইজেশন

### Vercel Analytics দেখুন:
1. Dashboard → Analytics
2. Page performance check করুন
3. Slow pages optimize করুন

### Lighthouse Score বাড়ান:
```bash
npm run build
npm run lint
```

---

## Troubleshooting

### Deployment fail হয়েছে?
- Build logs দেখুন (Deployments tab)
- Environment variables সঠিক কি?
- GitHub এ কোড push হয়েছে?

### ওয়েবসাইট 404 দেখাচ্ছে?
- Vercel dashboard চেক করুন
- Redeploy করুন
- Browser cache clear করুন

### Notion data দেখা যাচ্ছে না?
- API token সঠিক কি?
- Database ID সঠিক কি?
- Notion database public করেছেন?

---

## সফল Deployment Checklist

- [x] GitHub এ code push করেছেন
- [x] Vercel project তৈরি করেছেন
- [x] Environment variables সেট করেছেন
- [x] Website load হচ্ছে
- [x] কন্টেন্ট দেখা যাচ্ছে
- [x] Bookings save হচ্ছে
- [x] Social links কাজ করছে

---

## লাইভ ওয়েবসাইট!

আপনার সেলুনের ওয়েবসাইট এখন লাইভ! 🎉

শেয়ার করুন:
- Facebook এ লিঙ্ক পোস্ট করুন
- WhatsApp এ পাঠান
- Google Business Profile এ যোগ করুন
- স্টোর এ প্রিন্ট করে লাগান

---

**চলুন! আপনার ওয়েবসাইট লাইভ করি!** 🚀
