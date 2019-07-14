const table = 
    '<table class="fileproperties">\
        <tr>\
            <th>Name</th>\
            <th>Size</th>\
            <th>Address</th>\
        </tr>';

/**
 * request files due to the type
 * @param filestype type of the files.
 * @param fileholderid the place of showing files at innerHTML.
 * @param loadinggifid until waiting for response from server, this (gif) image will be displayed.
 */
function getListOfFiles(filestype, fileholderid, loadinggifid)
{
    const fileholder = document.getElementById(fileholderid);
    const loadinggif = document.getElementById(loadinggifid);
    let requestedfileslist = "";

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function()
    {
        if(this.readyState < 4)
        {
            fileholder.innerHTML = "";
            loadinggif.style.display = "block";
        }
        
        if(this.readyState == 4 && this.status == 200)
        {
            loadinggif.style.display = "none";

            if(filestype == "image") { fileholder.innerHTML = this.responseText; }
            else { fileholder.innerHTML = table + this.responseText + "</table>"; }
        }
    };
    
    switch(filestype)
    {
        case "image":
            requestedfileslist = "image-list";
            break;
        default:
            requestedfileslist = "files-list";
            break;
    }

    if(requestedfileslist != "")
    {
        xhr.open("POST", "/" + requestedfileslist + "?folder=" + filestype, true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send();
    }
}

/**
 * opening the clicked tab and highlight it and it will open the upload panel of each file type
 */
function openTab(evt, tabid)
{
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");

    for (i = 0; i < tabcontent.length; i++)
    {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");

    for (i = 0; i < tablinks.length; i++)
    {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabid).style.display = "block";
    evt.currentTarget.className += " active";
}

/**
 * replace a className by another className for changing the style of desired elements
 */
function replaceClassName(originalClassName, desiredClassName)
{
    let elements = document.getElementsByClassName(originalClassName);

    while(elements.length > 0)
    {
        elements[0].className = desiredClassName;
    }
}