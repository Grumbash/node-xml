const xml2js = require("xml2js");
const fs = require('fs');
const pathToFile = process.env.PATH_TO_FILE;

// XML string to be parsed to JSON
const xml = fs.readFileSync(pathToFile);

fs.readFile(pathToFile, (err, data)=>{
  if (err) {
    throw err;
  }

  // convert XML to JSON
  xml2js.parseStringPromise(xml, { mergeAttrs: true }).then((result) => {
    // convert it to a JSON string
    const json = JSON.stringify(result, null, 2);

    // save JSON in a file
    fs.writeFile("result.json", json, (err)=>{
      if(err){
        throw err;
      }
      console.log('done')
    });
  
  });
});


