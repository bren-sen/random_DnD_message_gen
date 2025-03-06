
//sentence structure "Hello traveller, you just arrived at BLANK (location), were you meet BLANK (creature). You use your BLANK (object) to BLANK (verb) them. Result

//generate random number to be multiplied by num (to be set to lenght of array/object)
const randomNumber = (num) => {
    return Math.floor(Math.random() * num);
};

const sourceLocations = " list of locations separated by comma then one space here";
const locationsArray = sourceLocations.split(", ");

const sourceCreatures = "list of creatures here";
const creaturesArray = sourceCreatures.split(", ");

const sourceBadObjects = "weapons etc";
const badObjectsArray = sourceBadObjects.split(", ");
const sourceGoodObjects = "gifts etc";
const goodObjectsArray = sourceGoodObjects.split(", ");
const sourceSillyObjects = "make it silly";
const sillyObjectsArray = sourceSillyObjects.split(", ");
const objectsObject = {
    badObject: badObjectsArray,
    goodObject: goodObjectsArray,
    sillyObject: sillyObjectsArray
};

const sourceBadVerbs = " insert here, to kill, to attack";
const badVerbsArray = sourceBadVerbs.split(", ");
const sourceGoodVerbs = " insert here, to impress, to seduce";
const goodVerbsArray = sourceGoodVerbs.split(", ");
const verbsObject = {
    badVerb: badVerbsArray,
    goodVerb: goodVerbsArray
}

console.log(verbsObject);



