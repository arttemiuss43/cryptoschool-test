## 📊 A/B Test Plan – Reward-Based CTA

### Hypothesis

Replacing a neutral rating prompt with a reward-based call-to-action will result in higher engagement and more users progressing to the next lesson.

I believe that offering a motivational “reward” after lesson completion will better trigger positive user behavior compared to simply asking for feedback.

---

### Test Design

- **Group A** – 10 seconds before the video ends, users see a prompt to rate the experience:  
  _“Did you like the video?”_ → Buttons: **Rate**, **Cancel**

- **Group B** – Users see a motivational CTA:  
  _“You’re about to unlock your reward by completing the lesson.”_ → Button: **🎉 Claim your reward**

---

### Implementation

- A **Laravel Pennant** feature flag `reward_cta` will be used to separate test groups.
- The frontend will conditionally render the CTA popup based on the flag.
- All user actions (CTA shown, clicked, skipped, next lesson opened) will be tracked by sending events to an external analytics platform.

---

### Tools for Tracking and Analysis

- A **PostHog** (or similar) analytics platform will be used to track and analyze all interactions.
- Events will be sent from the frontend using the PostHog SDK.
- Each event will include:
    - `lesson_id`
    - `group` (A or B)
    - `variant` (`rating` or `reward`)
    - `action` (`shown`, `clicked`, `skipped`, `completed`)
    - `timestamp`

---

### Metrics per Group

- **Lesson progression rate**
- **CTA click-through rate (CTR)**
- **Conversion funnel:**  
  _CTA shown → clicked → next lesson started_
