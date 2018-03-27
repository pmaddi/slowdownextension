const patterns = [
    "https://www.reddit.com/*",
    "https://www.youtube.com/*",
];

function slowdown(requestDetails) {
      return new Promise((resolve, reject) => {
                 setTimeout(resolve, 4000);
            }
          );
}

browser.webRequest.onBeforeRequest.addListener(
  slowdown,
  {urls: patterns},
  ["blocking"]
);
