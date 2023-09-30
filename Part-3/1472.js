
class BrowserHistory{
    
    constructor(homepage){
        this.histories = [homepage];
        this.curr_index =0;
        // console.log(histories[0]);
    }
    visit(url){
        this.histories.length = this.curr_index + 1;
        console.log(this.histories.length);
        this.histories.push(url);
        this.curr_index += 1;
    }
    back(steps){
        this.curr_index = this.curr_index-steps;
        if(this.curr_index < 0){
            this.curr_index = 0;
        }
        console.log(this.histories[this.curr_index]);
    }
    forward(steps){
        this.curr_index = this.curr_index+steps;

        if(this.curr_index>=this.histories.length){
            this.curr_index = this.histories.length-1;
        }
        console.log(this.histories[this.curr_index]);
        // return this.histories[newIndex];
    }

    print(){
        for(let i=0; i<this.histories.length; i++){
            console.log(this.histories[i]);
        }
    }
}

let list  = new BrowserHistory("leetcode.com");

list.visit("google.com");
list.visit("facebook.com");
list.visit("youtube.com");

list.back(1);
list.back(1);
list.forward(1);
list.visit("linkedin.com");

list.forward(2);
list.back(2);
list.back(7);

// list.visit("linkedin.com");

list.print();
