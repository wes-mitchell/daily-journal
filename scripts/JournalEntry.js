import { getLoggedInUser } from "./DataManager.js"
import { formatDate } from "./helper.js"

export const JournalEntryComponent = (entry) => {
  console.log(entry);
  if (getLoggedInUser().id === entry.userId) {
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
          <p class="user">posted by: <b>${entry.user.name}</b></p>
          </div>
      </section>
  `
} else {
  return `<section id="entry--${entry.id}" class="journalEntry">
  <h3>${entry.concept}</h3>
  <div class="date-mood">
    <p class="date">${formatDate(entry.date)}</p>
    <p class="mood">${entry.mood}</p>
    </div>
    <p>${entry.text}</p>
    <div class="like">
    <p class="user" style="margin-left: 0px">posted by: <b>${entry.user.name}</b></p>
    <p>&#128077 &#128078</p>
    </div>
    </div>
    </section>`
  }
}