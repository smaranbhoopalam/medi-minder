-- enable uuid generator
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- USERS TABLE
CREATE TABLE users (
  id UUID PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  created_at TIMESTAMP DEFAULT now()
);

-- MEDICATIONS TABLE
CREATE TABLE medications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  medicine_name TEXT NOT NULL,
  dosage TEXT,
  schedule_time TIME NOT NULL,
  created_at TIMESTAMP DEFAULT now()
);

-- MEDICINE LOGS TABLE
CREATE TABLE medicine_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  medication_id UUID REFERENCES medications(id) ON DELETE CASCADE,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  taken BOOLEAN DEFAULT false,
  proof_image TEXT,
  taken_at TIMESTAMP DEFAULT now()
);

-- STRESS LOGS TABLE
CREATE TABLE stress_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  stress_score INTEGER,
  typing_speed INTEGER,
  sleep_hours INTEGER,
  food_timing TEXT,
  created_at TIMESTAMP DEFAULT now()
);

-- FAMILY CONTACTS TABLE
CREATE TABLE family_contacts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  name TEXT,
  phone TEXT,
  email TEXT
);

-- INDEXES (must be after tables exist)
CREATE INDEX idx_medications_user
ON medications(user_id);

CREATE INDEX idx_logs_user
ON medicine_logs(user_id);

CREATE INDEX idx_stress_user
ON stress_logs(user_id);