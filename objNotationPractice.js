const teams = {

  "1": 
  { 
    goalsScored: 251, 
    goalsAgainst: 244, 
    leadingScorer: "Elias Pettersson", 
    leadingScorerPoints: 70,
    playoffs: true,
    city: "Vancouver",
    team: "Canucks"
  },
  "2": 
  { 
    goalsScored: 264, 
    goalsAgainst: 234, 
    leadingScorer: "David Pastrnak", 
    leadingScorerPoints: 89,
    playoffs: true,
    city: "Boston",
    team: "Bruins"
  },
  "3": 
  { 
    goalsScored: 270, 
    goalsAgainst: 255, 
    leadingScorer: "Auston Matthews", 
    leadingScorerPoints: 75,
    playoffs: true,
    city: "Toronto",
    team: "Maple Leafs"
  },
  "4": 
  { 
    goalsScored: 246, 
    goalsAgainst: 258, 
    leadingScorer: "Artemi Panarin", 
    leadingScorerPoints: 95,
    playoffs: false,
    city: "New York",
    team: "Rangers"
  }

}



// Returns each teams top scorer and their points

const topScorers = function(teams) {
  const scorerObj = {};
  for (const team in teams) {
    scorerObj[teams[team].leadingScorer] = teams[team].leadingScorerPoints;
  }
  return scorerObj;
}

// console.log("Top scorer: ", topScorers(teams));



// Returns goal differential for each team

const goalDifferential = function(teams) {
  const result = {};
  for (const team in teams) {
    result[team] = (teams[team].goalsScored - teams[team].goalsAgainst);
  }
  return result;
};

// console.log("Goal differential: ", goalDifferential(teams));




// The Vancouver Canucks top scorer last season was Elias Pettersson with 70 points.

const sentence = function(teams) {
  const arr = Object.keys(teams);
  let result = [];
  for (const i of arr) {
    result.push(`The ${teams[i].city} ${teams[i].team} top scorer last season was ${teams[i].leadingScorer} with ${teams[i].leadingScorerPoints} points.`);
  }
  return result;
};

// console.log(sentence(teams));
