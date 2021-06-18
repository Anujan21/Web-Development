//Code structure taken from https://www.w3schools.com/howto/howto_js_sort_table.asp
//accessed May 5, 2020
//this code was used and enhanced to sort a table either by ascending or descending order

function sortTable(n){
    var table, rows, switching, i,x,y, shouldSwitch, direction, switchcount = 0;
    table = document.getElementById("data");
    switching = true;
    direction = "asc"; //Set the sorting direction to ascending:
    while (switching) { //will loop until no more sorting is done
        switching = false; //start with this so program can terminate 
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) { //loop through each row
            shouldSwitch = false; // no switching to start with
            x = rows[i].getElementsByTagName("TD")[n]; //row 1 to compare
            y = rows[i + 1].getElementsByTagName("TD")[n]; //row 2 to compare
            if (direction == "asc") { //if ascending, check to see if switch is needed on case by case for each column
                if(n==1){
                    if(parseInt(x.dataset.diameter) > parseInt(y.dataset.diameter)) { //numeric values for proper comparison
                        //if so, mark as a switch and break the loop:
                        shouldSwitch= true;
                        break;
                    }
                }
                else if(n==2){
                    if(parseInt(x.dataset.mass) > parseInt(y.dataset.mass)) { //numeric values for proper comparison
                        //if so, mark as a switch and break the loop:
                        shouldSwitch= true;
                        break;
                    }
                }
                else if(n==5){
                    if(parseInt(x.dataset.orbit) > parseInt(y.dataset.orbit)) { //numeric values for proper comparison
                        //if so, mark as a switch and break the loop:
                        shouldSwitch= true;
                        break;
                    }
                }
                else if(n==3 || n==4){
                    if(parseInt(x.innerHTML) > parseInt(y.innerHTML)) { //numeric values for proper comparison
                        //if so, mark as a switch and break the loop:
                        shouldSwitch= true;
                        break;
                    }
                }
                else{
                    if(x.innerHTML > y.innerHTML) {
                    //if so, mark as a switch and break the loop:
                    shouldSwitch= true;
                    break;
                    }
                }
            } else if (direction == "desc") { //if descending order is activated 
                if(n==1){
                    if(parseInt(x.dataset.diameter) < parseInt(y.dataset.diameter)) { //numeric values for proper comparison
                        //if so, mark as a switch and break the loop:
                        shouldSwitch= true;
                        break;
                    }
                }
                else if(n==2){
                    if(parseInt(x.dataset.mass) < parseInt(y.dataset.mass)) { //numeric values for proper comparison
                        //if so, mark as a switch and break the loop:
                        shouldSwitch= true;
                        break;
                    }
                }
                else if(n==5){
                    if(parseInt(x.dataset.orbit) < parseInt(y.dataset.orbit)) { //numeric values for proper comparison
                        //if so, mark as a switch and break the loop:
                        shouldSwitch= true;
                        break;
                    }
                }
                else if(n==3 || n==4){
                    if(parseInt(x.innerHTML) < parseInt(y.innerHTML)) { //numeric values for proper comparison
                        //if so, mark as a switch and break the loop:
                        shouldSwitch= true;
                        break;
                    }
                }
                else{
                    if(x.innerHTML < y.innerHTML) {
                    //if so, mark as a switch and break the loop:
                    shouldSwitch= true;
                    break;
                    }
                }
            }
        }

        if (shouldSwitch) { //only applies if variable set to true anywhere above
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true; 
            switchcount ++;   
        } else { //if no switching is neccesary, it means program is done, and swap to descending 
            if (switchcount == 0 && direction == "asc") {
                direction = "desc";
                switching = true;
            }
        }
    }
}