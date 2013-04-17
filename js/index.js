function sc(src) {
    document.write('<script  type="text/javascript" src="js/'+ src +'.js"></script>');
}

sc('libs/jquery-1.9.1');
sc('libs/jquerymx-3.2.custom.min');
sc('libs/custome/contract');


sc('constants');

//class
sc('class/debug');


sc('class/keyboard');
sc('class/animation');

sc('class/drawable/abstract');
sc('class/drawable/ball');
sc('class/drawable/racket');
sc('class/drawable/lines');


sc('app');
