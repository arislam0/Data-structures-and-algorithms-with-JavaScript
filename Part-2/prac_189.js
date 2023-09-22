
function td_189(s, k){

  
    //    for(let i=0; i<k; i++){
    //     s.unshift(s.pop());
    //    }
    
        let del = s.splice(s.length-k);
        console.log(s.length);
    
        for(let i=0; i<del.length; i++){
            s.splice(i,0,del[i]);
            console.log(s)
            
        }
       return s;
    
    }
    
    // console.log(td_189([1,2,3,4,5,6,7],3));
    // console.log(td_189([-1,-100,3,99],2));
    console.log(td_189([1,2],5));