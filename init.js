// setTimeout(() => {
//     cc();
//     setTimeout(() => {
//       cc();
//     }, 1000);
//   }, 1000);
(function () {
    const overworld = new Overworld({
    element: document.querySelector('.conteinerCanv')
    })
    overworld.init()
})();