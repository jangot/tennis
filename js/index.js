function sc(src) {
    document.write('<script  type="text/javascript" src="js/'+ src +'.js"></script>');
}

sc('libs/jquery-1.9.1');
sc('libs/jquerymx-3.2.custom.min');

sc('constants');

//class
sc('class/keyboard');


sc('app');
