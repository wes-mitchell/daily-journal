export const entryEdit = (entryObj) => {
	return `
	<div class="newPost">
	<h3>Edit This Post</h3>
		<div>
			<input value="${postObj.title}"
				   name="postTitle"
				   class="newPost__input"
				   type="text"
				   placeholder="Title" />
		</div>
		<div>
			<input value="${postObj.imageURL}"
				   name="postURL"
				   class="newPost__input"
				   type="text"
				   placeholder="URL of gif" />
		</div>

    	<textarea name="postDescription"
    	class="newPost__input newPost__description"
    	placeholder="Story behind your gif...">${postObj.description}</textarea>
		
		<input type="hidden" value="${postObj.id}" name="postId">
		<input type="hidden" value="${postObj.timestamp}" name="postTime">	
		<button id="updatePost__${postObj.id}">Update</button>
		<button id="newPost__cancel">Cancel</button>
	</div>
	`
}

export const entryEdit = (entry) => {
  return `
      <section id="entry--${entry.id}" class="journalEntry">
        <h3>${entry.concept}</h3>
          <p class="date" type="hidden">${formatDate(entry.date)}</p>
          <p class="mood" type="hidden">${entry.mood}</p>
          <p>${entry.text}</p>
          <div class="entry-buttons">
          <div class="delete-button">
          <label for="submit"></label><br>
          <input type="submit" value="delete" class="deleteButton" id="deleteButton--${entry.id}"><br>
          </div>
          <div class="edit-button">
          <label for="submit"></label><br>
          <input type="submit" value="edit" class="editButton" id="editButton--${entry.id}">
          </div>
          </div>
      </section>
  `
}