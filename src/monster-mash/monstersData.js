function Monster (name, diet, img) {
  this.name = name
  this.diet = diet
  this.img = img
}

const monsters = []

const jason = new Monster('Jason Voorhees', ['monster energy'], 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5Jo_OgF4rJaizQPPbyIqUvFJQvlKgx2E3coPBoZuS80sKTWyl-g')
const frankenstein = new Monster('Frankenstein', ['small children', 'annoying villagers'], 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy82J3vzRVULkATH_UBy9M7a49ix3OVLrCSyawyJLqSNH55kBh')
const yeti = new Monster('Abominable Snowman', ['snow cones', 'stray skiers'], 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScRq5qEVJxCAdX2H2ALdL1ErMTZI-MX5ELqArSYuGpoWd52HlbaA')
const dracula = new Monster('Dracula', ['expensive wine', 'blood'], 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Imy2Lvr2WLHs9Rj7CM4ISLdgN_6LDe_IQe0WTSzgUkEVwJpH')
const mike = new Monster('Mike Wazowski', ['not snow cones', 'cheerios'], 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbu1MsstJRnCdRRXTvJFhlvTtBxxuh0fh16EjOU8EqH3SDc_y')

monsters.push(jason, frankenstein, yeti, dracula, mike)

export default monsters