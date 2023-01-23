var s = 'newsletter'
var num=3
var output='';
for (let i=0; i<3; i++){
    for (let j=i; j<s.length;j++){
        if(j===2){
            num=4
            output+=s[j]
            j+=num                  // if s=newsletter n=3
        }else{
            output+=s[j]
            j+=num
        } 
    }
    num=1
    output+='\n'
}
console.log(output)

// first row nle
// second row esetr
// thirrd row wt