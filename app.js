function dateKey(date = new Date()) {
  const local = new Date(date.getTime() - date.getTimezoneOffset() * 60_000);
  return local.toISOString().slice(0, 10);
}

function dateFromNow(days = 0, hours = 0, minutes = 0) {
  const value = new Date();
  value.setDate(value.getDate() + days);
  value.setHours(value.getHours() + hours);
  value.setMinutes(value.getMinutes() + minutes);
  return value;
}

function timeKey(date) {
  return `${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;
}

const todayKey = dateKey();
const tomorrowKey = dateKey(dateFromNow(1));

const seedData = {
  navigation: [
    { id: "today", label: "Today", icon: "home" },
    { id: "leads", label: "Clients", icon: "users" },
    { id: "cases", label: "Cases", icon: "briefcase" },
    { id: "more", label: "More", icon: "grid" },
  ],
  leads: [
    {
      id: 1,
      name: "Maya Chen",
      initials: "MC",
      stage: "Hot lead",
      stageKey: "hot",
      need: "Buying · 3 bed · $650–750k",
      email: "maya.chen@example.com",
      phone: "(312) 555-0138",
      source: "Website inquiry",
      avatar: "#ffb891",
      notes: [
        { id: 101, text: "Prefers North Center. A quiet street matters more than a larger yard.", createdAt: "Oct 28, 3:42 PM" },
        { id: 102, text: "Pre-approval updated to $750k. Open to light renovation.", createdAt: "Oct 24, 11:10 AM" },
      ],
      followUps: [
        { id: 201, type: "Call", date: todayKey, time: "10:30", note: "Review the Belle Plaine shortlist", done: false },
      ],
    },
    {
      id: 2,
      name: "Ethan Brooks",
      initials: "EB",
      stage: "Viewing",
      stageKey: "viewing",
      need: "Renting · 2 bed · under $3k",
      email: "ethan.b@example.com",
      phone: "(773) 555-0162",
      source: "Referral",
      avatar: "#c9c5ff",
      notes: [{ id: 103, text: "Needs parking and a move-in date before November 15.", createdAt: "Oct 27, 9:05 AM" }],
      followUps: [
        { id: 202, type: "Showing", date: todayKey, time: "13:00", note: "410 N Carpenter St #5B", done: false },
      ],
    },
    {
      id: 3,
      name: "Sofia & Luis",
      initials: "SL",
      stage: "Nurture",
      stageKey: "nurture",
      need: "Selling · 4 bed · Oak Park",
      email: "sofia.luis@example.com",
      phone: "(708) 555-0144",
      source: "Past client",
      avatar: "#9fd7f5",
      notes: [{ id: 104, text: "Kitchen renovation completed in 2021. Collect contractor receipts.", createdAt: "Oct 25, 2:18 PM" }],
      followUps: [
        { id: 203, type: "LINE", date: tomorrowKey, time: "09:00", note: "Send Oak Park market update", done: false },
      ],
    },
    {
      id: 4,
      name: "Jordan Hale",
      initials: "JH",
      stage: "Hot lead",
      stageKey: "hot",
      need: "Buying · Condo · $450k",
      email: "jordan.h@example.com",
      phone: "(312) 555-0191",
      source: "Open house",
      avatar: "#c8f75a",
      notes: [{ id: 105, text: "Likes West Loop lofts. Avoid buildings with rental caps.", createdAt: "Oct 28, 5:25 PM" }],
      followUps: [
        { id: 204, type: "Instagram", date: todayKey, time: "16:15", note: "Reply with three condo options", done: false },
      ],
    },
  ],
  cases: [
    {
      id: 1,
      title: "Chen home search",
      clientId: 1,
      type: "Buyer",
      stage: "Touring",
      stageTone: "viewing",
      property: "North Center · Chicago",
      value: "$725k target",
      progress: 46,
      nextMilestone: "Choose homes for Saturday tour",
      dueDate: "Oct 31",
      tasks: [
        { id: 301, label: "Buyer agreement signed", done: true },
        { id: 302, label: "Pre-approval received", done: true },
        { id: 303, label: "Confirm Saturday tour", done: false },
        { id: 304, label: "Prepare offer strategy", done: false },
      ],
      activity: [
        { id: 401, text: "Shortlist shared with Maya", createdAt: "Oct 28, 4:10 PM" },
        { id: 402, text: "Case created from qualified lead", createdAt: "Oct 24, 11:15 AM" },
      ],
    },
    {
      id: 2,
      title: "Oak Park listing",
      clientId: 3,
      type: "Seller",
      stage: "Preparing",
      stageTone: "nurture",
      property: "816 N Grove Ave · Oak Park",
      value: "$890k estimate",
      progress: 28,
      nextMilestone: "Complete pricing review",
      dueDate: "Nov 3",
      tasks: [
        { id: 305, label: "Property walk-through", done: true },
        { id: 306, label: "Collect renovation records", done: false },
        { id: 307, label: "Approve listing price", done: false },
        { id: 308, label: "Schedule photography", done: false },
      ],
      activity: [{ id: 403, text: "Market analysis added to the case", createdAt: "Oct 27, 1:30 PM" }],
    },
    {
      id: 3,
      title: "Brooks rental",
      clientId: 2,
      type: "Rental",
      stage: "Application",
      stageTone: "hot",
      property: "410 N Carpenter St #5B",
      value: "$2,850/mo",
      progress: 74,
      nextMilestone: "Submit application package",
      dueDate: "Today",
      tasks: [
        { id: 309, label: "Property showing", done: true },
        { id: 310, label: "Income documents", done: true },
        { id: 311, label: "Submit application", done: false },
      ],
      activity: [{ id: 404, text: "Showing confirmed for 1:00 PM", createdAt: "Oct 29, 8:40 AM" }],
    },
  ],
  automationSettings: {
    reviewMessages: true,
  },
  channelConnections: [
    {
      id: "line",
      name: "LINE Official Account",
      status: "Setup required",
      detail: "Connect an Official Account through a secure backend and webhook.",
      icon: "message",
    },
    {
      id: "instagram",
      name: "Instagram Professional",
      status: "Setup required",
      detail: "Connect a Business or Creator account after Meta app review.",
      icon: "users",
    },
  ],
  automations: [
    {
      id: "instant-lead",
      name: "Instant lead response",
      description: "Schedule a callback after a new client is added.",
      trigger: "New client added",
      result: "Callback task in 15 min",
      icon: "zap",
      enabled: true,
      runs: 12,
      execution: "local",
    },
    {
      id: "showing-followup",
      name: "Post-showing follow-up",
      description: "Prepare a feedback request the morning after a showing.",
      trigger: "Showing marked complete",
      result: "Feedback text next morning",
      icon: "message",
      enabled: true,
      runs: 8,
      execution: "local",
    },
    {
      id: "seller-update",
      name: "Seller weekly update",
      description: "Summarize listing views, inquiries, and case activity.",
      trigger: "Friday at 9:00 AM",
      result: "Draft seller update email",
      icon: "calendar",
      enabled: false,
      runs: 4,
      execution: "server",
    },
    {
      id: "milestone-reminder",
      name: "Milestone reminder",
      description: "Create an urgent task before a case milestone is due.",
      trigger: "Milestone due within 24 hours",
      result: "Priority task + notification",
      icon: "briefcase",
      enabled: false,
      runs: 0,
      execution: "server",
    },
  ],
  automationRuns: [
    { id: 1, icon: "message", title: "Showing follow-up drafted", detail: "Ethan Brooks · Review before send", time: "8:42 AM" },
    { id: 2, icon: "calendar", title: "Callback scheduled", detail: "Jordan Hale · Today at 4:15 PM", time: "Yesterday" },
    { id: 3, icon: "zap", title: "New client workflow completed", detail: "Maya Chen · callback created", time: "Oct 28" },
  ],
};

function normalizeWorkspace(workspace) {
  const legacyDates = new Map([
    ["2026-10-29", todayKey],
    ["2026-10-30", tomorrowKey],
  ]);
  workspace.navigation = seedData.navigation;
  workspace.channelConnections = workspace.channelConnections || seedData.channelConnections;
  workspace.automationSettings = { reviewMessages: true };
  workspace.automations = seedData.automations.map((definition) => ({
    ...definition,
    ...(workspace.automations || []).find((item) => item.id === definition.id),
    execution: definition.execution,
    enabled: definition.execution === "server" ? false : ((workspace.automations || []).find((item) => item.id === definition.id)?.enabled ?? definition.enabled),
  }));
  workspace.leads = (workspace.leads || []).map((lead, index) => ({
    ...lead,
    preferredChannel: lead.preferredChannel || ["LINE", "Phone", "Email", "Instagram"][index % 4],
    drafts: lead.drafts || [],
    followUps: (lead.followUps || []).map((followUp) => ({
      ...followUp,
      date: legacyDates.get(followUp.date) || followUp.date,
    })),
  }));
  return workspace;
}

function loadWorkspace() {
  try {
    const saved = window.localStorage.getItem("keyflow-workspace-v7") || window.localStorage.getItem("keyflow-workspace-v6");
    if (saved) return normalizeWorkspace(JSON.parse(saved));
  } catch (error) {
    console.warn("Keyflow could not load saved workspace data.", error);
  }
  return normalizeWorkspace(JSON.parse(JSON.stringify(seedData)));
}

const appData = loadWorkspace();
const state = {
  activeView: "today",
  leadFilter: "all",
  caseFilter: "all",
  leadQuery: "",
  sheet: null,
};

const appView = document.querySelector("#app-view");
const bottomNav = document.querySelector("#bottom-nav");
const sheetRoot = document.querySelector("#sheet-root");
const toast = document.querySelector("#toast");

document.body.insertAdjacentHTML("afterbegin", document.querySelector("#icon-sprite").innerHTML);

function saveWorkspace() {
  try {
    window.localStorage.setItem("keyflow-workspace-v7", JSON.stringify(appData));
  } catch (error) {
    console.warn("Keyflow could not save workspace data.", error);
  }
}

function icon(name) {
  return `<svg aria-hidden="true"><use href="#icon-${name}"></use></svg>`;
}

function getLead(id) {
  return appData.leads.find((lead) => lead.id === Number(id));
}

function getCase(id) {
  return appData.cases.find((caseItem) => caseItem.id === Number(id));
}

function getAutomation(id) {
  return appData.automations.find((automation) => automation.id === id);
}

function logAutomation(automationId, title, detail) {
  const automation = getAutomation(automationId);
  if (!automation?.enabled) return;
  automation.runs += 1;
  appData.automationRuns.unshift({
    id: Date.now(),
    icon: automation.icon,
    title,
    detail,
    time: "Just now",
  });
}

function runNewLeadAutomation(lead) {
  const automation = getAutomation("instant-lead");
  if (!automation?.enabled) return false;
  const callbackAt = dateFromNow(0, 0, 15);
  lead.followUps.push({
    id: nextId(lead.followUps),
    type: "Call",
    date: dateKey(callbackAt),
    time: timeKey(callbackAt),
    note: "Welcome the client and confirm what they need",
    done: false,
  });
  logAutomation("instant-lead", "New client callback scheduled", `${lead.name} · Due in 15 minutes`);
  return true;
}

function runShowingAutomation(lead) {
  const automation = getAutomation("showing-followup");
  if (!automation?.enabled) return false;
  lead.followUps.push({
    id: nextId(lead.followUps),
    type: "Text",
    date: tomorrowKey,
    time: "09:00",
    note: "Ask for showing feedback",
    done: false,
  });
  logAutomation("showing-followup", "Showing follow-up drafted", `${lead.name} · Review before send`);
  return true;
}

function nextId(items) {
  return Math.max(0, ...items.map((item) => Number(item.id))) + 1;
}

function formatDateLabel(dateString) {
  if (dateString === todayKey) return "Today";
  if (dateString === tomorrowKey) return "Tomorrow";
  return new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric" }).format(new Date(`${dateString}T12:00:00`));
}

function formatTime(timeString) {
  const [hours, minutes] = timeString.split(":").map(Number);
  const date = new Date();
  date.setHours(hours, minutes, 0, 0);
  return new Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "2-digit" }).format(date);
}

function allFollowUps() {
  return appData.leads
    .flatMap((lead) => lead.followUps.map((followUp) => ({ ...followUp, lead })))
    .sort((a, b) => `${a.date} ${a.time}`.localeCompare(`${b.date} ${b.time}`));
}

function nextFollowUp(lead) {
  return lead.followUps
    .filter((followUp) => !followUp.done)
    .sort((a, b) => `${a.date} ${a.time}`.localeCompare(`${b.date} ${b.time}`))[0];
}

function renderFollowUpCard(followUp) {
  const communicationTypes = ["Text", "Email", "LINE", "Instagram"];
  const followUpIcon = followUp.type === "Showing" ? "building" : followUp.type === "Call" ? "phone" : "message";
  return `
    <article class="followup-card ${followUp.done ? "completed" : ""}">
      <span class="followup-type-icon ${communicationTypes.includes(followUp.type) ? "channel" : ""}">${icon(followUpIcon)}</span>
      <button class="followup-main" data-open-lead="${followUp.lead.id}">
        <span class="followup-time">${formatTime(followUp.time)}</span>
        <strong>${followUp.lead.name}</strong>
        <small>${followUp.type} · ${followUp.note}</small>
      </button>
      ${followUp.done ? `<span class="done-mark">${icon("check")}</span>` : `<button class="complete-button" data-complete-followup="${followUp.lead.id}:${followUp.id}" aria-label="Record follow-up outcome">${icon("check")}</button>`}
    </article>`;
}

function renderToday() {
  const pending = allFollowUps().filter((followUp) => !followUp.done);
  const today = pending.filter((followUp) => followUp.date <= todayKey);
  const later = pending.filter((followUp) => followUp.date > todayKey).slice(0, 3);
  const overdue = today.filter((followUp) => followUp.date < todayKey).length;
  const completed = allFollowUps().filter((followUp) => followUp.done && followUp.completedAt && dateKey(new Date(followUp.completedAt)) === todayKey).length;
  const dateLabel = new Intl.DateTimeFormat("en-US", { weekday: "long", month: "short", day: "numeric" }).format(new Date());
  const localWorkflows = appData.automations.filter((item) => item.enabled && item.execution === "local").length;
  return `
    <div class="screen">
      <header class="topbar">
        <div><p class="eyebrow">${dateLabel}</p><h1>Morning, Alex</h1></div>
        <button class="icon-button" data-view="more" aria-label="Workspace settings">${icon("grid")}</button>
      </header>
      <section class="focus-card">
        <div class="focus-card-top"><div><p class="eyebrow">Needs attention</p><div class="hero-number">${today.length}</div></div><span class="tag">${overdue ? `${overdue} overdue` : `${completed} completed`}</span></div>
        <p class="focus-copy">Keep every active client moving toward their next decision.</p>
        <button class="primary-button" data-scroll-followups>Start the queue</button>
      </section>
      <div class="quick-grid" aria-label="Quick actions">
        <button class="quick-action" data-open-sheet="new-lead"><span class="mini-icon">${icon("plus")}</span>New client</button>
        <button class="quick-action" data-open-sheet="schedule-followup"><span class="mini-icon">${icon("calendar")}</span>Follow-up</button>
        <button class="quick-action" data-view="more"><span class="mini-icon">${icon("message")}</span>Channels</button>
      </div>
      <button class="automation-glance" data-view="more">
        <span class="automation-glance-icon">${icon("zap")}</span>
        <span><strong>${localWorkflows} local workflows are working</strong><small>External messages require a connected account and review</small></span>
        ${icon("arrow")}
      </button>
      <section id="followup-queue" class="today-group">
        <div class="section-heading"><h2>Today</h2><span class="mini-label">${today.length} remaining</span></div>
        <div class="followup-list">${today.length ? today.map(renderFollowUpCard).join("") : `<div class="empty-state">${icon("check")}<h3>Today is clear</h3><p>Every scheduled follow-up is complete.</p></div>`}</div>
      </section>
      <section class="today-group">
        <div class="section-heading"><h2>Coming up</h2><button class="section-link" data-view="leads">All clients</button></div>
        <div class="followup-list">${later.map(renderFollowUpCard).join("")}</div>
      </section>
    </div>`;
}

function renderLeadCard(lead) {
  const followUp = nextFollowUp(lead);
  const phoneHref = `tel:${String(lead.phone || "").replace(/[^+\d]/g, "")}`;
  return `
    <article class="lead-card">
      <button class="lead-card-main" data-open-lead="${lead.id}">
        <span class="avatar" style="--avatar:${lead.avatar}">${lead.initials}</span>
        <span class="lead-card-copy"><strong>${lead.name}</strong><small>${lead.need}</small></span>
        <span class="tag ${lead.stageKey}">${lead.stage}</span>
      </button>
      <div class="lead-card-foot">
        <button class="next-action" data-schedule-for="${lead.id}">${icon("clock")}<span>${followUp ? `${formatDateLabel(followUp.date)}, ${formatTime(followUp.time)} · ${followUp.type}` : "Schedule follow-up"}</span></button>
        <div class="contact-actions">
          <button class="contact-button" data-open-reply="${lead.id}" aria-label="Prepare a reply for ${lead.name}">${icon("message")}</button>
          <a class="contact-button primary" href="${phoneHref}" aria-label="Call ${lead.name}">${icon("phone")}</a>
        </div>
      </div>
    </article>`;
}

function renderLeads() {
  const normalizedQuery = state.leadQuery.trim().toLowerCase();
  const filteredLeads = appData.leads.filter((lead) => {
    const matchesFilter = state.leadFilter === "all" || lead.stageKey === state.leadFilter;
    const matchesQuery = !normalizedQuery || `${lead.name} ${lead.need}`.toLowerCase().includes(normalizedQuery);
    return matchesFilter && matchesQuery;
  });
  const filters = [["all", "All clients"], ["hot", "Hot"], ["viewing", "Viewing"], ["nurture", "Nurture"]];
  return `
    <div class="screen">
      <div class="screen-title-row"><div><p class="eyebrow">Relationships</p><h1>Clients</h1></div><span class="count-pill">${appData.leads.length} active</span></div>
      <div class="search-row"><label class="search-box">${icon("search")}<input id="lead-search" type="search" placeholder="Search clients" value="${state.leadQuery}" aria-label="Search clients" /></label></div>
      <div class="chip-row" aria-label="Lead status filters">${filters.map(([id, label]) => `<button class="chip ${state.leadFilter === id ? "active" : ""}" data-lead-filter="${id}">${label}</button>`).join("")}</div>
      <div class="lead-list">${filteredLeads.length ? filteredLeads.map(renderLeadCard).join("") : `<div class="empty-state"><h3>No matching leads</h3><p>Try a different search or status.</p></div>`}</div>
      <button class="floating-add" data-open-sheet="new-lead">${icon("plus")} Add client</button>
    </div>`;
}

function renderCaseCard(caseItem) {
  const client = getLead(caseItem.clientId);
  const completedTasks = caseItem.tasks.filter((task) => task.done).length;
  return `
    <button class="case-card" data-open-case="${caseItem.id}">
      <span class="case-card-top"><span class="case-icon">${icon("briefcase")}</span><span class="case-heading"><strong>${caseItem.title}</strong><small>${client?.name || "Unassigned client"} · ${caseItem.type}</small></span><span class="tag ${caseItem.stageTone}">${caseItem.stage}</span></span>
      <span class="case-property">${caseItem.property}</span>
      <span class="case-meta"><span>${caseItem.value}</span><span>${completedTasks}/${caseItem.tasks.length} tasks</span></span>
      <span class="case-progress"><i style="width:${caseItem.progress}%"></i></span>
      <span class="case-next"><span><small>Next milestone</small><strong>${caseItem.nextMilestone}</strong></span><b>${caseItem.dueDate}</b></span>
    </button>`;
}

function renderCases() {
  const filteredCases = appData.cases.filter((caseItem) => state.caseFilter === "all" || caseItem.type.toLowerCase() === state.caseFilter);
  const filters = [["all", "All cases"], ["buyer", "Buyers"], ["seller", "Sellers"], ["rental", "Rentals"]];
  return `
    <div class="screen">
      <div class="screen-title-row"><div><p class="eyebrow">Active work</p><h1>Cases</h1></div><span class="count-pill">${appData.cases.length} open</span></div>
      <section class="case-summary"><div><strong>${appData.cases.filter((item) => item.progress >= 70).length}</strong><span>Near closing</span></div><div><strong>${appData.cases.reduce((sum, item) => sum + item.tasks.filter((task) => !task.done).length, 0)}</strong><span>Open tasks</span></div><div><strong>2</strong><span>Due this week</span></div></section>
      <div class="chip-row" aria-label="Case filters">${filters.map(([id, label]) => `<button class="chip ${state.caseFilter === id ? "active" : ""}" data-case-filter="${id}">${label}</button>`).join("")}</div>
      <div class="case-list">${filteredCases.map(renderCaseCard).join("")}</div>
      <button class="floating-add" data-open-sheet="new-case">${icon("plus")} New case</button>
    </div>`;
}

function renderAutomationCard(automation) {
  const requiresServer = automation.execution === "server";
  return `
    <article class="automation-card">
      <div class="automation-card-head">
        <span class="automation-icon">${icon(automation.icon)}</span>
        <div><h3>${automation.name}</h3><p>${automation.description}</p></div>
        ${requiresServer ? `<span class="setup-badge">Backend required</span>` : `<button class="switch ${automation.enabled ? "on" : ""}" data-toggle-automation="${automation.id}" role="switch" aria-checked="${automation.enabled}" aria-label="${automation.enabled ? "Disable" : "Enable"} ${automation.name}"><i></i></button>`}
      </div>
      <div class="automation-flow">
        <span><small>WHEN</small><strong>${automation.trigger}</strong></span>
        ${icon("arrow")}
        <span><small>THEN</small><strong>${automation.result}</strong></span>
      </div>
      <div class="automation-card-foot">
        <span>${requiresServer ? "Requires secure server execution" : `${automation.runs} recorded runs`}</span>
        <span class="mini-label">${requiresServer ? "Not connected" : automation.enabled ? "Active" : "Paused"}</span>
      </div>
    </article>`;
}

function renderChannelCard(connection) {
  return `
    <button class="channel-card" data-channel-info="${connection.id}">
      <span class="channel-logo ${connection.id}">${connection.id === "line" ? "LINE" : "IG"}</span>
      <span class="channel-copy"><strong>${connection.name}</strong><small>${connection.detail}</small></span>
      <span class="channel-status">${connection.status}</span>
      ${icon("arrow")}
    </button>`;
}

function renderMore() {
  const active = appData.automations.filter((automation) => automation.enabled && automation.execution === "local");
  return `
    <div class="screen">
      <div class="screen-title-row">
        <div><p class="eyebrow">Workspace</p><h1>More</h1></div>
        <span class="automation-live"><i></i>${active.length} local workflows</span>
      </div>
      <section class="automation-section">
        <div class="section-heading"><h2>Communication channels</h2><span class="mini-label">Secure setup</span></div>
        <p class="section-copy">Connect business accounts here. Keyflow never claims access to a personal LINE or Instagram inbox.</p>
        <div class="channel-list">${appData.channelConnections.map(renderChannelCard).join("")}</div>
      </section>
      <section class="review-safety-card">
        <span class="automation-icon">${icon("shield")}</span>
        <span><strong>Human approval stays on</strong><small>External messages remain drafts until an agent approves them.</small></span>
        <span class="setup-badge ready">Required</span>
      </section>
      <section class="automation-section">
        <div class="section-heading"><h2>Workflow templates</h2><span class="mini-label">${active.length} active locally</span></div>
        <div class="automation-list">${appData.automations.map(renderAutomationCard).join("")}</div>
      </section>
      <section class="automation-section">
        <div class="section-heading"><h2>Recent activity</h2><span class="mini-label">Audit trail</span></div>
        <div class="automation-run-list">${appData.automationRuns.slice(0, 4).map((run) => `<div class="automation-run"><span class="automation-icon">${icon(run.icon)}</span><div><strong>${run.title}</strong><small>${run.detail}</small></div><time>${run.time}</time></div>`).join("")}</div>
      </section>
    </div>`;
}

const viewRenderers = { today: renderToday, leads: renderLeads, cases: renderCases, more: renderMore };

function renderNavigation() {
  bottomNav.innerHTML = appData.navigation.map((item) => `<button class="nav-item ${state.activeView === item.id ? "active" : ""}" data-view="${item.id}" aria-current="${state.activeView === item.id ? "page" : "false"}">${icon(item.icon)}<span>${item.label}</span></button>`).join("");
}

function render() {
  appView.innerHTML = viewRenderers[state.activeView]();
  appView.scrollTop = 0;
  renderNavigation();
  renderSheet();
}

function sheetFrame(content) {
  return `<div class="sheet-backdrop" data-close-sheet><section class="sheet" role="dialog" aria-modal="true" aria-labelledby="sheet-title" data-sheet-content><div class="sheet-grabber"></div>${content}</section></div>`;
}

function sheetHeader(eyebrow, title) {
  return `<div class="sheet-head"><div><p class="eyebrow">${eyebrow}</p><h2 id="sheet-title">${title}</h2></div><button class="close-button" data-explicit-close aria-label="Close">×</button></div>`;
}

function renderNewLeadSheet() {
  return sheetFrame(`${sheetHeader("Relationships", "Add a new client")}<form id="new-lead-form" class="form-grid"><label class="field"><span>Name</span><input name="name" required placeholder="Client name" /></label><label class="field"><span>Interested in</span><select name="interest"><option>Buying</option><option>Selling</option><option>Renting</option><option>Past client</option></select></label><div class="form-row"><label class="field"><span>Phone</span><input name="phone" placeholder="(312) 555-0123" /></label><label class="field"><span>Source</span><input name="source" placeholder="Referral" /></label></div><label class="field"><span>Preferred channel</span><select name="preferredChannel"><option>Phone</option><option>LINE</option><option>Instagram</option><option>Email</option></select></label><label class="field"><span>First note</span><textarea name="note" placeholder="Budget, timing, preferences…"></textarea></label><button class="primary-button" type="submit">Add client</button></form>`);
}

function renderFollowUpSheet(leadId) {
  const selectedLeadId = leadId || appData.leads[0]?.id;
  return sheetFrame(`${sheetHeader("Next action", "Schedule follow-up")}<form id="followup-form" class="form-grid"><label class="field"><span>Client</span><select name="leadId">${appData.leads.map((lead) => `<option value="${lead.id}" ${lead.id === selectedLeadId ? "selected" : ""}>${lead.name}</option>`).join("")}</select></label><div class="form-row"><label class="field"><span>Type</span><select name="type"><option>Call</option><option>Text</option><option>Email</option><option>LINE</option><option>Instagram</option><option>Showing</option></select></label><label class="field"><span>Date</span><input name="date" type="date" value="${tomorrowKey}" required /></label></div><label class="field"><span>Time</span><input name="time" type="time" value="09:00" required /></label><label class="field"><span>Purpose</span><textarea name="note" required placeholder="What needs to happen next?"></textarea></label><button class="primary-button" type="submit">Schedule follow-up</button></form>`);
}

function renderNewCaseSheet() {
  return sheetFrame(`${sheetHeader("Workflow", "Create a case")}<form id="new-case-form" class="form-grid"><label class="field"><span>Case name</span><input name="title" required placeholder="Client home search" /></label><div class="form-row"><label class="field"><span>Client</span><select name="clientId">${appData.leads.map((lead) => `<option value="${lead.id}">${lead.name}</option>`).join("")}</select></label><label class="field"><span>Type</span><select name="type"><option>Buyer</option><option>Seller</option><option>Rental</option></select></label></div><label class="field"><span>Property or area</span><input name="property" required placeholder="Neighborhood or address" /></label><label class="field"><span>First milestone</span><input name="milestone" required placeholder="Confirm client requirements" /></label><button class="primary-button" type="submit">Create case</button></form>`);
}

function renderLeadDetailSheet(lead) {
  const followUp = nextFollowUp(lead);
  const phoneHref = `tel:${String(lead.phone || "").replace(/[^+\d]/g, "")}`;
  return sheetFrame(`${sheetHeader("Client profile", lead.name)}<div class="detail-person"><span class="avatar large" style="--avatar:${lead.avatar}">${lead.initials}</span><div><span class="tag ${lead.stageKey}">${lead.stage}</span><p>${lead.need}</p><small>${lead.source} · Prefers ${lead.preferredChannel}</small></div></div><div class="detail-contact-row"><a href="${phoneHref}">${icon("phone")} Call</a><button data-open-reply="${lead.id}">${icon("message")} Prepare reply</button><button data-schedule-for="${lead.id}">${icon("calendar")} Follow-up</button></div><section class="detail-section"><div class="section-heading"><h3>Next follow-up</h3><button class="section-link" data-schedule-for="${lead.id}">Schedule</button></div>${followUp ? `<div class="next-followup-banner"><span class="case-icon">${icon("clock")}</span><div><strong>${followUp.type} · ${formatDateLabel(followUp.date)} at ${formatTime(followUp.time)}</strong><p>${followUp.note}</p></div></div>` : `<div class="empty-inline">No follow-up scheduled.</div>`}</section>${lead.drafts.length ? `<section class="detail-section"><div class="section-heading"><h3>Ready drafts</h3><span class="mini-label">${lead.drafts.length}</span></div><div class="note-list">${lead.drafts.map((draft) => `<div class="note-item"><p><strong>${draft.channel}</strong> · ${draft.text}</p><time>${draft.createdAt} · Not sent</time></div>`).join("")}</div></section>` : ""}<section class="detail-section"><div class="section-heading"><h3>Notes</h3><span class="mini-label">${lead.notes.length}</span></div><form id="lead-note-form" class="note-composer"><input type="hidden" name="leadId" value="${lead.id}" /><textarea name="note" required placeholder="Write a client note…"></textarea><button class="primary-button" type="submit">Save note</button></form><div class="note-list">${lead.notes.map((note) => `<div class="note-item"><p>${note.text}</p><time>${note.createdAt}</time></div>`).join("")}</div></section>`).replace('class="sheet"', 'class="sheet detail-sheet"');
}

function renderFollowUpOutcomeSheet(lead, followUp) {
  return sheetFrame(`${sheetHeader("Record outcome", lead.name)}<form id="followup-outcome-form" class="form-grid"><input type="hidden" name="leadId" value="${lead.id}" /><input type="hidden" name="followUpId" value="${followUp.id}" /><div class="outcome-context"><span class="case-icon">${icon("check")}</span><div><strong>${followUp.type} · ${followUp.note}</strong><p>${formatDateLabel(followUp.date)} at ${formatTime(followUp.time)}</p></div></div><label class="field"><span>Outcome</span><select name="outcome"><option>Reached client</option><option>Left a message</option><option>No answer</option><option>Completed</option></select></label><label class="field"><span>What happened?</span><textarea name="note" placeholder="Decision, feedback, or context for the next touch…"></textarea></label><div class="form-row"><label class="field"><span>Next date</span><input name="nextDate" type="date" /></label><label class="field"><span>Next time</span><input name="nextTime" type="time" value="09:00" /></label></div><label class="field"><span>Next action</span><input name="nextNote" placeholder="Optional next step" /></label><button class="primary-button" type="submit">Complete and save outcome</button></form>`);
}

function renderReplyDraftSheet(lead) {
  const firstName = lead.name.split(" ")[0];
  return sheetFrame(`${sheetHeader("Prepare reply", lead.name)}<form id="reply-draft-form" class="form-grid"><input type="hidden" name="leadId" value="${lead.id}" /><label class="field"><span>Channel</span><select name="channel"><option ${lead.preferredChannel === "LINE" ? "selected" : ""}>LINE</option><option ${lead.preferredChannel === "Instagram" ? "selected" : ""}>Instagram</option><option ${lead.preferredChannel === "Phone" ? "selected" : ""}>Text</option><option ${lead.preferredChannel === "Email" ? "selected" : ""}>Email</option></select></label><label class="field"><span>Draft</span><textarea name="message" required>Hi ${firstName}, I wanted to follow up and make sure you have what you need. What would be most helpful next?</textarea></label><div class="connection-notice">${icon("shield")}<span><strong>This saves a draft only.</strong><small>Connect a business channel in More before Keyflow can deliver and track it.</small></span></div><button class="primary-button" type="submit">Save draft for review</button></form>`);
}

function renderChannelInfoSheet(connection) {
  const isLine = connection.id === "line";
  const requirements = isLine
    ? ["A LINE Official Account", "A secure webhook endpoint", "Account linking for existing clients"]
    : ["An Instagram Business or Creator account", "Meta messaging permission and app review", "A customer-initiated conversation"];
  const docsUrl = isLine ? "https://developers.line.biz/en/docs/messaging-api/overview/" : "https://www.postman.com/meta/instagram/documentation/6yqw8pt/instagram-api";
  return sheetFrame(`${sheetHeader("Channel setup", connection.name)}<div class="channel-setup"><span class="channel-logo ${connection.id} large">${isLine ? "LINE" : "IG"}</span><h3>Secure backend connection required</h3><p>${connection.detail}</p><ul>${requirements.map((item) => `<li>${item}</li>`).join("")}</ul><a class="primary-button button-link" href="${docsUrl}" target="_blank" rel="noreferrer">Read official setup guide</a><p class="fine-print">Keyflow cannot access a personal ${isLine ? "LINE" : "Instagram"} inbox.</p></div>`);
}

function renderCaseDetailSheet(caseItem) {
  const client = getLead(caseItem.clientId);
  return sheetFrame(`${sheetHeader(`${caseItem.type} case`, caseItem.title)}<div class="case-detail-hero"><div class="case-detail-title"><span class="case-icon">${icon("briefcase")}</span><div><strong>${caseItem.property}</strong><p>${client?.name || "Unassigned"} · ${caseItem.value}</p></div><span class="tag ${caseItem.stageTone}">${caseItem.stage}</span></div><div class="case-progress"><i style="width:${caseItem.progress}%"></i></div><div class="case-progress-label"><span>${caseItem.progress}% complete</span><span>Due ${caseItem.dueDate}</span></div></div><section class="detail-section"><div class="section-heading"><h3>Checklist</h3><span class="mini-label">${caseItem.tasks.filter((task) => task.done).length}/${caseItem.tasks.length}</span></div><div class="task-checklist">${caseItem.tasks.map((task) => `<button class="task-check ${task.done ? "done" : ""}" data-toggle-task="${caseItem.id}:${task.id}"><span>${icon("check")}</span><strong>${task.label}</strong></button>`).join("")}</div></section><section class="detail-section"><div class="section-heading"><h3>Case activity</h3><span class="mini-label">${caseItem.activity.length}</span></div><form id="case-note-form" class="note-composer"><input type="hidden" name="caseId" value="${caseItem.id}" /><textarea name="note" required placeholder="Add a case update…"></textarea><button class="primary-button" type="submit">Add update</button></form><div class="note-list">${caseItem.activity.map((item) => `<div class="note-item"><p>${item.text}</p><time>${item.createdAt}</time></div>`).join("")}</div></section>`).replace('class="sheet"', 'class="sheet detail-sheet"');
}

function renderSheet() {
  if (!state.sheet) {
    sheetRoot.innerHTML = "";
    return;
  }
  const renderers = {
    "new-lead": renderNewLeadSheet,
    "schedule-followup": () => renderFollowUpSheet(state.sheet.leadId),
    "new-case": renderNewCaseSheet,
    "lead-detail": () => renderLeadDetailSheet(getLead(state.sheet.leadId)),
    "case-detail": () => renderCaseDetailSheet(getCase(state.sheet.caseId)),
    "followup-outcome": () => renderFollowUpOutcomeSheet(getLead(state.sheet.leadId), getLead(state.sheet.leadId).followUps.find((item) => item.id === state.sheet.followUpId)),
    "reply-draft": () => renderReplyDraftSheet(getLead(state.sheet.leadId)),
    "channel-info": () => renderChannelInfoSheet(appData.channelConnections.find((item) => item.id === state.sheet.channelId)),
  };
  sheetRoot.innerHTML = renderers[state.sheet.type]();
}

let toastTimer;
function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("show"), 1800);
}

function navigate(view) {
  state.activeView = view;
  state.sheet = null;
  render();
}

function closeSheet() {
  state.sheet = null;
  renderSheet();
}

document.addEventListener("click", (event) => {
  const target = event.target;
  const viewButton = target.closest("[data-view]");
  if (viewButton) return navigate(viewButton.dataset.view);
  if (target.closest("[data-scroll-followups]")) return document.querySelector("#followup-queue")?.scrollIntoView({ behavior: "smooth", block: "start" });
  const leadFilter = target.closest("[data-lead-filter]");
  if (leadFilter) { state.leadFilter = leadFilter.dataset.leadFilter; return render(); }
  const caseFilter = target.closest("[data-case-filter]");
  if (caseFilter) { state.caseFilter = caseFilter.dataset.caseFilter; return render(); }
  const channelInfo = target.closest("[data-channel-info]");
  if (channelInfo) { state.sheet = { type: "channel-info", channelId: channelInfo.dataset.channelInfo }; return renderSheet(); }
  const replyButton = target.closest("[data-open-reply]");
  if (replyButton) { state.sheet = { type: "reply-draft", leadId: Number(replyButton.dataset.openReply) }; return renderSheet(); }
  const automationToggle = target.closest("[data-toggle-automation]");
  if (automationToggle) {
    const automation = getAutomation(automationToggle.dataset.toggleAutomation);
    automation.enabled = !automation.enabled;
    saveWorkspace();
    render();
    return showToast(`${automation.name} ${automation.enabled ? "enabled" : "paused"}`);
  }
  const openLead = target.closest("[data-open-lead]");
  if (openLead) { state.sheet = { type: "lead-detail", leadId: Number(openLead.dataset.openLead) }; return renderSheet(); }
  const openCase = target.closest("[data-open-case]");
  if (openCase) { state.sheet = { type: "case-detail", caseId: Number(openCase.dataset.openCase) }; return renderSheet(); }
  const scheduleButton = target.closest("[data-schedule-for]");
  if (scheduleButton) { state.sheet = { type: "schedule-followup", leadId: Number(scheduleButton.dataset.scheduleFor) }; return renderSheet(); }
  const openSheetButton = target.closest("[data-open-sheet]");
  if (openSheetButton) {
    state.sheet = { type: openSheetButton.dataset.openSheet };
    renderSheet();
    return window.setTimeout(() => sheetRoot.querySelector("input, textarea")?.focus(), 200);
  }
  const completeButton = target.closest("[data-complete-followup]");
  if (completeButton) {
    const [leadId, followUpId] = completeButton.dataset.completeFollowup.split(":").map(Number);
    state.sheet = { type: "followup-outcome", leadId, followUpId };
    return renderSheet();
  }
  const taskButton = target.closest("[data-toggle-task]");
  if (taskButton) {
    const [caseId, taskId] = taskButton.dataset.toggleTask.split(":").map(Number);
    const caseItem = getCase(caseId);
    const task = caseItem.tasks.find((item) => item.id === taskId);
    task.done = !task.done;
    caseItem.progress = Math.round((caseItem.tasks.filter((item) => item.done).length / caseItem.tasks.length) * 100);
    saveWorkspace(); render(); state.sheet = { type: "case-detail", caseId }; renderSheet();
    return showToast(task.done ? "Task completed" : "Task reopened");
  }
  if (target.closest("[data-explicit-close]")) return closeSheet();
  const backdrop = target.closest("[data-close-sheet]");
  if (backdrop && !target.closest("[data-sheet-content]")) return closeSheet();
  const toastButton = target.closest("[data-toast]");
  if (toastButton) return showToast(toastButton.dataset.toast);
});

document.addEventListener("input", (event) => {
  if (event.target.id !== "lead-search") return;
  const selectionStart = event.target.selectionStart;
  state.leadQuery = event.target.value;
  appView.innerHTML = renderLeads();
  const input = document.querySelector("#lead-search");
  input.focus();
  input.setSelectionRange(selectionStart, selectionStart);
});

document.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = new FormData(event.target);
  if (event.target.id === "new-lead-form") {
    const name = form.get("name").trim();
    const noteText = form.get("note").trim();
    const lead = { id: nextId(appData.leads), name, initials: name.split(" ").map((part) => part[0]).slice(0, 2).join("").toUpperCase(), stage: "New", stageKey: "nurture", need: `${form.get("interest")} · Details to confirm`, email: "", phone: form.get("phone"), source: form.get("source") || "Manual entry", preferredChannel: form.get("preferredChannel"), avatar: "#c8f75a", notes: noteText ? [{ id: Date.now(), text: noteText, createdAt: "Just now" }] : [], drafts: [], followUps: [] };
    appData.leads.unshift(lead);
    const automated = runNewLeadAutomation(lead);
    saveWorkspace();
    state.sheet = null;
    state.activeView = "leads";
    render();
    return showToast(automated ? `${name} added · callback scheduled` : `${name} was added to your clients`);
  }
  if (event.target.id === "followup-form") {
    const lead = getLead(form.get("leadId"));
    lead.followUps.push({ id: nextId(lead.followUps), type: form.get("type"), date: form.get("date"), time: form.get("time"), note: form.get("note").trim(), done: false });
    saveWorkspace(); state.sheet = null; render(); return showToast(`Follow-up scheduled for ${lead.name}`);
  }
  if (event.target.id === "lead-note-form") {
    const lead = getLead(form.get("leadId"));
    lead.notes.unshift({ id: nextId(lead.notes), text: form.get("note").trim(), createdAt: "Just now" });
    saveWorkspace(); state.sheet = { type: "lead-detail", leadId: lead.id }; renderSheet(); return showToast("Note saved");
  }
  if (event.target.id === "reply-draft-form") {
    const lead = getLead(form.get("leadId"));
    lead.drafts.unshift({ id: Date.now(), channel: form.get("channel"), text: form.get("message").trim(), status: "ready", createdAt: "Just now" });
    saveWorkspace();
    state.sheet = { type: "lead-detail", leadId: lead.id };
    renderSheet();
    return showToast("Draft saved for review · not sent");
  }
  if (event.target.id === "followup-outcome-form") {
    const lead = getLead(form.get("leadId"));
    const followUp = lead.followUps.find((item) => item.id === Number(form.get("followUpId")));
    const outcome = form.get("outcome");
    const note = form.get("note").trim();
    const nextDate = form.get("nextDate");
    followUp.done = true;
    followUp.outcome = outcome;
    followUp.completedAt = new Date().toISOString();
    if (note) lead.notes.unshift({ id: Date.now(), text: `${outcome}: ${note}`, createdAt: "Just now" });
    if (nextDate) {
      lead.followUps.push({ id: nextId(lead.followUps), type: followUp.type === "Showing" ? "Call" : followUp.type, date: nextDate, time: form.get("nextTime") || "09:00", note: form.get("nextNote").trim() || "Continue follow-up", done: false });
    } else if (followUp.type === "Showing") {
      runShowingAutomation(lead);
    }
    saveWorkspace();
    state.sheet = null;
    render();
    return showToast("Outcome saved · queue updated");
  }
  if (event.target.id === "new-case-form") {
    const newCase = { id: nextId(appData.cases), title: form.get("title").trim(), clientId: Number(form.get("clientId")), type: form.get("type"), stage: "New", stageTone: "nurture", property: form.get("property").trim(), value: "Value pending", progress: 0, nextMilestone: form.get("milestone").trim(), dueDate: "Not set", tasks: [{ id: Date.now(), label: form.get("milestone").trim(), done: false }], activity: [{ id: Date.now() + 1, text: "Case created", createdAt: "Just now" }] };
    appData.cases.unshift(newCase); saveWorkspace(); state.sheet = null; state.activeView = "cases"; render(); return showToast(`${newCase.title} was created`);
  }
  if (event.target.id === "case-note-form") {
    const caseItem = getCase(form.get("caseId"));
    caseItem.activity.unshift({ id: nextId(caseItem.activity), text: form.get("note").trim(), createdAt: "Just now" });
    saveWorkspace(); state.sheet = { type: "case-detail", caseId: caseItem.id }; renderSheet(); return showToast("Case update added");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && state.sheet) closeSheet();
});

render();
