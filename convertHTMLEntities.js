//todo https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/convert-html-entities

function convertHTML(str) {
    const HTML_STR = {
        "&": `&amp;`,
        "<": `&lt;`,
        ">": `&gt;`,
        "'": `&apos;`,
        '"': `&quot;`,
    }
    const masHtml = str.split('');
    return masHtml.map(x => HTML_STR[x] || x).join('');
}

console.log(convertHTML("Dolce & Gabbana"));

