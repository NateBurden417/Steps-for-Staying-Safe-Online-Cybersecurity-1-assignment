if (/Android|webOS|iPhone|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini|Mobile|Internet Explorer/i.test(navigator.userAgent)) {
  location.href = '/browsernotsupported.html';
  console.log("Your browser isn't allowed in this website.")
}
