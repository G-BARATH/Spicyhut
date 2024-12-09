function redirectToZomato() {
    console.log("Redirecting to Zomato...");
    const zomatoLink = "order/order.html";
    
    if (zomatoLink) {
      console.log("Redirecting to:", zomatoLink);
      window.location.href = zomatoLink;
    } else {
      alert("Zomato link is not available!");
    }
  }
  