# AI Assistance Log & Verification

## Overview
This document logs the AI tools utilized during the development of the Neighborhood Listing Platform midterm practical exam, explicitly distinguishing between AI-generated outputs and independent manual verifications.

---

## AI Usage Breakdown

### 1. Database Schema & Migrations (DDL & RLS)
* **AI Assistance:** Prompted AI for assistance with Supabase PostgreSQL Row Level Security (RLS) policy syntax and foreign key cascading rules.
* **Independent Verification:** Tested RLS policies directly in the Supabase SQL Editor and executed cURL / local API requests to verify unauthorized access was blocked.

### 2. API Route Handlers & Zod Validation
* **AI Assistance:** Generated boilerplate Next.js API route structures and Zod schema validation models for property listing inputs.
* **Independent Verification:** Manually reviewed Zod schemas, added custom validation rules, and tested API edge cases using Postman / browser client calls.

### 3. Component Design & Accessibility (`PropertyCard`)
* **AI Assistance:** Requested WCAG accessibility recommendations and Tailwind layout styling for property card components.
* **Independent Verification:** Verified ARIA tags, tested keyboard navigation focus indicators, and checked screen reader compatibility.

### 4. Git Version Control & Deployment
* **AI Assistance:** Troubleshooted Git rebase conflict resolution steps and Vercel deployment configurations.
* **Independent Verification:** Executed Git branch merges on local shell, verified clean commit history, and confirmed active Vercel deployment preview links.

---

## Credential & Security Attestation
* All AI-generated code snippets were inspected prior to committing. No API keys, database connection strings, or secret credentials were pasted into AI prompts or committed to Git history.
