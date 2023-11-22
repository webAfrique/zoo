const animals = [
  {"id":0,"name":"alligator","likes":57,"dislikes":5},
  {"id":1,"name":"alpaca","likes":16,"dislikes":3},
  {"id":2,"name":"ant","likes":47,"dislikes":3},
  {"id":3,"name":"anteater","likes":66,"dislikes":2},
  {"id":4,"name":"antelope","likes":35,"dislikes":1},
  {"id":5,"name":"ape","likes":51,"dislikes":5},
  {"id":6,"name":"armadillo","likes":69,"dislikes":1},
  {"id":7,"name":"baboon","likes":59,"dislikes":5},
  {"id":8,"name":"badger","likes":96,"dislikes":4},
  {"id":9,"name":"bat","likes":12,"dislikes":0},
  {"id":10,"name":"bear","likes":2,"dislikes":0},
  {"id":11,"name":"beaver","likes":80,"dislikes":3},
  {"id":12,"name":"bison","likes":62,"dislikes":3},
  {"id":13,"name":"boar","likes":6,"dislikes":2},
  {"id":14,"name":"buffalo","likes":47,"dislikes":3},
  {"id":15,"name":"camel","likes":2,"dislikes":5},
  {"id":16,"name":"capybara","likes":10,"dislikes":0},
  {"id":17,"name":"caribou","likes":40,"dislikes":3},
  {"id":18,"name":"cat","likes":47,"dislikes":0},
  {"id":19,"name":"cattle","likes":16,"dislikes":0},
  {"id":20,"name":"chamois","likes":82,"dislikes":2},
  {"id":21,"name":"cheetah","likes":43,"dislikes":2},
  {"id":22,"name":"chimpanzee","likes":72,"dislikes":0},
  {"id":23,"name":"chinchilla","likes":88,"dislikes":3},
  {"id":24,"name":"coyote","likes":2,"dislikes":2},
  {"id":25,"name":"crocodile","likes":32,"dislikes":4},
  {"id":26,"name":"deer","likes":55,"dislikes":4},
  {"id":27,"name":"dog","likes":72,"dislikes":0},
  {"id":28,"name":"donkey","likes":93,"dislikes":1},
  {"id":29,"name":"echidna","likes":2,"dislikes":1},
  {"id":30,"name":"eland","likes":31,"dislikes":1},
  {"id":31,"name":"elephant","likes":28,"dislikes":5},
  {"id":32,"name":"elk","likes":71,"dislikes":0},
  {"id":33,"name":"ferret","likes":93,"dislikes":1},
  {"id":34,"name":"fox","likes":52,"dislikes":4},
  {"id":35,"name":"frog","likes":34,"dislikes":0},
  {"id":36,"name":"gaur","likes":12,"dislikes":3},
  {"id":37,"name":"gazelle","likes":52,"dislikes":5},
  {"id":38,"name":"gerbil","likes":16,"dislikes":5},
  {"id":39,"name":"giant-panda","likes":21,"dislikes":3},
  {"id":40,"name":"giraffe","likes":7,"dislikes":0},
  {"id":41,"name":"gnu","likes":2,"dislikes":2},
  {"id":42,"name":"goat","likes":95,"dislikes":4},
  {"id":43,"name":"goose","likes":11,"dislikes":1},
  {"id":44,"name":"gorilla","likes":46,"dislikes":0},
  {"id":45,"name":"guanaco","likes":73,"dislikes":0},
  {"id":46,"name":"guinea-pig","likes":17,"dislikes":1},
  {"id":47,"name":"hamster","likes":69,"dislikes":2},
  {"id":48,"name":"hare","likes":60,"dislikes":2},
  {"id":49,"name":"hedgehog","likes":5,"dislikes":3},
  {"id":50,"name":"herring","likes":27,"dislikes":0},
  {"id":51,"name":"hippopotamus","likes":25,"dislikes":3},
  {"id":52,"name":"horse","likes":66,"dislikes":1},
  {"id":53,"name":"human","likes":1,"dislikes":0},
  {"id":54,"name":"hyena","likes":16,"dislikes":1},
  {"id":55,"name":"ibex","likes":73,"dislikes":0},
  {"id":56,"name":"jackal","likes":77,"dislikes":4},
  {"id":57,"name":"jaguar","likes":34,"dislikes":2},
  {"id":58,"name":"kangaroo","likes":34,"dislikes":5},
  {"id":59,"name":"koala","likes":23,"dislikes":3},
  {"id":60,"name":"komodo-dragon","likes":22,"dislikes":5},
  {"id":61,"name":"kouprey","likes":29,"dislikes":4},
  {"id":62,"name":"kudu","likes":1,"dislikes":4},
  {"id":63,"name":"lemur","likes":96,"dislikes":2},
  {"id":64,"name":"leopard","likes":33,"dislikes":5},
  {"id":65,"name":"lion","likes":95,"dislikes":3},
  {"id":66,"name":"llama","likes":6,"dislikes":0},
  {"id":67,"name":"loris","likes":7,"dislikes":4},
  {"id":68,"name":"manatee","likes":95,"dislikes":0},
  {"id":69,"name":"mandrill","likes":51,"dislikes":1},
  {"id":70,"name":"marten","likes":93,"dislikes":1},
  {"id":71,"name":"meerkat","likes":24,"dislikes":3},
  {"id":72,"name":"mink","likes":40,"dislikes":4},
  {"id":73,"name":"mole","likes":40,"dislikes":0},
  {"id":74,"name":"mongoose","likes":61,"dislikes":2},
  {"id":75,"name":"monkey","likes":83,"dislikes":4},
  {"id":76,"name":"moose","likes":35,"dislikes":3},
  {"id":77,"name":"mouse","likes":91,"dislikes":4},
  {"id":78,"name":"mule","likes":12,"dislikes":4},
  {"id":79,"name":"okapi","likes":96,"dislikes":1},
  {"id":80,"name":"opossum","likes":39,"dislikes":5},
  {"id":81,"name":"oryx","likes":10,"dislikes":1},
  {"id":82,"name":"otter","likes":47,"dislikes":2},
  {"id":83,"name":"ox","likes":45,"dislikes":2},
  {"id":84,"name":"oyster","likes":99,"dislikes":2},
  {"id":85,"name":"panther","likes":80,"dislikes":2},
  {"id":86,"name":"pig","likes":1,"dislikes":4},
  {"id":87,"name":"polar-bear","likes":85,"dislikes":5},
  {"id":88,"name":"pony","likes":84,"dislikes":0},
  {"id":89,"name":"porcupine","likes":79,"dislikes":4},
  {"id":90,"name":"porpoise","likes":25,"dislikes":4},
  {"id":91,"name":"prairie-dog","likes":97,"dislikes":0},
  {"id":92,"name":"rabbit","likes":28,"dislikes":3},
  {"id":93,"name":"raccoon","likes":62,"dislikes":0},
  {"id":94,"name":"ram","likes":18,"dislikes":5},
  {"id":95,"name":"rat","likes":70,"dislikes":2},
  {"id":96,"name":"raven","likes":30,"dislikes":2},
  {"id":97,"name":"red-deer","likes":74,"dislikes":2},
  {"id":98,"name":"red-panda","likes":94,"dislikes":4},
  {"id":99,"name":"reindeer","likes":92,"dislikes":5},
  {"id":100,"name":"rhinoceros","likes":9,"dislikes":0},
  {"id":101,"name":"salamander","likes":59,"dislikes":4},
  {"id":102,"name":"sea-lion","likes":19,"dislikes":3},
  {"id":103,"name":"seal","likes":96,"dislikes":2},
  {"id":104,"name":"sheep","likes":71,"dislikes":4},
  {"id":105,"name":"skunk","likes":7,"dislikes":2},
  {"id":106,"name":"spider","likes":21,"dislikes":1},
  {"id":107,"name":"squirrel","likes":56,"dislikes":1},
  {"id":108,"name":"tapir","likes":54,"dislikes":0},
  {"id":109,"name":"tarsier","likes":46,"dislikes":3},
  {"id":110,"name":"tiger","likes":98,"dislikes":4},
  {"id":111,"name":"wallaby","likes":49,"dislikes":5},
  {"id":112,"name":"walrus","likes":23,"dislikes":1},
  {"id":113,"name":"water-buffalo","likes":26,"dislikes":0},
  {"id":114,"name":"weasel","likes":50,"dislikes":2},
  {"id":115,"name":"wolf","likes":42,"dislikes":3},
  {"id":116,"name":"wombat","likes":87,"dislikes":4},
  {"id":117,"name":"yak","likes":71,"dislikes":5},
  {"id":118,"name":"zebra","likes":6,"dislikes":2}
]

