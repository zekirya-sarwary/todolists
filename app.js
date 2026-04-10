/* ─────────────────────────────────────────────────────────────
   TaskFlow — style.css
   A modern, responsive todo-list stylesheet
   ───────────────────────────────────────────────────────────── */

/* ── 1. Design Tokens (CSS Variables) ────────────────────── */
:root {
  /* Brand */
  --brand:        hsl(250, 84%, 62%);
  --brand-light:  hsl(250, 84%, 72%);
  --brand-dark:   hsl(250, 84%, 50%);
  --brand-glow:   hsl(250, 84%, 62%, 0.25);

  /* Semantic colors */
  --danger:       hsl(0,   72%, 58%);
  --danger-light: hsl(0,   72%, 95%);
  --success:      hsl(142, 60%, 48%);
  --warning:      hsl(38,  92%, 50%);

  /* Priority */
  --priority-low:    hsl(142, 60%, 48%);
  --priority-medium: hsl(38,  92%, 50%);
  --priority-high:   hsl(0,   72%, 58%);

  /* Surface / Background */
  --bg:           hsl(226, 25%, 97%);
  --surface:      hsl(0,   0%, 100%);
  --surface-2:    hsl(226, 20%, 95%);
  --border:       hsl(226, 20%, 90%);

  /* Text */
  --text-primary:   hsl(226, 30%, 14%);
  --text-secondary: hsl(226, 15%, 45%);
  --text-disabled:  hsl(226, 10%, 72%);

  /* Shadow */
  --shadow-sm:  0 1px 3px hsla(226, 30%, 14%, 0.07);
  --shadow-md:  0 4px 16px hsla(226, 30%, 14%, 0.10);
  --shadow-lg:  0 12px 40px hsla(226, 30%, 14%, 0.16);

  /* Radius */
  --radius-sm:  8px;
  --radius-md:  14px;
  --radius-lg:  20px;
  --radius-xl:  28px;

  /* Transitions */
  --ease-out:  cubic-bezier(0.22, 1, 0.36, 1);
  --ease-in:   cubic-bezier(0.64, 0, 0.78, 0);
  --t-fast:    160ms;
  --t-normal:  260ms;
  --t-slow:    400ms;
}

/* ── Dark Theme ───────────────────────────────────────────── */
[data-theme="dark"] {
  --bg:           hsl(226, 25%, 10%);
  --surface:      hsl(226, 22%, 15%);
  --surface-2:    hsl(226, 20%, 20%);
  --border:       hsl(226, 18%, 26%);
  --text-primary:   hsl(226, 20%, 92%);
  --text-secondary: hsl(226, 15%, 60%);
  --text-disabled:  hsl(226, 10%, 40%);
  --shadow-sm:  0 1px 3px hsla(0, 0%, 0%, 0.30);
  --shadow-md:  0 4px 16px hsla(0, 0%, 0%, 0.40);
  --shadow-lg:  0 12px 40px hsla(0, 0%, 0%, 0.50);
  --danger-light: hsl(0, 30%, 20%);
}

/* ── 2. Reset & Base ──────────────────────────────────────── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

html { scroll-behavior: smooth; }

body {
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 15px;
  line-height: 1.6;
  background: var(--bg);
  color: var(--text-primary);
  min-height: 100dvh;
  transition: background var(--t-normal) var(--ease-out),
              color     var(--t-normal) var(--ease-out);
  /* Subtle dot-grid background */
  background-image: radial-gradient(circle, var(--border) 1px, transparent 1px);
  background-size: 28px 28px;
}

a { color: var(--brand); text-decoration: none; }
button, input, select, textarea { font-family: inherit; }
ul, ol { list-style: none; }
.sr-only { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0,0,0,0); }

/* ── 3. App Layout ────────────────────────────────────────── */
.app-wrapper {
  max-width: 780px;
  margin: 0 auto;
  padding: 24px 16px 60px;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* ── 4. Header ────────────────────────────────────────────── */
.app-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.55rem;
  font-weight: 700;
  letter-spacing: -0.5px;
  color: var(--brand);
}

.logo i {
  font-size: 1.3rem;
  filter: drop-shadow(0 0 8px var(--brand-glow));
  animation: pulse-glow 3s ease-in-out infinite;
}

@keyframes pulse-glow {
  0%, 100% { filter: drop-shadow(0 0 6px var(--brand-glow)); }
  50%       { filter: drop-shadow(0 0 16px var(--brand)); }
}

.subtitle {
  font-size: 0.82rem;
  color: var(--text-secondary);
  margin-top: 2px;
  font-weight: 500;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 10px;
}

/* ── 5. Controls Bar ──────────────────────────────────────── */
.controls-bar {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.search-wrap {
  position: relative;
  flex: 1;
  min-width: 200px;
}

.search-icon {
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-secondary);
  font-size: 0.85rem;
  pointer-events: none;
}

