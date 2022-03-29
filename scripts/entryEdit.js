export const entryEdit = (entryObj) => { 
  const formEl = document.querySelector(".form")
  formEl.innerHTML = `<h2>Update the post as you please</h2>
  <form action="">
    <fieldset class="journal-form">
      <label for="conceptsCovered" class="concepts">Concepts Covered</label><br>
      <input type="text" name="conceptsCovered" id="conceptsCovered" value="${entryObj.concept}"><br>
      <label for="journalEntry">Journal Entry</label><br>
      <textarea id="journalEntry" name="journalEntry" rows="5" cols="25" class="entry" value="${entryObj.text}">${entryObj.text}</textarea><br>
      <div class="updateScreenButtons">
      <label for="submit"></label><br>
      <input type="submit" value="Update that bad boy" class="button" id="updateButton--${entryObj.id}" style="width: 135px; margin-right: 5px;"><br>
      <label for="submit"></label><br>
      <input type="submit" value="cancel" class="button" id="cancelButton--${entryObj.id}" style="width: 55px;">
      </div>
      </form>
    </fieldset>
  </form>
  <input type="hidden" value=${entryObj.id} name="entryId">
  <input type="hidden" value=${entryObj.date} name="entrydate">
  <input type="hidden" value=${entryObj.mood} name="entrymood">
  `
}