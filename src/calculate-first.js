function single_element(arr) {
  var a = [];
  var res = [];
  for (var i=1;i<arr.length;i+=2){
    a.push(arr[i]);
  }
    for (var i=0;i<a.length;i++){
      var flag = 1;
      for (var j=0;j<a.length;j++){
        if (i != j && a[j] == a[i]){
          flag = 0;
          break;
        }
      }
      if (flag == 1){
        res.push(a[i]);
      }
    }
     return res;
}
