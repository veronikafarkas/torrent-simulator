let dArr = [];
let pArr = [];
let nArr = [];
let downloaded = [];

function download()
{
    let speed = document.getElementById("downloadSpeed");
    
    //a második oszlop adatai
    let table, tr, td, i;
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) 
    {
        td = tr[i].getElementsByTagName("td")[1];
        if (td) 
        {
            dArr[i] = parseInt(td.innerHTML);
        }       
    }

    let dlNums = dArr.filter(function (el) {
        return el != null;
      });
    

    //3. oszlop adatai
    for (i = 0; i < tr.length; i++) 
    {
        td = tr[i].getElementsByTagName("td")[2];
        if (td) 
        {
            pArr[i] = parseInt(td.innerHTML);
        }       
    }

    let pNums = pArr.filter(function (el) {
        return el != null;
      });

    //1. oszlop adatai
    for (i = 0; i < tr.length; i++) 
    {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) 
        {
            nArr[i] = td.innerHTML;
        }       
    }

    let names = nArr.filter(function (el) {
        return el != null;
      });
    
    for (i = 0; i < tr.length; i++) 
    {
        td = tr[i].getElementsByTagName("td")[2];
        if (td) 
        {
            console.log("Torrent neve: ", names[i-1]);
            console.log("Torrent mérete: ", dlNums[i-1], "NkB");
            downloaded[i] = pNums[i-1]+(speed.value / dlNums[i-1])*100;
            if(downloaded[i]>100)
            {
                downloaded[i]=100;
            }
            td.innerHTML = downloaded[i] + "%";
            console.log("Eddig letöltve: ", (dlNums[i-1]/100)*downloaded[i], "NkB");
            console.log("***");
        }       
    }
}
