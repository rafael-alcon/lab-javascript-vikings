// Soldier
class Soldier {
    constructor(health, strength){
        this.health= health;
        this.strength= strength;

    }
    
    attack(){
        return this.strength
    }

    receiveDamage(damage){
        this.health-= damage
    }
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength){
        super(health, strength)
        this.name= name
    }
      
    receiveDamage(damage){
        this.health -= damage
        if (this.health>0){
            return `${this.name} has received ${damage} points of damage`
            
        }else{
            return `${this.name} has died in act of combat`
        }
    }

    battleCry(){
        return "Odin Owns You All!"
    }
}


// Saxon
class Saxon extends Soldier{

    receiveDamage(damage){
        this.health -= damage
        if (this.health>0){
            return `A Saxon has received ${damage} points of damage`
        }else{
            return `A Saxon has died in combat`
        }
    }
}

// War
class War {    

    constructor(){
        this.vikingArmy=[]
        this.saxonArmy=[]
    }

    addViking(Viking){
        this.vikingArmy.push(Viking)
    }

    addSaxon(Saxon){
        this.saxonArmy.push(Saxon)
    }

    vikingAttack(){
        let x= Math.floor(Math.random() * this.saxonArmy.length)
        let y= Math.floor(Math.random() * this.vikingArmy.length)
        let messageViking = this.saxonArmy[x].receiveDamage(this.vikingArmy[y].strength)
        if (messageViking.includes("has died in combat")){
            this.saxonArmy.splice(x,1)
            return messageViking  
        }else{            
            return messageViking 
        }
        
    }
    saxonAttack(){
        let a= Math.floor(Math.random() * this.saxonArmy.length)
        let b= Math.floor(Math.random() * this.vikingArmy.length)
        let messageSaxon = this.vikingArmy[b].receiveDamage(this.saxonArmy[a].strength)
        if (messageSaxon.includes("has died in act of combat")){
            this.vikingArmy.splice(b,1)
            return messageSaxon  
        }else{            
            return messageSaxon 
        }

        
    }
    showStatus(){
        if (this.saxonArmy.length===0){
            return "Vikings have won the war of the century!"
        }

        if (this.vikingArmy.length===0){
            return "Saxons have fought for their lives and survived another day..."
        }
        if (this.saxonArmy.length===1 && this.vikingArmy.length===1){
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}