#search-input {
  width: 100%;
  padding: 10px 40px 10px 38px;
  background: var(--surface);
  border: 1.5px solid var(--border);
  border-radius: var(--radius-xl);
  color: var(--text-primary);
  font-size: 0.875rem;
  transition: border-color var(--t-fast), box-shadow var(--t-fast);
  outline: none;
}

#search-input:focus {
  border-color: var(--brand);
  box-shadow: 0 0 0 3px var(--brand-glow);
}

.clear-search-btn {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 0.78rem;
  color: var(--text-secondary);
}

.controls-right {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

/* Filter Tabs */
.filter-tabs {
  display: flex;
  background: var(--surface);
  border: 1.5px solid var(--border);
  border-radius: var(--radius-xl);
  padding: 3px;
  gap: 2px;
}

.tab {
  padding: 6px 16px;
  border-radius: var(--radius-xl);
  border: none;
  background: transparent;
  color: var(--text-secondary);
  font-size: 0.82rem;
  font-weight: 500;
  cursor: pointer;
  transition: background var(--t-fast), color var(--t-fast);
  white-space: nowrap;
}

.tab.active {
  background: var(--brand);
  color: #fff;
  box-shadow: var(--shadow-sm);
}

.tab:not(.active):hover { background: var(--surface-2); color: var(--text-primary); }

/* Sort Select */
#sort-select {
  padding: 9px 14px;
  background: var(--surface);
  border: 1.5px solid var(--border);
  border-radius: var(--radius-xl);
  color: var(--text-primary);
  font-size: 0.82rem;
  font-weight: 500;
  cursor: pointer;
  outline: none;
  transition: border-color var(--t-fast);
}

#sort-select:focus { border-color: var(--brand); }

/* ── 6. Task List ─────────────────────────────────────────── */
.task-list-container { flex: 1; }

.task-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

/* ── Task Card ─────────────────────────────────────────────── */
.task-card {
  background: var(--surface);
  border: 1.5px solid var(--border);
  border-radius: var(--radius-md);
  padding: 16px 18px;
  display: flex;
  align-items: flex-start;
  gap: 14px;
  box-shadow: var(--shadow-sm);
  cursor: grab;
  position: relative;
  transition: transform var(--t-fast) var(--ease-out),
              box-shadow var(--t-fast) var(--ease-out),
              border-color var(--t-fast),
              opacity var(--t-fast);

  /* Priority accent bar */
  border-left-width: 4px;
}

.task-card:active { cursor: grabbing; }
.task-card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}

/* Priority border colors */
.task-card[data-priority="low"]    { border-left-color: var(--priority-low); }
.task-card[data-priority="medium"] { border-left-color: var(--priority-medium); }
.task-card[data-priority="high"]   { border-left-color: var(--priority-high); }

/* Completed state */
.task-card.completed {
  opacity: 0.65;
  border-left-color: var(--text-disabled) !important;
}
.task-card.completed .task-title {
  text-decoration: line-through;
  color: var(--text-disabled);
}

/* Drag states */
.task-card.dragging {
  opacity: 0.4;
  box-shadow: none;
  transform: scale(0.98);
  cursor: grabbing;
}
.task-card.drag-over {
  border-color: var(--brand);
  box-shadow: 0 0 0 3px var(--brand-glow);
}

/* Entrance animation */
@keyframes slide-in {
  from { opacity: 0; transform: translateY(14px) scale(0.98); }
  to   { opacity: 1; transform: translateY(0)    scale(1); }
}
.task-card.entering { animation: slide-in var(--t-slow) var(--ease-out) forwards; }

/* Exit animation */
@keyframes slide-out {
  from { opacity: 1; transform: translateX(0)     scale(1); max-height: 200px; }
  to   { opacity: 0; transform: translateX(-20px) scale(0.96); max-height: 0; padding-block: 0; margin: 0; }
}
.task-card.exiting {
  animation: slide-out var(--t-normal) var(--ease-in) forwards;
  overflow: hidden;
  pointer-events: none;
}

/* Drag handle */
.drag-handle {
  color: var(--text-disabled);
  font-size: 0.9rem;
  padding-top: 3px;
  cursor: grab;
  transition: color var(--t-fast);
  flex-shrink: 0;
}
.task-card:hover .drag-handle { color: var(--text-secondary); }

/* Checkbox */
.task-checkbox {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: 2px solid var(--border);
  flex-shrink: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2px;
  transition: background var(--t-fast), border-color var(--t-fast), box-shadow var(--t-fast);
  background: transparent;
}
.task-checkbox:hover {
  border-color: var(--brand);
  box-shadow: 0 0 0 3px var(--brand-glow);
}
.task-card.completed .task-checkbox {
  background: var(--brand);
  border-color: var(--brand);
  color: #fff;
}
.task-checkbox i { font-size: 0.7rem; opacity: 0; transition: opacity var(--t-fast); }
.task-card.completed .task-checkbox i { opacity: 1; }

