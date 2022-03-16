import { EntryListComponent } from "./JournalEntryList.js"
import { getEntries, getUsers } from "./DataManager.js"

const showEntryList = () => { 
  const postEl = document.querySelector("#entryLog")
  getEntries().then((allEntries) => {
    postEl.innerHTML = EntryListComponent(allEntries)
  })
}

const startJournal = () => { 
  showEntryList();
}

startJournal()