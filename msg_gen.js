//sentence structure "Hello traveller, you just arrived BLANK (place), were you meet BLANK (creature). You take your BLANK (item) to BLANK (verb) them. BLANK (action result)!

//generate random number to be multiplied by num (length of array/object)
const randomNumber = (num) => {
    return Math.floor(Math.random() * num);
};

//create arrays/objects with filler words, more words can be added in sources const (put a comma and a space in front of each added word)
const sourcePlaces = "at the prancing pony inn, in a blighted village, at a toll bridge, at the entrence of a fortified village, in an abandonned cemetery, on top of the wizard's tower, at the source of the mighty river, at the edge of the known land, in a elegant castle's garden, in a hut in the middle of nowhere, in the ancient elvic forrest, in an abandonned dwarves' mine, at the top of a mostly inactive volcanoe, in the middle of a battelfied, in a cosy little farmhouse, in the sewer of the city, at the entrence of the isolated monastry, at the sacred shrine of the deer god";
const placesArray = sourcePlaces.split(", ");

const sourceCreatures = "a blind raven, an owlbear, a shapeshifting pony, a bunch of drunk gnomes, a horde of goblins, the god of moldy food, three sleeping trolls, a baby warg, a knight in a rusty looking armor, bandits carrying a sturdy chest, a druid and a badger talking to each other, a few city guards, a damsel in distress, an ancient black dragon sleeping peacefully, the daugther of the innkeeper, the witch who has been terrorising the locals, an harmless looking chest and definitely not a mimic, cows grazing peacefully, two giants arguing, the princess, a bard, a monk";
const creaturesArray = sourceCreatures.split(", ");

const sourceBadItems = "sword, hallebard, longbow, crossbow, dagger, two-handed axe, sling, longsword, whip, morningstar, scimitar, warhammer, cast iron pan, fists, old bone, bottle of ale, wooden staff, scroll of titan summoning, flask of holy water, wooden stake, drow poison";
const badItemsArray = sourceBadItems.split(", ");
const sourceGoodItems = "arcane grimoire, rose flower, scroll of protection, immovable rod, bagpipes, delicious looking red apple, lyre, gold coins, glassblower's tools, pet rabbit, perfume vial, horn of valhala";
const goodItemsArray = sourceGoodItems.split(", ");
const sourceSillyItems = "bag of beans, juggling balls, donkey, pet bat, stuffed rat, collection of fungi, wooden knife, preserved spider leg, deffective orb, scroll of wasp summoning, trumpet, broken knife, tea leaves";
const sillyItemsArray = sourceSillyItems.split(", ");
const itemsObject = {
    badItem: badItemsArray,
    goodItem: goodItemsArray,
    sillyItem: sillyItemsArray
};

const sourceBadVerbs = "kill, attack, hurt, inconvenience, throw at, impede, inconvenience, irritate, anihilate, scare, stop, intimidate, destroy";
const badVerbsArray = sourceBadVerbs.split(", ");
const sourceGoodVerbs = "impress, seduce, court, entertain, offer to, bribe, distract, barter with, praise, flirt with, rouse, motivate";
const goodVerbsArray = sourceGoodVerbs.split(", ");
const verbsObject = {
    badVerb: badVerbsArray,
    goodVerb: goodVerbsArray
}

//select words to use in final sentence (NB place and creature are function too so when generateSentence runs on each button click they change too) 
const selectPlace = () => {
    return placesArray[randomNumber(placesArray.length)];
};

const selectCreature = () => {
    return creaturesArray[randomNumber(creaturesArray.length)];
};

const selectItem = () => {
    let item = "";
    let itemType = "";
    let numero = randomNumber(3);
    if (numero === 0) {
        item = itemsObject.badItem[randomNumber(badItemsArray.length)];
        itemType = "bad";
    } else if (numero === 1) {
        item = itemsObject.goodItem[randomNumber(goodItemsArray.length)];
        itemType = "good";
    } else {
        item = itemsObject.sillyItem[randomNumber(sillyItemsArray.length)];
        itemType = "silly";
    }
    return [item, itemType]
};

const selectVerb = () => {
    let verb = "";
    let verbType = "";
    let numero = randomNumber(2);
    if (numero === 0) {
        verb = verbsObject.badVerb[randomNumber(badVerbsArray.length)];
        verbType = "bad";
    } else if (numero === 1) {
        verb = verbsObject.goodVerb[randomNumber(goodVerbsArray.length)];
        verbType = "good"
    }
    return [verb, verbType]
};


//function that builds the sentence
const generateSentence = () => {
    let endResult = "";
    let place = selectPlace();
    let creature = selectCreature();
    let choosenItem = selectItem();
    let choosenVerb = selectVerb();
    if (choosenVerb[1] === "good" && choosenItem[1] !== "silly") {
        endResult = "Thanks to your great charisma and your quick thinking, you earn their friendship";
    } else if (choosenVerb[1] === "bad" && choosenItem[1] === "bad") {
        endResult = "Thanks to your unmatched strenght and dexterity you emerged victorious"
    } else if (choosenVerb[1] === "bad" && choosenItem[1] === "good") {
        endResult = "That didn't go very well, good luck surviving this encounter"
    } else {
        endResult = "Hmm, that might not have been a great idea, it looks like you made a fool of yourself"
    };
    return `Hello traveller, you just arrived ${place}, were you meet ${creature}. You use your ${choosenItem[0]} to ${choosenVerb[0]} them. ${endResult}!`
};


//Run function and log it to the console to check it
//console.log(generateSentence());

//link the sentence to the html button
let phrase = document.getElementById('message');
let button = document.querySelector('button');

function buttonPush() {
    phrase.innerHTML = generateSentence();
};

button.onclick = buttonPush;
