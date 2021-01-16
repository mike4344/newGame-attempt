let game = undefined;
function updateUI(){
    if(game === undefined){
        game = new Game()
        game.start()
    }

}
window.addEventListener("DOMContentLoaded", event=>{
    window.addEventListener('keydown', event =>{
        console.log(event.target)

    })
})
