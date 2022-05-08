import xlsx from 'node-xlsx';
import fs from 'fs'

// IMPORT LIST
let list = []
xlsx.parse(`./src/import.xlsx`)[0].data.forEach(item => {
    list.push(item[0])
})

let newList = [
    ['Graphème', 'Mot']
]

list.forEach(item => {
    let i = 0;
    let counter = 0;
    while (i < item.length) {
        item == "accent" ? console.log(counter, item[i]) : null;
        switch (item[i]) {
            case 'a':
                // an, am, ai, au
                if (
                    item[i] + item[i + 1] == 'an' ||
                    item[i] + item[i + 1] == 'am' ||
                    item[i] + item[i + 1] == 'ai' ||
                    item[i] + item[i + 1] == 'au' ||
                    item[i] + item[i + 1] == 'aî'
                ) {
                    i += 2
                } else {
                    i++
                }
                break;
            case 'b':
                // bb
                if (
                    item[i] + item[i + 1] == 'bb'
                ) {
                    i += 2
                } else {
                    i++
                }
                break;
            case 'c':
                // ch
                if (
                    item[i] + item[i + 1] == 'ch'
                    
                ) {
                    i += 2
                } else if(item[i] + item[i + 1] == 'cc') {
                    if(item[i + 2] == 'e' || item[i + 2] == 'é') {
                        counter++
                    }
                    i+=2
                } else {
                    i++
                }
                break;
            case 'd':
                // dd
                if (
                    item[i] + item[i + 1] == 'dd'
                ) {
                    i += 2
                } else {
                    item.length - 1 == i ? counter-- : null;
                    i++
                }
                break;
            case 'e':
                // er, ez, en, em, ei, eu, ein, eim, eau
                if (
                    item[i] + item[i + 1] + item[i + 2] == 'ein' ||
                    item[i] + item[i + 1] + item[i + 2] == 'eim' ||
                    item[i] + item[i + 1] + item[i + 2] == 'eau'
                ) {
                    i += 3
                } else if (
                    item[i] + item[i + 1] == 'er' ||
                    item[i] + item[i + 1] == 'ez' ||
                    item[i] + item[i + 1] == 'en' ||
                    item[i] + item[i + 1] == 'em' ||
                    item[i] + item[i + 1] == 'ei' ||
                    item[i] + item[i + 1] == 'eu'
                ) {
                    i += 2
                } else {
                    if(
                        item.length - 1 == i &&
                        item.length > 2
                    ) {
                        counter--
                    }
                    i++
                }
                break;
            case 'f':
                // f, ff
                if (
                    item[i] + item[i + 1] == 'ff'
                ) {
                    i += 2
                } else {
                    i++
                }
                break;
            case 'g':
                // g, gu, gn
                if (
                    item[i] + item[i + 1] == 'gu' ||
                    item[i] + item[i + 1] == 'gn'
                ) {
                    i += 2
                } else {
                    i++
                }
                break;
            case 'h':
                // passer a la lettre suivante sans compter
                i++
                counter--
                break;
            case 'i':
                // in, im
                if (
                    item[i] + item[i + 1] == 'in' ||
                    item[i] + item[i + 1] == 'im'
                ) {
                    i += 2
                } else {
                    i++
                }
                break;
            case 'j':
                // Pas de variante
                i++
                break;
            case 'k':
                // Pas de variante
                i++
                break;
            case 'l':
                // ll
                if (
                    item[i] + item[i + 1] == 'll'
                ) {
                    i += 2
                } else {
                    i++
                }
                break;
            case 'm':
                // mm
                if (
                    item[i] + item[i + 1] == 'mm'
                ) {
                    i += 2
                } else {
                    i++
                }
                break;
            case 'n':
                // nn
                if (
                    item[i] + item[i + 1] == 'nn'
                ) {
                    i += 2
                } else {
                    i++
                }
                break;
            case 'o':
                // oeu, on, om, ou
                if (
                    item[i] + item[i + 1] + item[i + 2] == 'oeu'
                ) {
                    i += 3
                } else if (
                    item[i] + item[i + 1] == 'on' ||
                    item[i] + item[i + 1] == 'om' ||
                    item[i] + item[i + 1] == 'ou'
                ) {
                    i += 2
                } else {
                    i++
                }
                break;
            case 'p':
                // p, pp, ph
                if (
                    item[i] + item[i + 1] == 'pp' ||
                    item[i] + item[i + 1] == 'ph'
                ) {
                    i += 2
                } else {
                    i++
                }
                break;
            case 'q':
                // qu uniquement
                i += 2
                break;
            case 'r':
                // rr
                if (
                    item[i] + item[i + 1] == 'rr'
                ) {
                    i += 2
                } else {
                    i++
                }
                break;
            case 's':
                // ss
                if (
                    item[i] + item[i + 1] == 'ss'
                ) {
                    i += 2
                } else {
                    item.length - 1 == i ? counter-- : null;
                    i++
                }
                break;
            case 't':
                // tt
                if (
                    item[i] + item[i + 1] == 'tt'
                ) {
                    i += 2
                } else {
                    item.length - 1 == i ? counter-- : null;
                    i++
                }
                break;
            case 'u':
                // ui
                if (
                    item[i] + item[i + 1] == 'ui'
                ) {
                    i += 2
                } else {
                    i++
                }
                break;
            case 'v':
                // Pas de variante
                i++
                break;
            case 'w':
                // Pas de variante
                i++
                break;
            case 'x':
                // Pas de variante
                i++
                break;
            case 'y':
                // Pas de variante
                i++
                break;
            case 'z':
                // Pas de variante
                i++
                break;
            default:
                i++;
                // counter--;
                break;
        }
        counter++
    }

    newList.push([counter, item])
})


console.log(newList)
// EXPORT LIST
const buffer = xlsx.build([{
    name: 'export',
    data: newList
}]);

fs.writeFile('./src/export.xlsx', buffer, err => {
    console.log(err)
})