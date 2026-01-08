class Pokemon{
    constructor(id, name, type, moves, hp, weak, strong, img){
        this.id = id
        this.name = name
        this.type = type
        this.moves = moves
        this.hp = hp
        this.weak = weak
        this.strong = strong
        this.img = img
    }

    attack(move, target){
        let dmg = move.dmg
        console.log(this.name, 'has attacked', target.name)

        if(target.weak.includes(move.type)){
            console.log('Weak to', move.type)
            dmg *= 1.8
        }
        else if(target.strong.includes(move.type)){
            console.log('Strong against', move.type)
            dmg *= 0.7
        }
        target.receivedmg(dmg)
    }
    receivedmg(dmg){
        console.log(this.name, 'received', dmg, 'damage')
        if(dmg >= this.hp){
            this.hp = 0
            console.log('Target has fainted')
        }
        else{this.hp -= dmg}
    }

    render_pkmn(){
        console.log('rendering pokemon')
        //create card
        this.element = document.createElement('div')
        this.element.className = 'pk-card'

        //title
        this.title = document.createElement('h4')
        this.title.id = 'pk-title'
        this.title.textContent = this.name

        //picture
        this.picture = document.createElement('img')
        this.picture.id = 'pic'
        this.picture.src = this.img

        //moves grid
        this.movesgrid = document.createElement('div')
        this.movesgrid.id = "movesgrid"

        //iterating through moves
        for(let i = 0; i <= this.moves.length -1; i++){
            console.log(this.moves[i])

            let x = document.createElement('div')
            x.id = 'move'
            x.textContent = `${this.moves[i].name}`
            this.movesgrid.appendChild(x)
        }
        
        this.element.appendChild(this.title) //appending title
        this.element.appendChild(this.picture) //appending picture
        this.element.appendChild(this.movesgrid)
        document.getElementById('pk-holder').appendChild(this.element)

    }
}

class moves{
    constructor(name, dmg, type, pp){
        this.name = name;
        this.dmg = dmg;
        this.type = type;
        this.pp = pp;
    }

    use(){
        this.pp -= 3;
        return this.dmg;
    }
}

thnr_shc = new moves('Thunder Shock', 30, 'Electric', 10)
tack = new moves('Tackle', 10, 'Normal', 20)
wtr_gun = new moves('Water Gun', 25, 'Water', 15)

pika = new Pokemon(1, 'Pikachu', 'Electric',[thnr_shc, tack], 23, ['Ground', 'Rock'], ['Water', 'Grass', 'Flying'], 'https://www.yourdecoration.com/cdn/shop/files/gbeye-fp4716-pokemon-pikachu-neon-poster-61x91-5cm_0f5303a2-3438-4132-ad41-955881014641.jpg?v=1760462481')
squirtle = new Pokemon(2, 'Squirtle', 'Water', [wtr_gun, tack], 30, ['Electric', 'Grass'], ['Fire', 'Rock', 'Ice'], 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt-DsFWCNWjFxHupFdj4NOacM4cGmWEvyyk0C4kgF9Vj7vbg2UyqLucy5JvJeBAkdZSn30_3kraHJTQSvsitIePNMmHDs9wHWnkp8Kdnsf-Q&s=10')

console.log(pika)
console.log(thnr_shc)

console.log(pika.hp)

pika.attack(pika.moves[0], squirtle)
console.log('Squirtle\'s HP:', squirtle.hp)

squirtle.attack(squirtle.moves[0], pika)
console.log('Pikachu\'s HP:', pika.hp)

pika.render_pkmn()
squirtle.render_pkmn()