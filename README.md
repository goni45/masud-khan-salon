# Masud Khan Men's Salon - Website

আপনার সেলুনের জন্য আধুনিক, অ্যানিমেটেড ওয়েবসাইট যা সম্পূর্ণভাবে আপনার নিয়ন্ত্রণে!

## 🌟 বৈশিষ্ট্য

✅ **প্রিমিয়াম ডিজাইন** - ব্ল্যাক & গোল্ড কালার স্কিম
✅ **মসৃণ অ্যানিমেশন** - Framer Motion দিয়ে তৈরি
✅ **সম্পূর্ণ CMS** - Notion থেকে সব কন্টেন্ট ম্যানেজ করুন
✅ **অনলাইন বুকিং** - Supabase দিয়ে নিরাপদ ডাটা স্টোরেজ
✅ **মোবাইল রেসপন্সিভ** - সব ডিভাইসে পারফেক্ট
✅ **দ্রুত লোডিং** - Vercel এ হোস্টেড
✅ **সম্পূর্ণ ফ্রি** - কোন লুকানো খরচ নেই

## 🛠️ টেক স্ট্যাক

- **Frontend**: Next.js 16, React, TypeScript, Tailwind CSS, Framer Motion
- **CMS**: Notion API
- **Database**: Supabase (PostgreSQL)
- **Hosting**: Vercel
- **Domain**: Free Vercel subdomain

## 📋 শুরু করুন

### 1️⃣ প্রয়োজনীয় সেটআপ

#### Notion Setup
- `NOTION_SETUP.md` ফাইল দেখুন
- Notion database তৈরি করুন
- API token এবং Database ID সংগ্রহ করুন

#### Supabase Setup
- `SUPABASE_SETUP.md` ফাইল দেখুন
- Account তৈরি করুন
- Database initialize করুন
- API keys সংগ্রহ করুন

### 2️⃣ Environment Variables সেট করুন

`.env.local` ফাইলে নিচের তথ্যগুলো যোগ করুন:

```env
# Notion
NOTION_API_KEY=your_notion_token_here
NOTION_DATABASE_ID=your_database_id_here

# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here

# Salon Info
NEXT_PUBLIC_SALON_NAME=Masud Khan Men's Salon
NEXT_PUBLIC_SALON_PHONE=01304-603705
NEXT_PUBLIC_SALON_WHATSAPP=01304-603705
NEXT_PUBLIC_SALON_FACEBOOK=https://www.facebook.com/MasudKhanMensSalonMymensingh
NEXT_PUBLIC_SALON_MESSENGER=https://www.facebook.com/messages/t/560803953781207
```

### 3️⃣ স্থানীয়ভাবে টেস্ট করুন

```bash
npm install
npm run dev
```

`http://localhost:3000` এ ভিজিট করুন

### 4️⃣ Vercel এ Deploy করুন

দেখুন: `DEPLOYMENT.md`

## 📱 সাইট সেকশন

### 1. **Hero Section**
- ব্র্যান্ড প্রেজেন্টেশন
- দারুণ টাইপোগ্রাফি অ্যানিমেশন
- দ্রুত বুকিং অপশন

### 2. **Services Section**
- সব সার্ভিসের গ্রিড
- ক্যাটাগরি ফিল্টার
- মূল্য এবং সময়কাল দেখান
- "Book Now" বাটন

### 3. **Gallery Section**
- Before/After ট্রান্সফরমেশন
- Lightbox ভিউ
- Facebook লিঙ্ক

### 4. **Booking Form**
- নাম, ফোন, ডেট, টাইম
- সার্ভিস এবং ব্যারবার সিলেকশন
- Special requests
- সফল বুকিং কনফার্মেশন

### 5. **Footer**
- Contact information
- Social links
- Opening hours
- Quick links

## 🎯 Notion এ কন্টেন্ট ম্যানেজ করুন

