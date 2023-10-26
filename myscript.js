function sleep(ms) {
    return new Promise(
      resolve => setTimeout(resolve, ms)
    );
  }

  async function deleteStuff(){
    var element = document.querySelector('div.style-scope ytd-topbar-logo-renderer');
    element.remove(element);
    
    var elements = document.getElementsByClassName("style-scope ytd-rich-grid-media");
    console.log("hi");
    for (var i = 0; i < elements.length; i++) {
        await sleep(1000);
        var g = elements.item(i);
        g.remove(g);
        }
    
  }

  deleteStuff()




