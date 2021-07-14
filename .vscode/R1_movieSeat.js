function distance(arr){
    var len=arr.length;
    var zeroNrCount=0;
    var temp=0
    for(let i=0;i<len;i++){
        if(arr[i]==1){
            if(zeroNrCount<=temp){
                console.log()
                zeroNrCount=temp
                // console.log("zeroNrCount",zeroNrCount)
                temp=0
            }
        }else{
            temp+=1
            // console.log("temp",temp)
        }
    }
    console.log("zeroNrCount",zeroNrCount)
    var res=Math.floor(zeroNrCount/2)
    console.log("res",res)
    return res+1
}
var arr=[1,0,1,0,1,0,0,0,0,1]
distance(arr)
