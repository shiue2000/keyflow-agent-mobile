# Keyflow mobile SaaS

Keyflow is a mobile-first workspace for residential real estate agents. It puts today's follow-ups before pipeline reporting so an agent can contact a lead and schedule the next step without hunting through a CRM.

## Run it

Open `index.html` directly, or serve the folder with any static web server.

```sh
python3 -m http.server 4173 --directory keyflow-mobile-saas
```

Then open `http://localhost:4173`.

## Product shape

- Today is a follow-up queue with completion tracking.
- Leads supports search, notes, scheduled follow-ups, calls, messages, and new lead capture.
- Cases track buyer, seller, and rental workflows with milestones, checklists, and activity notes.
- Automate provides ready-made lead, showing, seller, and milestone workflows with review-before-send controls.
- Listings tracks inventory, saved properties, and case assignment.

The prototype saves workspace changes in local storage. The view registry maps each bottom navigation item to one renderer.
