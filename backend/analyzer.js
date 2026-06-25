const skills = require("./skills.json");
const jobs = require("./jobs.json");
const getSuggestions = require("./suggestions");
const analyzeStrengthWeakness = require("./strengthWeakness");


function analyzeResume(text, jobDescription) {

    text = text.toLowerCase();

    jobDescription =
        (jobDescription || "").toLowerCase();

    let scores = {};
    let foundSkills = [];
    let matchedSkills = [];
    let missingSkills = [];

    // Calculate scores
    for (let domain in skills) {

    scores[domain] = 0;

    skills[domain].forEach(skill => {

        if (text.includes(skill.toLowerCase())) {

            console.log("FOUND SKILL:", skill);

            scores[domain]++;
            foundSkills.push(skill);

            console.log(domain + " -> " + skill);

        }

    });

}

    // Find best domain
	let bestDomain = "";
	let highestScore = 0;

	for (let domain in scores) {

    	if (scores[domain] > highestScore) {

        	highestScore = scores[domain];
        	bestDomain = domain;

    	}

	}

	if (bestDomain === "") {
    		bestDomain = "No Domain Found";
	}

	foundSkills.forEach(skill => {

    if (
        jobDescription.includes(skill.toLowerCase())
    ) {

        matchedSkills.push(skill);

    }

});

    // If no domain matched
    if (bestDomain === "") {
        bestDomain = "No Domain Found";
    }

    // Match Percentage
	let atsScore = highestScore * 10;

	if(atsScore > 100){
    	atsScore = 100;
	}	
    // Suggestions
    const suggestions =
        getSuggestions(text, foundSkills);

    // Strength & Weakness
    const analysis =
    	analyzeStrengthWeakness(text, foundSkills);

	let matchScore = 0;

	const totalSkills =
	matchedSkills.length +
	missingSkills.length;

	if(totalSkills > 0){

    	matchScore = Math.round(
        	(matchedSkills.length /
        	totalSkills) * 100
    	);

	}

	console.log("FINAL RESULT");
	console.log({
   	 	bestDomain,
    		atsScore,
    		foundSkills,
   	 	matchScore
	});

   
    // Final Result
return {

    scores,

    bestDomain,

    atsScore,

    matchScore,

    matchedSkills,

    missingSkills,

    jobs: jobs[bestDomain] || [],

    foundSkills,

    suggestions,

    strengths: analysis.strengths,

    weaknesses: analysis.weaknesses

};
}

module.exports = analyzeResume;