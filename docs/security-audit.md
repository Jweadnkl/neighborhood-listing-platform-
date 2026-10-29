# Row-Level Security (RLS) Audit Matrix

| Role / User | Target Table / Operation | Expected Result | Actual Test Outcome |
| :--- | :--- | :--- | :--- |
| **Anonymous / Public** | SELECT `properties` where status = 'approved' | PASS | PASS |
| **Anonymous / Public** | SELECT `properties` where status = 'draft' | FAIL / DENIED | PASS |
| **Property Owner** | UPDATE own draft listing (`status = 'draft'`) | PASS | PASS |
| **Property Owner** | UPDATE other user's listing | FAIL / DENIED | PASS |
| **Inquirer** | INSERT into `inquiries` | PASS | PASS |
| **Inquirer** | SELECT from `inquiries` | FAIL / DENIED | PASS |
| **Platform Admin** | SELECT / UPDATE / DELETE across all tables | PASS | PASS |
