function ebin() {
    var karvo = parseInt(document.getElementById('inputti').value);
    var jono = "";
    for(var i = 2; i <= karvo; i= i+2)
    {
      jono+=i;
      jono+=" ";
    }
      document.getElementById('parilliset').innerHTML = jono;
}
function sal() {
  var inp = document.getElementById('inp2').value;
  var pp = "";
  for(var j = 0; j < inp.length; j++) {
    pp += inp[j] + 'Ö';
  }
  document.getElementById('ok').innerHTML = pp;
}
function Oooo() {
  var onko = document.getElementById('kissa').value;
  var on = 'ei ole';
  for(var k = 0; k < onko.length; k++)
  {
    if(onko[k] == 'ö' || onko[k] == 'ö')
    {
      on = 'on';
    }
  }
  document.getElementById('vastaus').innerHTML = '<p>' + on + '</p>';
}
function lask() {
  var kerr = document.getElementById('luku1').value;
  var las = 1;
  for(var z = 1; z <= kerr; z++) {
    las*=z;
  }
  document.getElementById('kertomaVastaus').innerHTML = 'Luvun ' + kerr + ' kertoma on '+las ;
}
function tul()
{
  var tul = '';
  for(var y = 1; y <= 100; y++)
  {
    if(y%3==0 && y%5==0)
    {
      tul+='Hip Heijaa ';
    }
    else if(y%5 == 0)
    {
      tul+='Heijaa ';
    }
    else if(y%3 == 0)
    {
      tul+='Hip ';
    }
    else {
      tul+=y+' ';
    }
    document.getElementById('luk').innerHTML = tul;
  }
}