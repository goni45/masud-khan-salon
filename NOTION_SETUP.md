# Notion Database Template - Masud Khan Men's Salon

## এই গাইড ফলো করুন Notion CMS সেটআপ করতে

### Step 1: Notion Integration তৈরি করুন

1. এই লিঙ্কে যান: https://www.notion.so/profile/integrations
2. **"New integration"** ক্লিক করুন
3. নাম দিন: `Masud Khan Salon`
4. Workspace সিলেক্ট করুন
5. **"Submit"** ক্লিক করুন
6. **"Internal Integration Token"** কপি করুন এবং `.env.local` ফাইলে `NOTION_API_KEY` হিসেবে সেট করুন

---

### Step 2: Notion Database তৈরি করুন

1. আপনার Notion workspace এ একটা নতুন পেজ তৈরি করুন: `Masud Khan Salon CMS`
2. `/database` টাইপ করুন এবং **"Table database - Inline"** সিলেক্ট করুন
3. নিচের কলামগুলো যোগ করুন:

#### Database Properties:

| Property Name | Type | Options/Description |
|--------------|------|---------------------|
| **Type** | Select | Options: `Service`, `Barber`, `Gallery`, `SalonInfo` |
| **Name** | Title | Default title property |
| **NameBN** | Text | বাংলা নাম |
| **Description** | Text | Description |
| **Price** | Number | Price in Taka |
| **Duration** | Text | e.g., "30 min" |
| **Category** | Select | Options: `Hair`, `Skin`, `Spa`, `Care`, `Special` |
| **Image** | URL | Image URL |
| **Featured** | Checkbox | Featured service or not |
| **Specialty** | Text | For barbers |
| **Experience** | Text | For barbers |
| **Rating** | Number | For barbers (1-5) |
| **BeforeImage** | URL | For gallery |
| **AfterImage** | URL | For gallery |
| **Phone** | Text | For SalonInfo |
| **WhatsApp** | Text | For SalonInfo |
| **Facebook** | URL | For SalonInfo |
| **Messenger** | URL | For SalonInfo |
| **Address** | Text | For SalonInfo |
| **OpeningHours** | Text | For SalonInfo |

---

### Step 3: Sample Data Entry

#### Services (Type = Service):

| Name | NameBN | Category | Price | Duration | Featured |
|------|--------|----------|-------|----------|----------|
| Hair Cut | হেয়ার কাট | Hair | 500 | 30 min | ✓ |
| Hair Styling | হেয়ার স্টাইলিং | Hair | 300 | 20 min | |
| Hair Colour | হেয়ার কালার | Hair | 1500 | 60 min | ✓ |
| Hair Spa & Massage | হেয়ার স্পা ও মাসাজ | Spa | 800 | 45 min | |
| Facial | ফেসিয়াল | Skin | 1000 | 40 min | ✓ |
| Face Massage | ফেস মাসাজ | Skin | 500 | 30 min | |
| Manicure & Pedicure | ম্যানিকিউর ও পেডিকিউর | Care | 800 | 50 min | |
| Body Massage | বডি মাসাজ | Spa | 1500 | 60 min | ✓ |
| Grooming & Makeover | গ্রুমিং ও মেকওভার | Special | 3000 | 90 min | ✓ |

#### Barbers (Type = Barber):

| Name | Specialty | Experience | Rating |
|------|-----------|------------|--------|
| Masud Khan | Master Barber | 15+ years | 5 |
| Karim Ahmed | Fade Specialist | 10+ years | 4.9 |
| Rahim Uddin | Beard Expert | 8+ years | 4.8 |

#### Gallery (Type = Gallery):

| Title | Description | BeforeImage | AfterImage |
|-------|-------------|-------------|------------|
| Classic Fade | Sharp and clean finish | [URL] | [URL] |
| Beard Transformation | From scruffy to sophisticated | [URL] | [URL] |

#### Salon Info (Type = SalonInfo):

একটি মাত্র row তৈরি করুন:

| Name | Phone | WhatsApp | Facebook | Messenger | Address | OpeningHours |
|------|-------|----------|----------|-----------|---------|--------------|
| Masud Khan Men's Salon | 01304-603705 | 01304-603705 | https://www.facebook.com/MasudKhanMensSalonMymensingh | https://www.facebook.com/messages/t/560803953781207 | Mymensingh, Bangladesh | Sat - Fri: 10 AM - 10 PM |

---

### Step 4: Database Share করুন

1. Database এর উপরের ডান কোণে **"..."** ক্লিক করুন
2. **"Connections"** এ যান
3. আপনার তৈরি করা integration (`Masud Khan Salon`) কে access দিন
4. Database ID হলো URL এর শেষ অংশ:
   ```
   https://www.notion.so/your-workspace/DATABASE_ID?v=xxxxx
                              ^^^^^^^^^^^^
   ```
5. এই DATABASE_ID কপি করে `.env.local` এ `NOTION_DATABASE_ID` হিসেবে সেট করুন

---

### Step 5: Environment Variables

`.env.local` ফাইলে সব কিছু ঠিকমতো সেট করুন:

```env
# Notion API
NOTION_API_KEY=secret_xxxxxxxxxxxxx
NOTION_DATABASE_ID=xxxxxxxxxxxxxxxxxxxx

# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

---

## 🎉 ব্যস! আপনার CMS প্রস্তুত!

এখন আপনি Notion এ সব কিছু এডিট করলে আপনার ওয়েবসাইটে অটোমেটিক আপডেট হবে!

### কী কী এডিট করতে পারবেন:
✅ Services যোগ/বাদ/এডিট
✅ দাম পরিবর্তন
✅ Barbers এর তথ্য
✅ Gallery images
✅ Contact information
✅ Opening hours

### ভিডিও টিউটোরিয়াল:
প্রয়োজন হলে আমাকে বলুন, আমি একটা ভিডিও কলে দেখাতে পারব কিভাবে Notion ব্যবহার করবেন!
