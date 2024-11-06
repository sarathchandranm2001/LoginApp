const path = require("path");
const fs = require("fs");

// Define the directory and file paths
const dirPath = path.join(__dirname, "filehandle");
const filePath = path.join(dirPath, "1.txt");
const newFilePath = path.join(dirPath, "renamed.txt");


fs.mkdir(dirPath, { recursive: true }, (err) => {
    if (err) throw err;
    console.log("Directory created successfully!");
});

// Step 2: Write to the file
fs.writeFile(filePath, "Text: Hi Hello How Are U", (err) => {
    if (err) throw err;
    console.log("File written successfully!");
});

// Step 3: Rename the file
fs.rename(filePath, newFilePath, (err) => {
    if (err) throw err;
    console.log("File renamed successfully!");
});

// Step 4: Delete the file
//fs.unlink(newFilePath, (err) => {
   // if (err) throw err;
    //console.log("File deleted successfully!");
//});
