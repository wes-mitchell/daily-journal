/*
 *   Journal data for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.

const journal = [
  {
      id: 1,
      date: "02/28/2022",
      concept: "Modular Javascript Functions",
      entry: "We learned how to build HTML elements and insert them into are index.html file",
      mood: "Pumped"
  },
  {
      id: 2,
      date: "02/26/2022",
      concept: "Working in a group",
      entry: "We worked in a group project titled Hello World to dividing small tasks amongst each team member to build and complete a mock travel website.",
      mood: "Happy"
  },
  {
    id: 3,
    date: "02/14/2022",
    concept: "Fundamental Javascript",
    entry: "We began to cover the fundamentals of functions in Javascript.",
    mood: "Stoked"
  },
  {
    id: 4,
    date: "03/11/2022",
    concept: "Event Listeners",
    entry: "We began to cover the fundamentals of adding event listeners and manipulating the DOM with javascript.",
    mood: "Stoked"
  }
]

/*
  You export a function that provides a version of the
  raw data in the format that you want
*/

export const getJournalEntries = () => {
  const sortedByDate = journal.sort(
      (currentEntry, nextEntry) =>
          Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
  )
  return sortedByDate
}