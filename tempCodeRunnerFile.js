function pairElement(str) {
const DNA = {
    'A': 'T',
    'T': 'A',
    'C': 'G',
    'G': 'C',
}
const DNA_MAS = [];
for (let i=0; i<str.length; i++){
DNA_MAS.push([str[i], DNA[str[i]]]);
}
    return DNA_MAS;
}

console.log(pairElement("TTGAG"));