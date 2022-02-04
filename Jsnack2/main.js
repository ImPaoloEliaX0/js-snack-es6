
const squadre =[

    {
        nome : 'Napoli',
     
        puntiFatti : 0,
        
        falliSubiti : 0,
    },

    {
        nome : 'Inter',
     
        puntiFatti : 0,
        
        falliSubiti : 0,
    },

    {
        nome : 'Juve',
     
        puntiFatti : 0,
        
        falliSubiti : 0,
    },


];

function randomNumber(min, max){

    return Math.floor(Math.random() * (max - min + 1) + min);

}


function teamFoul(myTeamArray){

    const recap =[];
    
    for(let i =0; i < myTeamArray.length; i++){
    
        myTeamArray[i].puntiFatti = randomNumber(1, 100);
    
        myTeamArray[i].falliSubiti = randomNumber(1, 50);
    
        const {nome, falliSubiti} = myTeamArray[i];

        console.log(nome, falliSubiti);
    
        recap.push({nome, falliSubiti});
    
    }

    return recap;
}

const riassunto = teamFoul(squadre);

console.log(riassunto);
