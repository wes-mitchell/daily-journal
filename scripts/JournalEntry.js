import { formatDate } from "./helper.js"


export const JournalEntryComponent = (entry) => {
  return `
      <section id="entry--${entry.id}" class="journalEntry">
        <h3>${entry.concept}</h3>
          <p class="date">${formatDate(entry.date)}</p>
          <p>${entry.entry}</p>
      </section>
  `
}

