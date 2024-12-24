var posts=["2024/12/24/hello-world/","2024/12/25/s/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };