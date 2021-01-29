// function fun1() {
//     /*
//      * Работа с checkbox 
//      */
//     var chbox;
//     chbox = document.getElementById('one');

//     if (chbox.checked) {
//         alert('Выбран!');
//     } else {
//         alert('Не выбран!');
//     }
// }


// function fun2() {
//     /*
//      * Работа с radio button 
//      */
//     var radio = document.getElementsByName('r1');
//     for (var i = 0; i < radio.length; i++) {
//         if (radio[i].checked) {
//             alert('Выбран ' + i + ' элемент');
//         }
//     }
// }



// function fun3() {
//     /*
//      * Работа с выпадающим списком 
//      */
//     var sel = document.getElementById('mySelect').selectedIndex;
//     var options = document.getElementById('mySelect').options;
//     alert('Выбрана опция ' + options[sel].text);
// }

// работа с input range
// function fun4() {
//     // var rng = document.getElementById('r1');
//     // var p = document.getElementById('one');
//     // p.innerHTML = rng.value;


//     // var i1 = document.getElementById('i1');
//     // i1.value = rng.value;


//     var rng = document.getElementById('r1');
//     var div = document.getElementById('test');
//     div.style.width = rng.value + 'px';
// }



// function fun5() {
//     /*
//      * CSS генератор 
//      */
//     var rtl = document.getElementById('rtl').value;
//     var rtr = document.getElementById('rtr').value;
//     var rbr = document.getElementById('rbr').value;
//     var rbl = document.getElementById('rbl').value;

//     var ttl = document.getElementById('ttl');
//     var ttr = document.getElementById('ttr');
//     var tbr = document.getElementById('tbr');
//     var tbl = document.getElementById('tbl');

//     var block = document.getElementById('block');

//     ttl.value = rtl;
//     ttr.value = rtr;
//     tbr.value = rbr;
//     tbl.value = rbl;

//     block.style.borderRadius = rtl + 'px ' + rtr + 'px ' + rbr + 'px ' + rbl + 'px ';
// }


/*
 * Выпадающее меню ------------------------------------------ 
 */

/*
document.getElementById('nav').onmouseover = function(event) {
    var target = event.target;
    if (target.className == 'menu-item') {
        var s = target.getElementsByClassName('submenu');
        closeMenu();
        s[0].style.display = 'block';

    }
}

document.onmouseover = function(event) {
    var target = event.target;
    console.log(event.target);
    if (target.className != 'menu-item' && target.className != 'submenu') {
        closeMenu();
    }
}

function closeMenu() {
    var menu = document.getElementById('nav');
    var subm = document.getElementsByClassName('submenu');
    for (var i = 0; i < subm.length; i++) {
        subm[i].style.display = 'none';
    }
}
*/

/*
 * Выпадающее меню ------------------------------------------ 
 */



/*
 * Вкладки табы (Tabs) 
 */

var tab;
var tabContent;

window.onload = function() {
    tabContent = document.getElementsByClassName('tabContent');
    tab = document.getElementsByClassName('tab');
    hideTabsContent(1);
}

function hideTabsContent(a) {
    for (var i = 0; i < tabContent.length; i++) {
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add('hide');
        tab[i].classList.remove('whiteborder');
    }
}

document.getElementById('tabs').onclick = function(event) {
    var target = event.target;
    if (target.className == 'tab') {
        for (var i = 0; i < tab.length; i++) {
            if (target == tab[i]) {
                showTabsContent(i);
                break;
            }
        }
    }
}

function showTabsContent(b) {
    if (tabContent[b].classList.contains('hide')) {
        hideTabsContent(0);
        tab[b].classList.add('whiteborder');
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
    }
}

/*
 * Вкладки табы (Tabs) 
 */