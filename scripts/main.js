import { EntryListComponent } from "./JournalEntryList.js"
import { getEntries, getUsers, createEntry } from "./DataManager.js"

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

eventElement.addEventListener("click", event => {
  if (event.target.id === "newPost__cancel") {
      //clear the input fields
  }
})

eventElement.addEventListener("click", event => {
  event.preventDefault();
  if (event.target.id === "stash-button") {
  //collect the input values into an object to post to the DB
    const date = document.querySelector("input[name='journalDate']").value
    const mood = document.querySelector("select[name='dailyMood']").value
    const concepts = document.querySelector("input[name='conceptsCovered']").value
    const journalEntry = document.querySelector("textarea[name='journalEntry']").value
    //we have not created a user yet - for now, we will hard code `1`.
    //we can add the current time as well
    const postObject = {
        date: date,
        mood: mood,
        concept: concepts,
        text: journalEntry,
        userId: 1,
    }

  // be sure to import from the DataManager
      createEntry(postObject).then(showEntryList)
  }
})