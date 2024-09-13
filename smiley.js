function countSmileys(arr) {    
    let count = 0;  
    for (let face of arr) {  
        if (face.length === 2 || face.length === 3) {  
            const eye = face[0];  
            const mouth = face[face.length - 1];  
            const nose = face.length === 3 ? face[1] : null;  
            if ((eye === ':' || eye === ';') &&  
                (mouth === ')' || mouth === 'D') &&  
                (nose === null || nose === '-' || nose === '~')) {  
                    count++;  
            }  
        }  
    }  

    return count;  
}  

console.log(countSmileys([":)" , ";~)" , ":-("]));