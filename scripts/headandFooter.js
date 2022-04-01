export const showFooter = () => { 
  const footerEl = document.querySelector("footer")
  footerEl.innerHTML = `<a href="https://github.com/wes-mitchell" style="text-decoration: none" class="copyright">&copy; Wesley Mitchell</a>
  <button type="submit" id="logout">Logout</button>
  <button type="submit" id="userposts">See Mine</button>`
 }

 export  const showHeader = () => { 
   const headerEl = document.querySelector('header')
   headerEl.innerHTML = `<div>
                          <h1>My Daily Journal</h1>
                          <div class="coffee-image">
                            <img src="/images/coffee.png" alt="paper coffee cup" class="coffeeCup">
                          </div>
                        </div>`
 }