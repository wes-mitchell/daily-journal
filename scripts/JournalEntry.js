import { formatDate } from "./helper.js"

export const JournalEntryComponent = (entry) => {
  return `
      <section id="entry--${entry.id}" class="journalEntry">
        <h3>${entry.concept}</h3>
        <div class="date-mood">
          <p class="date">${formatDate(entry.date)}</p>
          <p class="mood">${entry.mood}</p>
          </div>
          <p>${entry.text}</p>
          <div class="entry-buttons">
          <div class="delete-button">
          <label for="submit"></label><br>
          <input type="submit" value="delete" class="deleteButton" id="deleteButton--${entry.id}"><br>
          </div>
          <div class="edit-button">
          <label for="submit"></label><br>
          <input type="submit" value="edit" class="editButton" id="editButton--${entry.id}">
          </div>
          </div>
      </section>
  `
}