let champData = {}

function championData(){
    fetch("http://ddragon.leagueoflegends.com/cdn/12.12.1/data/en_US/champion.json")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        for (const champName in data.data){
            console.log(data.data[champName].image.full)
        }
    })
}
document.addEventListener('DOMContentLoaded', () => {
    championData()
})
    
