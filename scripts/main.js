import { EntryListComponent } from "./JournalEntryList.js"
import { getEntries, getUsers, createEntry, useEntries, getSingleEntry,
         updateEntry, deleteEntry, logoutUser, getLoggedInUser, setLoggedInUser, loginUser, registerUser, loggedUsersPosts} from "./DataManager.js"
import { buildForm } from "./form.js"
import { entryEdit } from "./entryEdit.js"
import { loginForm } from "./loginForm.js"
import { RegisterForm } from "./registerForm.js"
import { showFooter, showHeader } from "./headandFooter.js"

const showEntryList = () => { 
  const postEl = document.querySelector("#entryLog")
  postEl.innerHTML = ''
  getEntries().then((allEntries) => {
    postEl.innerHTML = EntryListComponent(allEntries)
  })
}

const startJournal = () => { 
  showHeader()
  buildForm()
  showEntryList()
  showFooter() 
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
        userId: getLoggedInUser().id,
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
  event.preventDefault()
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
      text: journalEntry,
      userId: getLoggedInUser().id
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

//=================== listener for logout button =============

document.querySelector("footer").addEventListener("click", event => {
  if (event.target.id === "logout") {
    console.log("you clicked logout");
    let entryEl = document.querySelector("#entryLog")
    entryEl.innerHTML = ''
    logoutUser()
    // console.log(getLoggedInUser());
    sessionStorage.clear()
    checkForUser()
  }
})

//==================== Checks for user on page load ===============

const checkForUser = () => { 
  if (sessionStorage.getItem('user')) {
    setLoggedInUser(JSON.parse(sessionStorage.getItem('user')))
    startJournal()
    show
  } else {
    showLoginRegister()
  }
}

// ====== shows Login and Register forms if no user is logged in on page load ======

const showLoginRegister = () => { 
  const entryElement = document.querySelector(".form")
  entryElement.innerHTML = `${loginForm()} <hr> ${RegisterForm()}`
  let entryLog = document.querySelector("#entryLog")
  entryLog = ''
 }

// ======= checks if user has login credentials on login submit. If so it sets session storage to that user. =========

eventElement.addEventListener("click", event => {
  event.preventDefault();
  if (event.target.id === "login__submit") {
    const userObj = {
      name: document.querySelector("input[name='name']").value,
      email: document.querySelector("input[name='email']").value
    }
    loginUser(userObj)
    .then(dbUserObj => {
      if (dbUserObj) {
      sessionStorage.setItem("user", JSON.stringify(dbUserObj))
      startJournal()
    } else {
      const entryElement = document.querySelector(".form")
      entryElement.innerHTML = `<p class="noUser">Yo, you don't exist yet. Register 4 free &#x1F918 or go straight to jail. ${loginForm()} <hr> ${RegisterForm()}`
    }
    })
  }
})

// ========= Creates new user Obj on Register Click and sets as current user ==========

eventElement.addEventListener("click", event => {
  if (event.target.id === "register__submit") {
    const userObj = {
      name: document.querySelector("input[name='registerName']").value,
      email: document.querySelector("input[name='registerEmail']").value
    }
    registerUser(userObj)
    .then(dbUserObj => {
      sessionStorage.setItem("user", JSON.stringify(dbUserObj))
      startJournal()
    })
  }
})

document.querySelector("footer").addEventListener("click", event => {
  const currentUser = getLoggedInUser()
  let entryEl = document.querySelector('#entryLog')
  if (event.target.id === "userposts") {
    loggedUsersPosts(currentUser)
    .then(userPosts => {
      entryEl.innerHTML = EntryListComponent(userPosts)
    })

  }
})

checkForUser()