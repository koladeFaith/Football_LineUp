class footballLineUp {
    constructor(named, position, number) {
        this.named = named
        this.position = position
        this.number = number
    }
    add = () => {
        show.innerHTML += `
        <p>Name: ${this.named || "Name"}  <p/>
        <p>Position: ${this.position || "Position"} <p/>
        <h4>Jersey Number: ${this.number || "Jersey Number"}<h4/>

`
    }
}
const addPlayers = () => {
    let GK = new footballLineUp(names.value, lineUp.value, number.value)
    GK.add()
}