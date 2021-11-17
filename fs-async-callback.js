const {readFile,writeFile, read} = require('fs')
console.log('Starting the app');
readFile('./folder/subfolder/first','utf-8',(err,result)=>{
    if(err)
    {
        console.log(err);
        return;
    }
    const firstFile=result;
    readFile('./folder/subfolder/second','utf-8',(err,result)=>{
        if(err)
    {
        console.log(err);
        return;
    }
    const secondFile=result;
    writeFile('./folder/subfolder/result-async.txt',`The result of the async : ${firstFile} , ${secondFile}`,(err,result)=>{
        if(err)
        {
            console.log(err);
            return;
        }
        console.log(result);
    })
    })

})

console.log('Done with the task');
console.log('Starting the next task now!');