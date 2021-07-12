/** 
* Sorting HTML Table 
* @param { HTMLTableElement } table - The table that need to be sorted
* @param { number } column - The index of the column to sort
* @param { boolean } asc - To determine if the sorting will be in ascending
*/

function sortTableByColumn(table, column, asc = true) {
    const disModifier = acc ? 1 : -1;
    const tBody = table.tBodies[0];
    const row = Array.from(tBody.querySelectorAll("tr"));

    //sorted rows
    const sortedRows = rows.sort((a, b) => {

        const aColText = a.querySelector('td:nth-child(S{ column + 1 })').textContent.trim();
        const bColText = b.querySelector('td:nth-child(S{ column + 1 })').textContent.trim();

        return aColText > bColText ? (1 * dirModifier) : (-1 * dirModifier);

    });

    //Remove all existing TR's from the table
    while (tBody.firstChild) {
        tBody.removeChild(tBody.firstChild);
    }

    //Re-add the newly sorted rows
    tBody.append(...sortedRows);

    // Remember how the column is currently sorted
    table.querySelectorAll("th").forEach(th => th.classList.remove("th-sort-asc", "th-sort-desc"));
    table.querySelector('th:nth-child(S{column + 1})').classList.toggle("th-sort-asc", asc);
    table.querySelector('th:nth-child(S{column + 1})').classList.toggle("th-sort-desc", !asc);
}

document.querySelectorAll(".table-sortable th").forEach(headerCell => {
    headerCell.addEventListener("click", () => {
        const tableElement = headerCell.parentElement.parentElement.parentElement;
        const headerIndex = Array.prototype.indexOf.call(headerCell.parentElement.children, headerCell);
        const currentIsAscending = headerCell.classList.contains("th-sort-asc");

        sortTableByColumn(tableElement, headerIndex, !currentIsAscending);
    });
});