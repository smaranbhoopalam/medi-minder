# Database Tables

## users

Stores authenticated users from Supabase login.

Fields:

* id (UUID) – unique user identifier
* email (TEXT) – user email
* name (TEXT) – full name
* created_at (TIMESTAMP)

---

## medications

Stores medicines a user needs to take.

Fields:

* id (UUID)
* user_id (UUID) – references users.id
* medicine_name (TEXT)
* dosage (TEXT)
* schedule_time (TIME)
* created_at (TIMESTAMP)

---

## medicine_logs

Stores whether a medicine was taken.

Fields:

* id (UUID)
* user_id (UUID)
* medication_id (UUID)
* taken (BOOLEAN)
* proof_image (TEXT) – uploaded image URL
* taken_at (TIMESTAMP)

---

## stress_logs

Stores stress calculations.

Fields:

* id (UUID)
* user_id (UUID)
* stress_score (INTEGER)
* typing_speed (INTEGER)
* sleep_hours (INTEGER)
* food_timing (TEXT)
* created_at (TIMESTAMP)

---

## family_contacts

Stores people to alert if medication is missed.

Fields:

* id (UUID)
* user_id (UUID)
* name (TEXT)
* phone (TEXT)
* email (TEXT)
