const {readFileSync,writeFileSync, write}=require('fs')

const firstFile=readFileSync('./folder/subfolder/first','utf8')
const secondFile=readFileSync('./folder/subfolder/second','utf8')
const resultFile=readFileSync('./folder/subfolder/resultFile.txt','utf8')
console.log(resultFile);


//writeFileSync('./folder/subfolder/resultFile.txt',`The result file is: ${firstFile} , ${secondFile}`)

