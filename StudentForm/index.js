document.getElementById('student-details-form').addEventListener('submit', function(event) {

    event.preventDefault();

    const formData = new FormData(this);

    const formObject = {};
    formData.forEach(function(value, key){
        formObject[key] = value;
    });

    console.log(formObject);

    var labelNames = document.getElementsByTagName('label');
    labelNames = Array.from(labelNames);

    var mainFieldSet = document.getElementById('main-fieldset');
    mainFieldSet.innerHTML = ""; 
    
    console.log(labelNames);

    console.log(typeof(labelNames));

    var output  = "<table>";

    labelNames.map((label) => {
        output += `
        <tr>
            <td><strong>${label.innerText}:</strong></td>
            <td>${formObject[label.htmlFor]}</td>
        </tr>
        `
    })

    output +=   "  </table> ";
        
    mainFieldSet.innerHTML = output;
   

})