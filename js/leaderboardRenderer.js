let leaderboardData = SortLocalStorage();
leaderboardData.forEach(element => {
    console.log(element);
    let divEntry = document.createElement('div');
    divEntry.className = "leaderboardEntry";
    divEntry.innerText = element;
    document.getElementById("leaderboard-container").append(divEntry);
});



function SortLocalStorage(){
    let time;
    let username;
    if(localStorage.length > 0){
       var localStorageArray = new Array();
       for (i=0;i<localStorage.length;i++){
            time = localStorage.getItem(localStorage.key(i));
            username = localStorage.key(i);
            if(time.length==7) time += "0";
           localStorageArray[i] = time + " | " + username;
       }
    }
    var sortedArray = localStorageArray.sort();
    return sortedArray;
 }



