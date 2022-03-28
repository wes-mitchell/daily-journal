import { formatDate } from "./helper.js"

export const JournalEntryComponent = (entry) => {
  return `
      <section id="entry--${entry.id}" class="journalEntry">
        <h3>${entry.concept}</h3>
          <p class="date">${formatDate(entry.date)}</p>
          <p class="mood">${entry.mood}</p>
          <p>${entry.text}</p>
          <div class="delete-button">
          <label for="submit"></label><br>
          <input type="submit" value="Delete" class="deleteButton" id="deleteButton"><br>
          </div>
      </section>
  `
}