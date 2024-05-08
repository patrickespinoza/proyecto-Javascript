try {
  const bodyClass = localStorage.getItem("config_body_class");
  const userString = localStorage.getItem("current_user");

  if (bodyClass) {
    document.body.className = bodyClass;

    if (bodyClass.includes("open-dyslexic-article-body")) {
      // Preloading custom font for anticipated use
      const link = document.createElement("link");
      link.as = "font";
      link.rel = "preload";
      crossorigin = "anonymous";
      link.href =
        "https://dev.to/assets/OpenDyslexic-Regular-cf8f24aa1c9b34b36bb160bb1e3eb6f6e6ab6ec3b43ba558afee2c1c202753ca.otf";
      document.head.appendChild(link);
    }
  }
  if (navigator.userAgent === "DEV-Native-ios") {
    document.body.classList.add("dev-ios-native-body");
  }
  if (window.frameElement) {
    // Hide top bar and footer when loaded within iframe
    document.body.classList.add("hidden-shell");
  }
  if (userString && userString.length > 0) {
    const user = JSON.parse(userString);
    const numTags = JSON.parse(user.followed_tags).length;
    if (numTags < 6) {
      document.body.classList.add("user-tags-followed-" + numTags);
    } else {
      document.body.classList.add("user-tags-followed-max");
    }
  }
} catch (e) {
  setTimeout(function () {
    Honeybadger.notify(e);
  }, 1000);
}

// Here we have some scripts we want to get working on before
// waiting for the page to stream in.

// Load the current user's pic as quickly as it's available
var currentUser = localStorage.getItem("current_user");
var navProfilePic = document.getElementById("nav-profile-image");
if (currentUser && navProfilePic) {
  navProfilePic.src = JSON.parse(currentUser).profile_image_90;
}

// Load notifications count as quickly as it's available.
// Not if we're on the notifications page itself
if (window.location.pathname !== "/notifications") {
  var xmlhttp;

  xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == XMLHttpRequest.DONE) {
      var count = xmlhttp.response;
      if (isNaN(count)) {
        document.getElementById("notifications-number").classList.add("hidden");
      } else if (count != "0" && count != undefined && count != "") {
        document.getElementById("notifications-number").innerHTML =
          xmlhttp.response;
        document
          .getElementById("notifications-number")
          .classList.remove("hidden");
      } else {
        document.getElementById("notifications-number").classList.add("hidden");
      }
    }
  };

  xmlhttp.open("GET", "/notifications/counts", true);
  xmlhttp.send();
}

function activateRunkitTags() {
  if (!areAnyRunkitTagsPresent()) return;

  var checkRunkit = setInterval(function () {
    try {
      dynamicallyLoadRunkitLibrary();

      if (typeof RunKit === "undefined") {
        return;
      }

      replaceTagContentsWithRunkitWidget();
      clearInterval(checkRunkit);
    } catch (e) {
      console.error(e);
      clearInterval(checkRunkit);
    }
  }, 200);
}

function isRunkitTagAlreadyActive(runkitTag) {
  return runkitTag.querySelector("iframe") !== null;
}

function areAnyRunkitTagsPresent() {
  var presentRunkitTags = document.getElementsByClassName("runkit-element");

  return presentRunkitTags.length > 0;
}

function replaceTagContentsWithRunkitWidget() {
  var targets = document.getElementsByClassName("runkit-element");
  for (var i = 0; i < targets.length; i++) {
    if (isRunkitTagAlreadyActive(targets[i])) {
      continue;
    }

    var wrapperContent = targets[i].textContent;
    if (/^(<iframe src)/.test(wrapperContent) === false) {
      if (targets[i].children.length > 0) {
        var preamble = targets[i].children[0].textContent;
        var content = targets[i].children[1].textContent;
        targets[i].innerHTML = "";
        var notebook = RunKit.createNotebook({
          element: targets[i],
          source: content,
          preamble: preamble,
        });
      }
    }
  }
}

function dynamicallyLoadRunkitLibrary() {
  if (typeof dynamicallyLoadScript === "undefined") return;

  dynamicallyLoadScript("//embed.runkit.com");
}

activateRunkitTags();

// Listen for resize events and match them to the iframe
window.addEventListener(
  "message",
  function (event) {
    if (event.origin.startsWith("https://platform.twitter.com")) {
      var iframes = document.getElementsByTagName("iframe");
      for (var i = 0; i < iframes.length; i++) {
        if (event.source === iframes[i].contentWindow) {
          // iframes which match the event
          var iframe = iframes[i];
          var data = event.data["twttr.embed"];
          if (
            data &&
            data["method"] === "twttr.private.resize" &&
            data["params"] &&
            data["params"]["0"]
          ) {
            iframe.style.height = data["params"]["0"]["height"] + 0.5 + "px";
            iframe.style.minHeight = data["params"]["0"]["height"] + 0.5 + "px";
            iframe.style.width = data["params"]["0"]["width"] + "px !important";
          }
          break;
        }
      }
    }
  },
  false
);

// Legacy support: We have shifted up how we render tweets, but still need to render
// the old way for old embed. This could eventually be removed.
var videoPreviews = document.getElementsByClassName(
  "ltag__twitter-tweet__media__video-wrapper"
);
[].forEach.call(videoPreviews, function (el) {
  el.onclick = function (e) {
    var divHeight = el.offsetHeight;
    el.style.maxHeight = divHeight + "px";
    el.getElementsByClassName(
      "ltag__twitter-tweet__media--video-preview"
    )[0].style.display = "none";
    el.getElementsByClassName("ltag__twitter-tweet__video")[0].style.display =
      "block";
    el.getElementsByTagName("video")[0].play();
  };
});
var tweets = document.getElementsByClassName("ltag__twitter-tweet__main");
[].forEach.call(tweets, function (tweet) {
  tweet.onclick = function (e) {
    if (e.target.nodeName == "A" || e.target.parentElement.nodeName == "A") {
      return;
    }
    window.open(tweet.dataset.url, "_blank");
  };
});

if (
  document.querySelector(".articletag-marquee") &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches
) {
  // Step 2: Find the first .crayons-article__body element
  var articleBody = document.querySelector(".crayons-article__body");

  if (articleBody) {
    // Step 3: Extract inner text from the article body
    var articleText = articleBody.innerText;

    // Step 4: Create a marquee and add it to the bottom of the page
    var marquee = document.createElement("marquee");
    marquee.textContent = articleText;
    marquee.style.width = "100%";
    marquee.style.position = "fixed";
    marquee.style.bottom = "0";
    marquee.style.backgroundColor = "#ffffff"; // Set background color if needed
    marquee.style.color = "#000000"; // Set text color if needed
    marquee.style.padding = "10px"; // Add some padding for better visibility

    document.body.appendChild(marquee);
  }
}
