# Supabase Database Setup Guide

## এই গাইড ফলো করুন Supabase সেটআপ করতে

### Step 1: Supabase Account তৈরি করুন

1. এই লিঙ্কে যান: https://supabase.com
2. **"Start your project"** ক্লিক করুন
3. GitHub account দিয়ে sign up করুন (সহজ)

---

### Step 2: New Project তৈরি করুন

1. **"New project"** ক্লিক করুন
2. তথ্য পূরণ করুন:
   - **Organization:** আপনার GitHub username
   - **Project name:** `masud-khan-salon`
   - **Database password:** শক্তিশালী পাসওয়ার্ড দিন (এটা মনে রাখবেন!)
   - **Region:** Singapore বা সবচেয়ে কাছের region
   - **Plan:** Free tier (pricing এ যান এবং Free সিলেক্ট করুন)
3. **"Create new project"** ক্লিক করুন
4. 2-3 মিনিট অপেক্ষা করুন (project setup হতে সময় লাগবে)

---

### Step 3: API Keys সংগ্রহ করুন

Project ready হলে:

1. বাম পাশের মেনু থেকে **"Settings"** (gear icon) এ যান
2. **"API"** ক্লিক করুন
3. নিচের তথ্যগুলো কপি করুন:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public** key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **service_role** key (Show ক্লিক করুন) → `SUPABASE_SERVICE_ROLE_KEY`

4. এই তথ্যগুলো `.env.local` ফাইলে সেট করুন

---

### Step 4: Database Table তৈরি করুন

1. বাম পাশের মেনু থেকে **"SQL Editor"** এ যান
2. **"New query"** ক্লিক করুন
3. নিচের SQL কোডটি পেস্ট করুন:

```sql
-- Create bookings table
CREATE TABLE IF NOT EXISTS bookings (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  customer_name TEXT NOT NULL,
  customer_phone TEXT NOT NULL,
  service TEXT NOT NULL,
  barber TEXT,
  booking_date DATE NOT NULL,
  booking_time TEXT NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'completed', 'cancelled')),
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Anyone can create bookings"
  ON bookings FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Only service role can view all bookings"
  ON bookings FOR SELECT
  USING (auth.role() = 'service_role');

-- Create index for faster queries
CREATE INDEX idx_bookings_date ON bookings(booking_date);
CREATE INDEX idx_bookings_status ON bookings(status);
```

4. **"Run"** ক্লিক করুন
5. Success message দেখলে বুঝবেন table তৈরি হয়েছে

---

### Step 5: Verify Table

1. বাম পাশের মেনু থেকে **"Table Editor"** এ যান
2. `bookings` table দেখতে পাবেন
3. এখানে সব booking requests দেখতে পারবেন

---

## 🎉 Supabase Setup Complete!

### আপনি কী পেলেন:
✅ **FREE database** (500MB storage)
✅ **Real-time bookings**
✅ **Admin panel** to view all appointments
✅ **Secure data storage**

### Booking Data দেখুন:
- Supabase Dashboard → Table Editor → bookings
- সব appointments এখানে থাকবে

---

## 📱 Notification Setup (Optional)

যদি নতুন booking এ WhatsApp notification চান:

1. **WhatsApp Business API** ব্যবহার করতে পারেন
2. অথবা **Twilio** ব্যবহার করে SMS পাঠাতে পারেন
3. ফ্রি option: **Email notification** (Supabase built-in)

---

## পরবর্তী ধাপ:

এখন আপনার `.env.local` ফাইলে সব credentials ঠিকমতো সেট করুন:

```env
# Notion API
NOTION_API_KEY=your_notion_token
NOTION_DATABASE_ID=your_database_id

# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIs...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIs...
```

তারপর আমাকে বলুন, আমি deployment শুরু করব! 🚀
