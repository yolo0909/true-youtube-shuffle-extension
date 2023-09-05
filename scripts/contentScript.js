document.addEventListener('readystatechange', () => console.log('Page loaded'))

var url = ""

function handleClick(e) {
  e.preventDefault();
  chrome.runtime.sendMessage( {action: "open_new_tab" , url : url})
}

function parse(playlistUrl) {
  let playlistId = playlistUrl.split('list=')[1]
  console.log(playlistId)
  let url = "https://yolo0909.github.io/true-youtube-shuffle-website/?playlistId=" + playlistId
  console.log(url)
  return url;
}

function pollingUrl(){
  if (window.location.href.startsWith("https://www.youtube.com/playlist?list=")){
    console.log("Playlist: " + window.location.href)
    url = parse(window.location.href)
    let shuffleButtons = document.querySelectorAll('[aria-label="Shuffle"]')
    console.log(shuffleButtons)
    if(shuffleButtons) {
      for(let button of shuffleButtons){
        button.href = url
        button.addEventListener('click', handleClick);
      }
    }
  }
  console.log('Hello from content script ' + Date.now() + " " + document.location.href)
}

setInterval(pollingUrl, 5000)


