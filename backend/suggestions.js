function getSuggestions(text, foundSkills) {

text = text.toLowerCase();

const suggestions = [];

if (!text.includes("summary")) {
    suggestions.push("Add a professional resume summary");
}

if (!text.includes("project")) {
    suggestions.push("Add projects or practical work experience");
}

if (!text.includes("certification")) {
    suggestions.push("Add relevant certifications");
}

if (!text.includes("achievement")) {
    suggestions.push("Include achievements and accomplishments");
}

if (!text.includes("linkedin")) {
    suggestions.push("Add your LinkedIn profile");
}

if (foundSkills.length < 5) {
    suggestions.push("Add more domain-relevant skills");
}

if (!text.includes("experience") && !text.includes("internship")) {
    suggestions.push("Add internship or work experience");
}

return suggestions.slice(0, 5);
}

module.exports = getSuggestions;
