# Keyflow mobile SaaS

Keyflow is a mobile-first workspace for residential real estate agents. It puts today's client actions before pipeline reporting so an agent can contact a client, record the outcome, and schedule the next step without hunting through a CRM.

## Run it

Open `index.html` directly, or serve the folder with any static web server.

```sh
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

## Product shape

- Today is a live-date action queue with overdue work and outcome capture.
- Clients supports search, notes, scheduled follow-ups, phone links, reviewed reply drafts, and new client capture.
- Listings lets an agent add and edit sale/rental inventory, keep private access notes, and schedule showings with a 30-minute travel-conflict check.
- LINE property packs are generated from listing details, reviewed by the agent, and saved to the selected client's drafts or opened in LINE.
- Cases track buyer, seller, and rental workflows with milestones, checklists, and activity notes.
- More lets an agent save and share their LINE profile, open LINE with prepared text, and see Instagram Professional setup requirements.
- Local automations schedule new-client callbacks and post-showing follow-ups. Server-dependent workflows are labeled instead of simulated.

The prototype saves workspace changes in local storage. LINE sharing uses LINE's official URL scheme and always asks the agent to choose and confirm a recipient. Automatic messaging, scheduled server execution, authentication, and cross-device sync require a secure backend and approved channel credentials.

All records included in the source are fictional demo data. Do not publish real client contact details or private property notes from a browser's local storage.