### Services এডিট করুন
1. Notion → Masud Khan Salon CMS এ যান
2. একটি নতুন row যোগ করুন
3. **Type** = "Service"
4. সার্ভিসের নাম, দাম, বর্ণনা পূরণ করুন
5. সেভ করুন - আপনার ওয়েবসাইটে দেখা যাবে!

### Barbers এডিট করুন
1. নতুন row যোগ করুন
2. **Type** = "Barber"
3. নাম, specialty, অভিজ্ঞতা লেখুন
4. সেভ করুন

### Gallery আপডেট করুন
1. নতুন row যোগ করুন
2. **Type** = "Gallery"
3. Before এবং After ইমেজ URL যোগ করুন
4. সেভ করুন

## 💻 ডেভেলপমেন্ট

### ফোল্ডার স্ট্রাকচার

```
masud-khan-salon/
├── app/
│   ├── page.tsx          # মেইন পেজ
│   ├── layout.tsx        # Layout
│   └── globals.css       # Global styles
├── components/
│   └── sections/
│       ├── Header.tsx
│       ├── Hero.tsx
│       ├── Services.tsx
│       ├── Gallery.tsx
│       ├── BookingForm.tsx
│       └── Footer.tsx
├── lib/
│   ├── notion/
│   │   ├── notion-client.ts
│   │   └── get-services.ts
│   └── supabase/
│       ├── client.ts
│       ├── bookings.ts
│       └── init-database.sql
├── .env.local           # Environment variables
├── NOTION_SETUP.md      # Notion গাইড
├── SUPABASE_SETUP.md    # Supabase গাইড
└── DEPLOYMENT.md        # Vercel deployment গাইড
```

### কমান্ড

```bash
# ডেভেলপমেন্ট শুরু করুন
npm run dev

# বিল্ড করুন
npm run build

# প্রোডাকশন রান করুন
npm start

# লিন্টিং
npm run lint
```

## 🚀 Deployment

### Vercel এ Deploy করুন (সুপারিশকৃত)

1. আপনার কোড GitHub এ পুশ করুন
2. Vercel এ গিয়ে নতুন প্রজেক্ট তৈরি করুন
3. GitHub repository সিলেক্ট করুন
4. Environment variables যোগ করুন
5. Deploy করুন!

বিস্তারিত জন্য `DEPLOYMENT.md` দেখুন।

## 📊 Booking ডেটা দেখুন

সব booking requests Supabase এ সংরক্ষিত থাকে:

1. Supabase Dashboard এ যান
2. Table Editor → bookings
3. সব appointments দেখুন
4. Status আপডেট করুন (pending → confirmed)

## 🔧 সমস্যা সমাধান

### "Notion not configured" মেসেজ দেখছি?
- `.env.local` ফাইলে API keys ঠিকমতো সেট করেছেন কি?
- Notion database ID সঠিক কি?

### Bookings save হচ্ছে না?
- Supabase URL এবং API key ঠিক কি?
- Supabase Dashboard এ bookings table তৈরি হয়েছে?

### ওয়েবসাইট slow চলছে?
- Vercel deployment এ যান
- Analytics দেখুন
- Image অপটিমাইজেশন করুন

## 📞 সাপোর্ট

যদি কোনো সমস্যা হয়:
1. এই README দুইবার পড়ুন
2. Setup guides (`NOTION_SETUP.md`, `SUPABASE_SETUP.md`) চেক করুন
3. Console errors দেখুন (F12 → Console)

## 📈 পরবর্তী আপগ্রেড

ভবিষ্যতে এগুলো যোগ করা যায়:
- WhatsApp notification
- Email confirmation
- Online payment integration
- Customer login
- Admin dashboard
- SMS reminder

## 📜 লাইসেন্স

এটি আপনার সেলুনের জন্য বিশেষভাবে তৈরি। যেকোনো সময় কাস্টমাইজ করতে পারেন!

---

**আপনার ওয়েবসাইট প্রস্তুত! Happy booking!** 🎉

প্রশ্ন থাকলে আমাকে জানান। আমি সবসময় সাহায্য করতে প্রস্তুত! 💪
