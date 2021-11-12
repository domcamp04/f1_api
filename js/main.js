const getInfo = async function(raceSeason, raceRound){
    let response = await fetch(`https://ergast.com/api/f1/${raceSeason}/${raceRound}.json`)
    let data = response.json()
    return data
}


const archiveForm = document.getElementById('archiveForm');

archiveForm.addEventListener('submit', async (e) =>{
    e.preventDefault();
   
    let raceSeason = e.target.raceSeason.value;
    let raceRound = e.target.raceRound.value;
    let raceSeasonRound = await getInfo(raceSeason, raceRound);


    let season = document.createElement('h3');
    season.innerHTML = `Season: ${raceSeasonRound.MRData.RaceTable.season}`
    let round1 = document.createElement('h3');
    round1.innerHTML = `Round: ${raceSeasonRound.MRData.RaceTable.round}`
    let name = document.createElement('h3');
    name.innerHTML = `Race Name: ${raceSeasonRound.MRData.RaceTable.Races[0].raceName}`
    let circuit = document.createElement('h3');
    circuit.innerHTML = `Circuit Name: ${raceSeasonRound.MRData.RaceTable.Races[0].Circuit.circuitName}`
    let local = document.createElement('h3');
    local.innerHTML = `City: ${raceSeasonRound.MRData.RaceTable.Races[0].Circuit.Location.locality}`
    let countryName = document.createElement('h3');
    countryName.innerHTML = `Country: ${raceSeasonRound.MRData.RaceTable.Races[0].Circuit.Location.country}`
    let raceDate = document.createElement('h3');
    raceDate.innerHTML = `Date: ${raceSeasonRound.MRData.RaceTable.Races[0].date}`
    
    
    document.body.append(season);
    document.body.append(round1);
    document.body.append(name);
    document.body.append(circuit);
    document.body.append(local);
    document.body.append(countryName);
    document.body.append(raceDate);
})