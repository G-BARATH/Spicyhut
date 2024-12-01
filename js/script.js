function redirectToZomato() {
    console.log("Redirecting to Zomato...");
    const zomatoLink = "order online/index.html";
    
    if (zomatoLink) {
      console.log("Redirecting to:", zomatoLink);
      window.location.href = zomatoLink;
    } else {
      alert("Zomato link is not available!");
    }
  }
  