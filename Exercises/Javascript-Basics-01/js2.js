var birth = prompt("birth: ");
var size = prompt("size: ");
function mult() {
  size = size * 2;
  size += 5;
  size *= 50;
  size = size / birth;
  size += 1766;
  return size;
}
alert(mult());
