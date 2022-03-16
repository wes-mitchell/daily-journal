import { JournalEntryComponent } from "./JournalEntry.js"
/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data module component
 */

export const EntryListComponent = (allPosts) => {
	let entryHTML = "";
		//Loop over the array of posts and for each one, invoke the Post component which returns HTML representation
		for (const entryObject of allPosts) {
			//what is a postObject?
			entryHTML += JournalEntryComponent(entryObject)
		}
		return entryHTML;	
}




