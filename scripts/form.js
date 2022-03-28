// Builds inner html for the Journal Form

export const buildForm = () => { 
  const formEl = document.querySelector(".form")
  formEl.innerHTML = `<h2>What's on your mind today?</h2>
  <form action="">
    <fieldset class="journal-form">
      <label for="journalDate">Date of entry</label><br>
      <input type="date" name="journalDate" id="journalDate" class="dateAndMood"><br>
      <label for="dailyMood">Mood for the day</label><br>
      <select name="dailyMood" id="dailyMood" class="dateAndMood">
        <option value="happy">Happy</option>
        <option value="pumped">Pumped</option>
        <option value="dobetter">Could be better</option>
        <option value="bummed">Bummed</option>
      </select><br>
      <label for="conceptsCovered" class="concepts">Concepts Covered</label><br>
      <input type="text" name="conceptsCovered" id="conceptsCovered"><br>
      <label for="journalEntry">Journal Entry</label><br>
      <textarea id="journalEntry" name="journalEntry" rows="5" cols="25" class="entry"></textarea><br>
      <label for="submit"></label><br>
      <input type="submit" value="Stash that bad boy" class="button" id="stash-button"><br>
      </form>
    </fieldset>
  </form>
  <br>
  <div class="mood-filter">
  <label for="mood-type">Sort by Mood:</label>
  <select name="mood" id="mood-drop">
    <option value="happy">Happy</option>
    <option value="stoked">Stoked</option>
    <option value="pumped">Pumped</option>
    <option value="bummed">Bummed</option>
  </select>
  </div>`
}