/* Body */
.task-body { flex: 1; min-width: 0; }

.task-title {
  font-weight: 600;
  font-size: 0.97rem;
  color: var(--text-primary);
  line-height: 1.4;
  word-break: break-word;
  transition: color var(--t-fast);
}

.task-desc {
  font-size: 0.83rem;
  color: var(--text-secondary);
  margin-top: 4px;
  line-height: 1.5;
  word-break: break-word;
}

.task-meta {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 8px;
}

.task-due, .task-priority-badge {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 0.75rem;
  font-weight: 500;
  padding: 3px 9px;
  border-radius: 20px;
}

.task-due {
  background: var(--surface-2);
  color: var(--text-secondary);
}
.task-due.overdue {
  background: var(--danger-light);
  color: var(--danger);
}
.task-due.due-soon {
  background: hsl(38, 92%, 94%);
  color: hsl(38, 80%, 35%);
}
[data-theme="dark"] .task-due.due-soon {
  background: hsl(38, 40%, 22%);
  color: hsl(38, 80%, 70%);
}

.task-priority-badge { text-transform: capitalize; }
.task-priority-badge.low    { background: hsl(142, 60%, 92%); color: hsl(142, 54%, 30%); }
.task-priority-badge.medium { background: hsl(38,  92%, 92%); color: hsl(38,  70%, 32%); }
.task-priority-badge.high   { background: hsl(0,   72%, 94%); color: hsl(0,   60%, 40%); }
[data-theme="dark"] .task-priority-badge.low    { background: hsl(142, 35%, 20%); color: hsl(142, 60%, 65%); }
[data-theme="dark"] .task-priority-badge.medium { background: hsl(38,  40%, 20%); color: hsl(38,  80%, 70%); }
[data-theme="dark"] .task-priority-badge.high   { background: hsl(0,   30%, 22%); color: hsl(0,   72%, 70%); }

/* Actions */
.task-actions {
  display: flex;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
  opacity: 0;
  transition: opacity var(--t-fast);
}
.task-card:hover .task-actions,
.task-card:focus-within .task-actions { opacity: 1; }

/* ── 7. Buttons ───────────────────────────────────────────── */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 10px 20px;
  border-radius: var(--radius-xl);
  border: none;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: background var(--t-fast), box-shadow var(--t-fast), transform var(--t-fast);
  white-space: nowrap;
}

.btn:active { transform: scale(0.97); }

.btn-primary {
  background: var(--brand);
  color: #fff;
  box-shadow: 0 2px 10px hsla(250, 84%, 62%, 0.30);
}
.btn-primary:hover {
  background: var(--brand-dark);
  box-shadow: 0 4px 18px hsla(250, 84%, 62%, 0.45);
}

.btn-danger {
  background: var(--danger);
  color: #fff;
}
.btn-danger:hover { background: hsl(0, 72%, 48%); }

.btn-ghost {
  background: transparent;
  color: var(--text-secondary);
  border: 1.5px solid var(--border);
}
.btn-ghost:hover {
  background: var(--surface-2);
  color: var(--text-primary);
}

.btn-sm { padding: 7px 14px; font-size: 0.8rem; }

/* Icon Btn */
.icon-btn {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 1.5px solid var(--border);
  background: var(--surface);
  color: var(--text-secondary);
  font-size: 0.9rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background var(--t-fast), color var(--t-fast), border-color var(--t-fast);
}
.icon-btn:hover { background: var(--surface-2); color: var(--text-primary); }

/* Edit / Delete inside card */
.task-actions .icon-btn {
  width: 32px;
  height: 32px;
  font-size: 0.78rem;
  border: none;
  background: transparent;
}
.task-actions .icon-btn.edit-btn:hover   { background: hsl(250, 84%, 94%); color: var(--brand); }
.task-actions .icon-btn.delete-btn:hover { background: var(--danger-light); color: var(--danger); }
[data-theme="dark"] .task-actions .icon-btn.edit-btn:hover { background: hsl(250, 30%, 26%); }

/* ── 8. Empty State ───────────────────────────────────────── */
.empty-state {
  text-align: center;
  padding: 64px 32px;
  color: var(--text-secondary);
}
.empty-illustration {
  font-size: 4rem;
  margin-bottom: 18px;
  opacity: 0.3;
}
.empty-state h3 {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-secondary);
  margin-bottom: 6px;
}
.empty-state p { font-size: 0.875rem; }

/* ── 9. Modal ─────────────────────────────────────────────── */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: hsla(226, 30%, 10%, 0.55);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 16px;
  /* Hidden by default */
  opacity: 0;
  pointer-events: none;
  transition: opacity var(--t-normal) var(--ease-out);
}

