let psum = 0;
let ssum = 0;
matrix = [[1,0,5],[0,1,0],[0,0,1]];

calc = (type)=>{
    for (let i =0; i<matrix.length;i++){
    
         psum += matrix[i][i];
        ssum += matrix[i][matrix.length-1-i];
    

    }
    if (type == "principal"){
        return psum;
    }else if (type == "secondary"){
        return(ssum);
    }else{
        return "error";
    }
}
result = calc("secondary");
console.log(result);



