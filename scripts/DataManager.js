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
  return fetch("http://localhost:8088/journal-entries")
  .then(response => response.json())
  .then(parsedResponse => {
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
  return fetch(`http://localhost:8088/journal-entries/${postObj.id}`, {
  method: "PUT",
  headers: {
    "Content-Type": "application.json"
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


