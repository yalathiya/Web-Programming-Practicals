function WriteFile() {
  var fso = new ActiveXObject("Scripting.FileSystemObject");
  var fh = fso.OpenFile("E:\\Test.txt", true);
  x = document.getElementById("name").value;
  y = document.getElementById("password").value;
  fh.WriteLine(x + "#" + y);
  fh.Close();
}
