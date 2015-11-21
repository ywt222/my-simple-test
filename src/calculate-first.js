function single_element(arr) {
  for (var i=1;i<arr.length;i+=2)
  {
  //  for (var j=0;j<=arr.length/2;j++)
    var a = [];
    a.push(arr[i]);
    var b = [];
    for (var k=0;k<=a.length-2;k++)
    {
      for (var j=k+1;j<=a.length-1;j++)
      {
        if a[j] !== a[k];

        b.push(a[k]);

      }
     return b;
    }

  }
}