.modal-overlay.open {
  opacity: 1;
  pointer-events: auto;
}

.modal-box {
  background: var(--surface);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  padding: 32px;
  max-width: 440px;
  width: 100%;
  text-align: center;
  transform: scale(0.92) translateY(12px);
  transition: transform var(--t-normal) var(--ease-out);
}
.modal-overlay.open .modal-box { transform: scale(1) translateY(0); }

/* Confirmation Modal */
.modal-icon { font-size: 2.4rem; color: var(--warning); margin-bottom: 12px; }
.modal-box h2 { font-size: 1.2rem; font-weight: 700; margin-bottom: 8px; }
.modal-box p  { font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 24px; }
.modal-actions { display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; }

/* Task Form Modal */
.task-modal-box {
  max-width: 520px;
  text-align: left;
  padding: 24px 28px 28px;
}

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 22px;
}
.modal-header h2 { font-size: 1.15rem; font-weight: 700; }

/* Form */
.form-group { display: flex; flex-direction: column; gap: 6px; margin-bottom: 16px; }
.form-group label {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.04em;
}
.required { color: var(--danger); }

.form-group input[type="text"],
.form-group input[type="date"],
.form-group textarea,
.form-group select {
  padding: 10px 14px;
  background: var(--surface-2);
  border: 1.5px solid var(--border);
  border-radius: var(--radius-sm);
  color: var(--text-primary);
  font-size: 0.9rem;
  outline: none;
  transition: border-color var(--t-fast), box-shadow var(--t-fast);
  resize: vertical;
}

.form-group input:focus,
.form-group textarea:focus,
.form-group select:focus {
  border-color: var(--brand);
  box-shadow: 0 0 0 3px var(--brand-glow);
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
  margin-bottom: 16px;
}

.field-error {
  font-size: 0.78rem;
  color: var(--danger);
  min-height: 16px;
}

.task-modal-box .modal-actions {
  justify-content: flex-end;
  margin-top: 6px;
}

/* ── 10. Toast Notifications ──────────────────────────────── */
#toast-container {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 2000;
  display: flex;
  flex-direction: column-reverse;
  gap: 10px;
  pointer-events: none;
}

.toast {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 18px;
  background: var(--surface);
  border: 1.5px solid var(--border);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-lg);
  font-size: 0.86rem;
  font-weight: 500;
  color: var(--text-primary);
  min-width: 200px;
  max-width: 340px;
  pointer-events: auto;

  /* Animate in */
  animation: toast-in var(--t-slow) var(--ease-out) forwards;
}

.toast.hide { animation: toast-out var(--t-normal) var(--ease-in) forwards; }

@keyframes toast-in {
  from { opacity: 0; transform: translateY(16px) scale(0.95); }
  to   { opacity: 1; transform: translateY(0)    scale(1); }
}
@keyframes toast-out {
  from { opacity: 1; transform: translateY(0); }
  to   { opacity: 0; transform: translateY(8px); }
}

.toast-icon { font-size: 1rem; flex-shrink: 0; }
.toast.success .toast-icon { color: var(--success); }
.toast.error   .toast-icon { color: var(--danger);  }
.toast.info    .toast-icon { color: var(--brand);   }
.toast.warning .toast-icon { color: var(--warning); }

/* ── 11. Footer ───────────────────────────────────────────── */
.app-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
}
.footer-info { font-size: 0.78rem; color: var(--text-disabled); }

/* ── 12. Dark Mode Toggle (animated) ────────────────────────── */
#dark-mode-btn {
  position: relative;
  overflow: hidden;
}
#dark-mode-btn i { transition: transform var(--t-normal) var(--ease-out); }
[data-theme="dark"] #dark-mode-btn i { transform: rotate(20deg); }

/* ── 13. Scrollbar ────────────────────────────────────────── */
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: var(--border); border-radius: 99px; }

/* ── 14. Responsive ──────────────────────────────────────── */
@media (max-width: 600px) {
  .app-wrapper { padding: 16px 12px 50px; gap: 14px; }
  .controls-bar { gap: 10px; }
  .controls-right { gap: 8px; }
  .form-row { grid-template-columns: 1fr; }
  .task-modal-box { padding: 20px; }
  .modal-box { padding: 24px; }
  #toast-container { bottom: 16px; right: 12px; left: 12px; align-items: center; }
  .toast { width: 100%; max-width: 100%; }
  .btn { padding: 10px 16px; }
}

@media (max-width: 440px) {
  .logo span { font-size: 1.2rem; }
  .filter-tabs .tab { padding: 6px 10px; font-size: 0.78rem; }
  .task-actions { opacity: 1; } /* Always show on mobile */
}
