let todayDate = new Date();
let info = document.getElementById('buttonData');

function getData() {
    const ajaxRequest = new XMLHttpRequest();
    ajaxRequest.open('GET', 'books.json', true);
    ajaxRequest.onreadystatechange = function() { 

        if (ajaxRequest.readyState != 4) return;	

        if (ajaxRequest.status != 200) {        
            alert('Error ' + ajaxRequest.status + ': ' + ajaxRequest.statusText);
        } else { 
            info.innerHTML = 'Your vote is accepted : ' + todayDate; 
        }
    }
    ajaxRequest.send();
}
