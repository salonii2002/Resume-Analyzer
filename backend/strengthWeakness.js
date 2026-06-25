function analyzeStrengthWeakness(text, foundSkills) {

    text = text.toLowerCase();

    let strengths = [];
    let weaknesses = [];

    if(foundSkills.length >= 5){
        strengths.push("Strong Skill Set");
    } else {
        weaknesses.push("Add More Relevant Skills");
    }

    if(text.includes("experience")){
        strengths.push("Has Work Experience");
    } else {
        weaknesses.push("No Experience Mentioned");
    }

    if(text.includes("certification")){
        strengths.push("Has Certifications");
    } else {
        weaknesses.push("No Certifications Added");
    }

    if(text.includes("project")){
        strengths.push("Has Projects");
    } else {
        weaknesses.push("No Projects Mentioned");
    }

    if(text.includes("linkedin")){
        strengths.push("LinkedIn Profile Added");
    } else {
        weaknesses.push("LinkedIn Profile Missing");
    }

    return {
        strengths,
        weaknesses
    };
}

module.exports = analyzeStrengthWeakness;