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

const eventElement = document.querySelector('main')

eventElement.addEventListener("click", event => {
  if (event.target.id === "entry--1") {
    alert("This is the first entry")
  } else if (event.target.id === "entry--2") {
    alert("This is the second entry")
  } else if (event.target.id === "entry--3") {
    alert("This is the third entry")
  } else if (event.target.id === "entry--4") {
    alert("This is the fourth entry")
  } else if (event.target.id === "entry--5") {
    alert("This is the fifth entry")
  }
})

eventElement.addEventListener("click", event => {
  if (event.target.id === "stash-button") {
    alert("ya done this right again. Good job. Hopefully this will store your post soon.")
  }
})