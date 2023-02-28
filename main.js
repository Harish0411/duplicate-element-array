let arrD = [12,11,67,12,5,8,9,100,6,5,11,67,35,100];
let al =[];


function findDuplicate(a){
      for(i=0; i<a.length-1; i++){
	      for(j=i+1; j<a.length; j++){
		       if(a[i] == a[j] ){
			       al.push(a[i]);
				 }
			  }
		  }
	 }
	 console.log(arrD);
	 findDuplicate(arrD);
	 console.log(al);
	 
/*let foo = arrD.filter((value, index) => arrD.indexOf(value) == index);
console.log(foo);

var dup=[];
let boo = arrD.forEach(element =>{
   if(!dup.includes(element)){
        dup.push(element);
     }
});

console.log(dup);*/
