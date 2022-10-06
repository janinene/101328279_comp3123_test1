const fs = require("fs")

fileName ="./question-3/LogFiles"

createLogFile = () => {
    for (let i = 0; i < 10; i++ ){
        fs.appendFile(`${fileName}/log${i}.txt`, `Log file no. ${i}`,(err) =>{
            if (err) throw err;

            console.log(`log${i}.txt`)
        })
        
        
    }
}


deleteLogFile = () => {
    fs.readdir(fileName, (err, data) => {
        if (err)
            throw err;

        data.forEach((logText) => {   
            fs.unlink(`${fileName}/${logText}`, (err) =>{
                if (err) throw err;

                console.log(`delete files... ${logText}`)

            })           
        })
        
    })
}



// createLogFile()
// deleteLogFile()
