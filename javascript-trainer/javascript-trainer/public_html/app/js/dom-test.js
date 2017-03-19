/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
window.onload = function () {
    var heading = document.createElement("h1");
    var heading_text = document.createTextNode("Big head!");
    heading.appendChild(heading_text);
    document.body.appendChild(heading);

    var table = document.getElementById("table");
    var tableAttrs = table.attributes; // Node/Element interface
    for (var i = 0; i < tableAttrs.length; i++) {
        // HTMLTableElement interface: border attribute
        if (tableAttrs[i].nodeName.toLowerCase() == "border")
            table.border = "1";
    }
// HTMLTableElement interface: summary attribute
    table.summary = "note: increased border";
};

