# Requirements & Traceability Matrix

## Feature Specification: Sponsor-Backed Property Listing & Inquiry Subsystem

### Story 1 (Property Owner)
* **As a** registered property owner,
* **I want to** submit listing drafts,
* **So that** prospective buyers can review them once verified by administrative staff.
* **Scope Estimate:** Medium
* **Acceptance Criteria (Given / When / Then):**
  * **Given** an authenticated property owner, 
  * **When** submitting a listing payload, 
  * **Then** the property is saved with `status = 'draft'` and linked to the owner's `auth.uid()`[cite: 1].
* **Traceability Link:** `supabase/migrations/20261029140000_exam_schema_persistence.sql` (properties table, owner_id reference) & `app/api/properties/route.ts` (POST handler)[cite: 1].

### Story 2 (Public Inquirer)
* **As a** prospective neighborhood resident,
* **I want to** view approved properties alongside their tier-level sponsors and submit an inquiry without seeing prior inquiries from other users,
* **So that** I can safely explore neighborhood options and ask questions privately[cite: 1].
* **Scope Estimate:** Large
* **Acceptance Criteria (Given / When / Then):**
  * **Given** an anonymous visitor, 
  * **When** querying listings, 
  * **Then** only records with `status = 'approved'` and active sponsors are returned[cite: 1].
* **Traceability Link:** `supabase/migrations/20261029140000_exam_schema_persistence.sql` (inquiries & property_sponsors tables) & `app/api/properties/route.ts` (GET handler)[cite: 1].

### Story 3 (Platform Admin)
* **As a** platform administrator,
* **I want to** have full override authority across all records and tables,
* **So that** I can conduct compliance audits and manage system integrity[cite: 1].
* **Scope Estimate:** Small
* **Acceptance Criteria (Given / When / Then):**
  * **Given** an authenticated user with admin role privileges,
  * **When** accessing or modifying any record across tables,
  * **Then** full read and write permissions are granted via service role / admin policies[cite: 1].
* **Traceability Link:** `supabase/migrations/20261029140000_exam_schema_persistence.sql` and RLS policies in `docs/security-audit.md`[cite: 1].
