class Stack{
    constructor(){
        this.data =[]
        this.max = []
    }
    
    maxVal = () => (this.max.length>0) && (this.max[this.max.length-1])

    add = val => (this.data.push(val)) && (this.max.length==0 || this.max[this.max.length-1] <=val) && ( this.max.push(val))
    
    pop = () => (this.data.length>0) && (this.data.splice(this.data.length-1,1) == this.max[this.max.length-1]) && this.max.pop()
    
    /* 
    add = val => {
        this.data.push(val)
        if(this.max.length==0 || this.max[this.max.length-1] <=val)     
            this.max.push(val)
    }

    pop = () => {
        if(this.data.length>0){
            if(this.data.splice(this.data.length-1,1) == this.max[this.max.length-1])   
                this.max.pop()
        }
    }
    */
}

/* 
const ourStack = new Stack()
ourStack.add(11)
ourStack.add(13)
ourStack.add(10)
ourStack.add(13)
console.log(ourStack.data,ourStack.max);
ourStack.pop()
ourStack.pop()
console.log(ourStack.data,ourStack.max);
ourStack.add(14)
console.log(ourStack.data,ourStack.max); 
*/