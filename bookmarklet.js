(function() {
  var script = document.createElement('script');
  script.onload = function() {

    var stats = new MemoryStats();

    var elem = stats.domElement;
    elem.style.position = 'fixed';
    elem.style.right    = '0px';
    elem.style.bottom   = '0px';
    elem.style.zIndex   = 100000;

    document.body.appendChild( stats.domElement );

    requestAnimationFrame(function rAFloop(){
      stats.update();
      requestAnimationFrame(rAFloop);
    });
  };
  
  script.src = "https://rawcdn.githack.com/zshall/memory-stats.js/6fa0f359134c4668bd9b931b95156bae1073e8eb/memory-stats.js";
  document.head.appendChild(script);
})();
