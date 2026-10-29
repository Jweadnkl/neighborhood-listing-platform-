# Row-Level Security (RLS) Audit Matrix

| Role / User Scenario | Target Action | Expected Result | Actual Result / Verification Status |
| :--- | :--- | :--- | :--- |
| **Anonymous / Public** | Read approved listings | PASS (Allowed) | Verified |
| **Anonymous / Public** | Read draft listings | FAIL (Denied) | Verified |
| **Property Owner A** | Update Owner A draft listing | PASS (Allowed) | Verified |
| **Property Owner A** | Update Owner B listing | FAIL (Denied) | Verified |
| **Inquirer / Visitor** | Submit a new inquiry | PASS (Allowed) | Verified |
| **Inquirer / Visitor** | Select/read existing inquiries | FAIL (Denied) | Verified |
| **Platform Admin** | Read/Write across all schemas | PASS (Allowed) | Verified |