const birds = [
  {"id":0,"name":"Sparrow","likes":74,"dislikes":2},
  {"id":1,"name":"Starling","likes":100,"dislikes":3},
  {"id":2,"name":"Pigeon","likes":99,"dislikes":2},
  {"id":3,"name":"Dove","likes":38,"dislikes":3},
  {"id":4,"name":"Robin","likes":55,"dislikes":2},
  {"id":5,"name":"Duck","likes":61,"dislikes":0},
  {"id":6,"name":"Crow","likes":69,"dislikes":5},
  {"id":7,"name":"Cardinal","likes":5,"dislikes":0},
  {"id":8,"name":"Jay","likes":49,"dislikes":2},
  {"id":9,"name":"Goldfinch","likes":99,"dislikes":1},
  {"id":10,"name":"Blackbird","likes":17,"dislikes":3},
  {"id":11,"name":"Bluebird","likes":82,"dislikes":4},
  {"id":12,"name":"Swallow","likes":44,"dislikes":2},
  {"id":13,"name":"Chickadee","likes":71,"dislikes":0},
  {"id":14,"name":"Finch","likes":96,"dislikes":3},
  {"id":15,"name":"Kestrel","likes":1,"dislikes":0},
  {"id":16,"name":"Owl","likes":61,"dislikes":5},
  {"id":17,"name":"Woodpecker","likes":15,"dislikes":0},
  {"id":18,"name":"Mockingbird","likes":57,"dislikes":0},
  {"id":19,"name":"Grackle","likes":53,"dislikes":2},
  {"id":20,"name":"Titmouse","likes":92,"dislikes":4},
  {"id":21,"name":"Falcon","likes":42,"dislikes":0},
  {"id":22,"name":"Osprey","likes":32,"dislikes":5},
  {"id":23,"name":"Eagle","likes":14,"dislikes":1},
  {"id":24,"name":"Killdeer","likes":60,"dislikes":5},
  {"id":25,"name":"Magpie","likes":41,"dislikes":4},
  {"id":26,"name":"Collared Dove","likes":59,"dislikes":0},
  {"id":27,"name":"Blue Tit","likes":89,"dislikes":0},
  {"id":28,"name":"Parula","likes":21,"dislikes":1},
  {"id":29,"name":"Warbler","likes":12,"dislikes":5},
  {"id":30,"name":"Bunting","likes":86,"dislikes":1},
  {"id":31,"name":"Flicker","likes":67,"dislikes":5},
  {"id":32,"name":"Hummingbird","likes":18,"dislikes":1},
  {"id":33,"name":"Snowy Owl","likes":70,"dislikes":4},
  {"id":34,"name":"Pelican","likes":49,"dislikes":0},
  {"id":35,"name":"Goose","likes":43,"dislikes":1},
  {"id":36,"name":"Egret","likes":81,"dislikes":1},
  {"id":37,"name":"Grebe","likes":55,"dislikes":3},
  {"id":38,"name":"Cormorant","likes":79,"dislikes":3},
  {"id":39,"name":"Hawk","likes":34,"dislikes":5}
]

export default { animals, birds }

