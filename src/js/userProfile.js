const profile = document.querySelector("#profile")
const username = profile.querySelector("#username")
const points = profile.querySelector("#points")
const avatar = profile.querySelector("img")
const deleteButton = profile.querySelector("#deleteUser")


const renderUserProfile = (userObj) => {
    username.textContent = `Username: ${userObj.username}`
    points.textContent = `Points: ${userObj.totalPoints}`
    avatar.src = userObj.avatar
    redeemBtn.addEventListener("click", function(){
      setDisplay([gameTitle, timer, startButton, aboutDisplay, gameDisplay], "none")
      prizeList.innerHTML = " "
      setDisplay([prizeHeader, prizeP, prizeList], "block")
      setDisplay([prizeDisplay], "flex")
      displayAllPrizes()
    })
    deleteButton.addEventListener("click", deleteUser)
    userPrizeList.innerHTML= ""
    if (currentUser.prizes === undefined || currentUser.prizes.length === 0){
      return
    } else {
      setDisplay([prizeCollection], "block")
      currentUser.prizes.forEach(renderBought)
    }
}

function deleteUser(){
  
fetch(`${URL}/users/${currentUser.id}`, {
  method: 'DELETE' 
})
.then(response => response.json())
.then(deletedUser => {
  currentUser = null
  ///GO TO HOME SCREEN
  console.log('Deleted User:', deletedUser)
})
.catch((error) => {
  console.error('Error:', error);
});
}

const renderBought = (prize) => {
       
  const li = document.createElement("li")
  li.classList.add("prize-card")
  li.innerHTML = `
      <div class="image">
      <img src="${prize.imageUrl}" alt="${prize.name}">
      </div>
      <div class="content">
      <h4>${prize.name}</h4>
      <div class="cost">
          <span class="cost-count">${prize.cost}</span> Points
      </div>
      <p class="description">${prize.description}</p>
      </div>
  `

    userPrizeList.append(li)
  }
  