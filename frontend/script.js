async function uploadResume() {

    const fileInput = document.getElementById("resumeFile");
    const file = fileInput.files[0];

    if (!file) {
        alert("Please select a resume");
        return;
    }

    const formData = new FormData();
	formData.append(
	"jobDescription",
	document.getElementById("jobDescription").value
	);
    formData.append("resume", file);

    try {

        const response = await fetch(
		"http://35.154.54.250:5000/upload"),            {
                method: "POST",
                body: formData
            }
        );

        const data = await response.json();
	console.log("Backend Response:", data);

	localStorage.setItem(
    		"result",
   		 JSON.stringify(data)
	);

	alert("Resume analyzed successfully!");

	window.location.href = "result.html";

    } catch(error) {

        console.log(error);
        alert("Upload failed");

    }
}