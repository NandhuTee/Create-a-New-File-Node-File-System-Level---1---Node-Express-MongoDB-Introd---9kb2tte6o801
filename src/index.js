const fs = require("fs/promises");
const writeFile =async (fileName, fileContent) =>{
  try{
  await fs.writeFile(fileName, fileContent);
}catch(error){
  console.error('Error creating or writing file:${error.message}');
  throw error;
}
};

module.exports = { writeFile };
