const bt = document.querySelector('div');
bt.addEventListener('dblclick', function (e) {
    alert('double');
})

// doubleclick(this, function(){alert('single')}, function(){alert('double')})
// function doubleclick(el, onsingle, ondouble) {
//     if (el.getAttribute("data-dblclick") == null) {
//         el.setAttribute("data-dblclick", 1);
//         setTimeout(function () {
//             if (el.getAttribute("data-dblclick") == 1) {
//                 onsingle();
//             }
//             el.removeAttribute("data-dblclick");
//         }, 300);
//     } else {
//         el.removeAttribute("data-dblclick");
//         ondouble();
//     }
// }