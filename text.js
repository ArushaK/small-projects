const matrix = [ [1,2,3],[4,5,6],[7,8,9] ];
var temp=[]
        var row, col;
        //Finding the smallest element in each row
        for(row=0;row<3;row++)
        {
            temp[row]=matrix[row][0];
            for(col=1;col<3;col++)
                if(matrix[row][col]<temp[row])
                    temp[row] = matrix[row][col];
        }
        for(var i = 0; i<3;i++)
            console.log("\nSmallest element in "+(i+1)+"th row is "+temp[i]);