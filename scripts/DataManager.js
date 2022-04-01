import { EntryListComponent } from "./JournalEntryList.js";

export const getUsers = () => {
  return fetch("http://localhost:8088/users")
  .then(response => response.json())
  .then(parsedResponse => {
      // do something with response here
      return parsedResponse;
  })
}

let entryCollection = []

export const getEntries = () => {
  // const userId = getLoggedInUser().id
  return fetch("http://localhost:8088/journal-entries?_expand=user&_sort=date&_order=desc")
  .then(response => response.json())
  .then(parsedResponse => {
    console.log("data with user", parsedResponse);
      entryCollection = parsedResponse
      return parsedResponse;
  })
}

export const useEntries = () => { 
  return [...entryCollection]
 }

 export const createEntry = postObj => {
   return fetch("http://localhost:8088/journal-entries", {
     method: "POST",
     headers: {
       "Content-Type": "application/json"
      },
      body: JSON.stringify(postObj)
      
    })
    .then(response => response.json())
}

export const getSingleEntry = (postId) => {
    return fetch(`http://localhost:8088/journal-entries/${postId}`)
      .then(response => response.json())
}

export const updateEntry = (entryObj) => { 
  return fetch(`http://localhost:8088/journal-entries/${entryObj.id}`, {
  method: "PUT",
  headers: {
    "Content-Type": "application/json"
  },
    body: JSON.stringify(entryObj)

  })
    .then(response => response.json())

 }

 export const deleteEntry = postId => {
  return fetch(`http://localhost:8088/journal-entries/${postId}`, {
      method: "DELETE",
      headers: {
          "Content-Type": "application/json"
      }

  })
      .then(response => response.json())
      
}

let loggedInUser = {}

export const logoutUser = () => { 
  loggedInUser = {}
 }

 export const getLoggedInUser = () => {
   return loggedInUser
 }

 export const setLoggedInUser = (userObj) => { 
   loggedInUser = userObj
}

// ====== Fetches user info based on login info  ======

export const loginUser = (userObj) => { 
  return fetch(`http://localhost:8088/users?name=${userObj.name}&email=${userObj.email}`)
  .then(response => response.json())
  .then(parsedUserObj => {
    console.log(parsedUserObj); // returns as an array
    if (parsedUserObj.length > 0) {
    setLoggedInUser(parsedUserObj[0])
    return getLoggedInUser() 
  } else {
    // no user 
    return false
   }
  })
}

// ======== registers a new user obj and places it in JSON db with =======

export const registerUser = (userObj) => { 
  return fetch(`http://localhost:8088/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userObj)
  })
  .then(response => response.json())
  .then(parsedUser => {
    setLoggedInUser(parsedUser)
    return getLoggedInUser()
  })
}

// ====== gets logged in users posts only ======

export const loggedUsersPosts = (userObj) => {
  console.log(userObj);
  return fetch(`http://localhost:8088/journal-entries?userId=${userObj.id}&_expand=user&_sort=date&_order=desc`)
  .then(response => response.json())
  .then(userPosts => {
    console.log(userPosts);
    return userPosts
  })
}

