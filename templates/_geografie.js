////////////////////////////////////////////////// EPIC
/*
UMAN UMAN UMAN UMAN UMAN UMAN UMAN UMAN UMAN UMAN UMAN UMAN UMAN UMAN
*/
// mihnea SI IOANA
var lectie1 = {
  nume:"Lectie 1",
  autor:"Autor",
  cat:"Categorie",
  an:"An",
  parte_1:"p1",
  parte_2:"p2",
  parte_3:"p3",
  parte_4:"p4",
  parte_5:"p5",
  parte_6:"p6",
  parte_7:"p7"
};


//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

if(document.getElementById("title").innerHTML == "Lectie1"){
  var continut = document.getElementById("continut");
  continut.innerHTML += "<h1 class='aliniere'>"+lectie1.nume+"</h1>";
  continut.innerHTML += "<p class='divAutor'><p class='autor'>de "+lectie1.autor+"</p></p>";
  continut.innerHTML += "<span class='categorisire_opera'>"+lectie1.cat+"<br>"+lectie1.an+"</span>";
  continut.innerHTML += "<p class='p1'>"+lectie1.parte_1+"</p>";
  continut.innerHTML += "<p class='p2'>"+lectie1.parte_2+"</p>";
  continut.innerHTML += "<p class='p3'>"+lectie1.parte_3+"</p>";
  continut.innerHTML += "<p class='p4'>"+lectie1.parte_4+"</p>";
  continut.innerHTML += "<p class='p5'>"+lectie1.parte_5+"</p>";
  continut.innerHTML += "<p class='p6'>"+lectie1.parte_6+"</p>";
  continut.innerHTML += "<p class='p7'>"+lectie1.parte_7+"</p>";
}




$('<div class="app-nav-bottom" id="app-nav-bottom"><table class="app-nav-tabel"><tr><td><a href="../index.html"><i class="fa fa-home fa-nav fa-nav-size"></i></a></td><td><a href="../uman.html"><i class="fa fa-book fa-nav fa-nav-size"></i></a></td><td><a href="../uman.html"><i class="fa fa-reply fa-nav fa-nav-size"></i></a></td></tr></table></div>').insertAfter("#continut");







// http://stackoverflow.com/a/9795091
$.fn.wrapInTag = function (opts) {
    // http://stackoverflow.com/a/1646618
    function getText(obj) {
        return obj.textContent ? obj.textContent : obj.innerText;
    }

    var tag = opts.tag || 'strong',
        words = opts.words || [],
        regex = RegExp(words.join('|'), 'gi'),
        replacement = '<' + tag + '>$&</' + tag + '>';

    // http://stackoverflow.com/a/298758
    $(this).contents().each(function () {
        if (this.nodeType === 3) //Node.TEXT_NODE
        {
            // http://stackoverflow.com/a/7698745
            $(this).replaceWith(getText(this).replace(regex, replacement));
        }
        else if (!opts.ignoreChildNodes) {
            $(this).wrapInTag(opts);
        }
    });
};

// highlight these words
$('p').wrapInTag({"words" : [
            "arta poetica ",
            "axul ",
            "conflictul ",
            "cadrul ",
            "conflictul interior ",
            "conflictul exterior ",
            "dramatic ",
            "eroul ",
            "epic ",
            "eul liric ",
            "eul poetic ",
            "final ","final.","finalul ","final deschis ","in final ",
            "firul epic ",
            "inceputul ",
            "incipit ", "incipitul ",
            "liric ",
            "motivul ",
            "momentele subiectului ",
            "expozitiunea ","intriga ","desfasurarea actiunii","punctul culminant ","deznodamantul",
            "in prima parte ","prima parte ","a doua parte ","a treia parte ","ultima parte ",
            "nucleul I ","nucleul II ","nucleul III ",
            "personajul ",
            "personajul principal ",
            "planuri narative ",
            "primul volum ",
            "sfarsitul ",
            "stil ","stilul anticalofil ",
            "simetria ","simetric ",
            "scena ","scenele reprezentative ",
            "titlul ","semnificatia titlului ",
            "tema ",
            "Volumul I ",
            "Volumul II ",
            "Volumul III "
]});

document.getElementById("poweredBy").innerHTML = "Powered by<br>DesignRoom.ro";
