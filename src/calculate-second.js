function calculate_median(arr) {
  var a = [];
  for (var i=1;i<arr.length;i+=2){
    a.push(arr[i]);
  }
  for (var i = 0;i<a.length-1;i++){
    for(var j = i+1;j<a.length;j++){
      if (a[i] > a[j]){
        var temp = a[i];
        a[i] = a[j];
        a[j] = temp;
      }
    }
  }
  var res;
  var mid = a.length/2;
  if(a.length % 2 == 0) {
    res = (a[mid] + a[mid-1])/2;
  }
  else {
    res = a[parseInt(mid)];
  }
  return res;
}
