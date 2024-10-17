function clickHandler() {
  // when the button in our html is clicked:
  // get the grades entered into the input
    const input = document.getElementById("grades");  
  // clean up the data

  // calculate the gpa from the grades entered

  // display the gpa
}

function buildArray(input) {
    const gradelist = input.split(",")
    const cleanlist = gradelist.map(cleanData)
    return gradelist;
}


function cleanData(item) {
    return item.toUpperCase().trim()
}

function gradeTemplate(grade) {
    const output = document.querySelector("#output")
    output.inner
}