import { EntryListComponent } from "./JournalEntryList.js"
import { getEntries, getUsers, createEntry, useEntries, getSingleEntry, updateEntry, deleteEntry} from "./DataManager.js"
import { buildForm } from "./form.js"
import { entryEdit } from "./entryEdit.js"


const showEntryList = () => { 
  const postEl = document.querySelector("#entryLog")
  postEl.innerHTML = '', deleteEntry
  getEntries().then((allEntries) => {
    postEl.innerHTML = EntryListComponent(allEntries)
  })
}

const startJournal = () => { 
  buildForm()
  showEntryList();
}

startJournal()

const eventElement = document.querySelector('main')

const showMoodPosts = (mood) => {
  const postEl = document.querySelector("#entryLog")
  const filteredData = useEntries().filter(singleEntry => {
    if (singleEntry.mood.toLowerCase() === mood) {
      return singleEntry
    }
  })
  postEl.innerHTML = EntryListComponent(filteredData)
}  

eventElement.addEventListener("change", event => {
  if (event.target.id === "mood-drop") {
    const currentMood = event.target.value
    showMoodPosts(currentMood)
  }
})


const clearFields = () => { 
  document.querySelector("input[name='journalDate']").value = ''
  document.querySelector("select[name='dailyMood']").value =''
  document.querySelector("input[name='conceptsCovered']").value =''
  document.querySelector("textarea[name='journalEntry']").value = ''
 }

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
      clearFields()
  }
})

eventElement.addEventListener("click", event => {
  event.preventDefault();
  if (event.target.id.startsWith('deleteButton')) {
    const postId = event.target.id.split('--')[1]
    deleteEntry(postId)
    .then(response => {
      showEntryList()
    })
  }
})

eventElement.addEventListener("click", event => {
  if (event.target.id.startsWith('editButton')) {
    const postId = event.target.id.split('--')[1];
    getSingleEntry(postId)
    .then(response => {
      showEdit(response)
    })
  }
})

const showEdit = (entryObj) => {
  entryEdit(entryObj)
  console.log(entryObj);
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  })
}

eventElement.addEventListener("click", event => {
  if (event.target.id.startsWith('updateButton')) {
    const postId = event.target.id.split('--')[1]
    const date = document.querySelector("input[name='entrydate']").value
    const mood = document.querySelector("input[name='entrymood']").value
    const concepts = document.querySelector("input[name='conceptsCovered']").value
    const journalEntry = document.querySelector("textarea[name='journalEntry']").value

    const entryObj = {
      id: parseInt(postId),
      date: (date),
      concept: concepts,
      mood: mood,
      text: journalEntry
    }

    updateEntry(entryObj)
    .then(response => {
      showEntryList()
      buildForm()
    })

  }
})

eventElement.addEventListener("click", event => {
  if (event.target.id.startsWith('cancelButton')) {
    buildForm()
  }
})

document.querySelector("#conceptsCovered").addEventListener("keydown", keyPressEvent => {
  const journalEntry = document.querySelector("textarea[name='journalEntry']").value
  if (keyPressEvent.charCod === 9) {
    console.log("string here");
    journalEntry.innerHTML = ''
  }
})