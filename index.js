let champData = {}

function championData(){
    fetch("http://ddragon.leagueoflegends.com/cdn/12.12.1/data/en_US/champion.json")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        for (const champName in data.data){
            const championData = data.data[champName]
            const element = createChampionCard(championData)
        }
    })
}
document.addEventListener('DOMContentLoaded', () => {
    championData()
})
    
function createChampionCard(championData) {
    const img = document.createElement("img");
    img.src = `http://ddragon.leagueoflegends.com/cdn/12.12.1/img/champion/${championData.image.full}`
    document.getElementById("champs").appendChild(img)
    // return the champion card element
}