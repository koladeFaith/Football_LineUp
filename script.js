class footballLineUp {
    constructor(named, position, number) {
        this.named = named
        this.position = position
        this.number = number
    }
    add = () => {
        show.innerHTML += `
        <div class='player ${this.position}'>
     <div class="flex-container">
    <p> ${this.position || "Position"}
        <p/>
        <img
           src="./images/person-2.png" style='width: 40px; border-radius: 20px'
           alt="Player" />
          </div>
        <p style='color: red'> ${this.named || "Name"}  <p/>
</div>
`
    }
}
const addPlayers = () => {
    if (playerName.value === '' || jerseyNumber.value === '') {
        alert('Player Name and Jersey Number must not be empty')
    }
    else {
        let GK = new footballLineUp(playerName.value, position.value, jerseyNumber.value)
        GK.add()
        playerName.value = ''
        jerseyNumber.value = ''
    }

}