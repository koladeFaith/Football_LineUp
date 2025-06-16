class footballLineUp {
    constructor(named, position, number) {
        this.named = named
        this.position = position
    }
    add = () => {
        show.innerHTML += `
        <div class='player ${this.position}'>
     <div class="flex-container">
    <p class='position' style='color: black; font-size: 18px'> ${this.position || "Position"}
        <p/>
     <img class='img2'
     src="./images/person-3.png"
     alt="Player" />
          </div>
        <p class='name'> ${this.named || "Name"}  <p/>
</div>
`
    }
}
const addPlayers = () => {
    if (playerName.value === '') {
        alert('Player Name must not be empty')
    }
    else {
        let GK = new footballLineUp(playerName.value, position.value)
        GK.add()
        playerName.value = ''
    }

}