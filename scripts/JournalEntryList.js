/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data module component
 */

import { getJournalEntries } from "./JournalData.js"
import { JournalEntryComponent } from "./JournalEntry.js"

// export const entryList = () => {

// DOM reference to where all entries will be rendered
const contentElement = document.querySelector("#entryLog")

export const EntryListComponent = () => {
    // Use the journal entry data from the data module component
    const entries = getJournalEntries()

    let entryLogHTMLrepresentation = '';

    for (const entry of entries) {
      entryLogHTMLrepresentation += JournalEntryComponent(entry)
    }
        /*
            Invoke the component that returns an
            HTML representation of a single entry
        */
        contentElement.innerHTML += `
          ${entryLogHTMLrepresentation}
          `
  }
//} 