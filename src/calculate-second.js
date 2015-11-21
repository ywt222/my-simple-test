function calculate_median(arr) {
//var i=arr.length;
if (var i=1; i<arr.length;i+=2)
{
  var b = [];
  b.push(arr[i])
}
sort(b,b+arr.length/2);
var c;
if (b.length/2 !== 0)
{
  c = b[b.length/2];
}
else{
  c=(b[b.length/2]+b[b.length/2+1])/2;
}
return c;

}
