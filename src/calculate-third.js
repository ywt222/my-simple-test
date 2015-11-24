function even_group_calculate_average(arr) {
  var a = [];
  var b = [];
  var res = [];
  //选出所有第偶数个元素
  for (var i=1;i<arr.length;i+=2){
    a.push(arr[i]);
  }
  //选出其中的偶数
  for (var i=0;i<a.length;i++){
    if(a[i]%2 == 0){
      b.push(a[i]);
    }
  }
  var sum1=0,len1=0;
  var sum2=0,len2=0;
  var sum3=0,len3=0;
  var ave1,ave2,ave3;
  //test2
  if(b.length == 0){
    res.push(0);
  }
  //test1 和 test3
  else{
    for(var i=0;i<b.length;i++){
      if (b[i]<10){
        sum1 += b[i];
        len1 ++;
      }
      else if (b[i]>9 && b[i]<100) {
        sum2 +=b[i];
        len2 ++;
      }
    else if (b[i]>99){
      sum3 +=b[i];
      len3++;
    }
  }
  if (len1 !=0){
    ave1 = sum1/len1;
  }
  else{
    ave1 = 0;
  }
  if (len2 !=0){
    ave2 = sum2/len2;
  }
  else {
    ave2 = 0;
  }
  if (len3 !=0){
    ave3 = sum3/len3;
  }
  else{
    ave3 = 0;
  }
  //test1
  if (ave1 !=0 && ave2 !=0 && ave3 !=0){
    res.push(ave1,ave2,ave3);
  }
  //test3
  if (ave1 == 0 && ave2 ==0 && ave3 !=0){
    res.push(ave3);
  }
}
  return res;
}
