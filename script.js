//your code here
// Function to replace the text inside the p element with Accio ipsum text
function replaceParagraphText() {
    const paragraph = document.getElementById('accio-paragraph');
    if (paragraph) {
        paragraph.textContent = 'Accio ipsum dolor sit amet, join course, solve assignments, get placed above 5 lpa and live life king size.';
    }
}

// Call the function to replace the text
replaceParagraphText();