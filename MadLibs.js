const adjectives = ['other', 'high', ' old','great','big','American','small',
'large','national','young','different','black','long','little','important','political',
'bad','white','real','best','right','social','only','public','sure','low','early',
'able','human','local','late','hard','major','better','economic','strong','possible',
'whole','free','military','true','federal','international','full','special','easy',
'clear','recent','certain','personal','open','red','difficult','available','likely',
'short','single','medical','current','wrong','private','past','foreign','fine',
'common','poor','natural','significant','similar','hot','dead', 'central','happy',
'serious','ready','simple','left','physical','general','environmental','financial','blue',
'democratic','dark','various','entire','close','legal','religious','cold','final',
'main','green','nice','huge','popular','traditional','cultural'];

const animal = ['Hummingbird',
'Owl','Toucan','Blue Jay','Dove','Sparrow','Vulture','Duck','Shoveler','Eagle','Seagull','Parrot',
'Scarlet Iiwi','Shoebill Stork','Dog','Cow','Cat',	
'Horse','Donkey','Tiger','Lion','Panther','Leopard','Cheetah','Bear','Elephant',
'Polar','bear','Turtle','Tortoise','Crocodile','Rabbit','Porcupine','Hare','Hen',
'Pigeon','Albatross','Crow','Fish','Dolphin','Frog','Whale','Alligator','Eagle',
'Flying squirrel','Ostrich','Fox','Goat','Jackal','Emu','Armadillo','Eel','Goose',
'Arctic','fox','Wolf','Beagle','Gorilla','Chimpanzee','Monkey','Beaver','Orangutan',
'Antelope','Bat','Badger','Giraffe','Hermit Crab','Giant','Panda','Hamster','Cobra',
'Hammerhead shark','Camel','Hawk','Deer','Chameleon','Hippopotamus','Jaguar','Chihuahua',
'King Cobra','Ibex','Lizard','Koala','Kangaroo','Iguana','Llama','Chinchillas','Dodo',
'Jellyfish','Rhinoceros','Hedgehog','Zebra','Possum','Wombat','Bison','Bull','Buffalo',
'Sheep','Meerkat','Mouse','Otter','Sloth','Owl','Vulture','Flamingo','Racoon','Mole',
'Duck','Swan','Lynx','Monitor','lizard','Elk','Boar','Lemur','Mule','Baboon','Mammoth',
'Blue whale','Rat','Snake','Peacock'];

const nouns = ['toothpaste','phone','doll','shirt','flower','computer','spoon','sticky note','soap','candle',
    'chocolate','sharpie','clock','toilet','rubber duck','mop','buckle','shampoo','candy wrapper',
    'window','pool stick','rubber band','USB drive','rusty nail','tv','hair tie','pen','chair',
    'key','controller','screw','stocking','clamp','milk','bow','cellphone','charger','conditioner',
    'television','cork','couch','deodorant','picture frame','rug','needle','box','air freshener',
    'keyboard','radio','bread','bookmark','truck','ice cube tray','twister','knife','slipper',
    'sketch pad','money','cup','coaster','beef','thread','wallet','chalk','bracelet','seat belt',
    'floor','button','chapter book','washing machine','mouse pad','mirror','house',
    'spring','bed','playing card','food','headphone','pencil','tomato','plate','soda can',
    'boom boxe','balloon','door','thermostat','plastic fork','cinder block','magnet',
    'shawl','stop sign','lotion','sand paper','ring','pillow','eraser','canvas','remote'];

function createMadLib(arr1,arr2,arr3)
{const adj1 = Math.floor(Math.random()*arr1.length);
 const adj2 = Math.floor(Math.random()*arr1.length);
 const anim = Math.floor(Math.random()*arr2.length);
 const N = Math.floor(Math.random()*arr3.length);
 return `The ${arr1[adj1]}, ${arr1[adj2]} ${arr2[anim]} ate ${Math.floor(Math.random()*10000)} ${arr3[N]}s.`;
}
console.log(createMadLib(adjectives, animal, nouns));