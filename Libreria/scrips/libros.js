document.querySelectorAll('.show-video').forEach(button => {
    button.addEventListener('click', function () {
      const article = this.closest('article');
      const videoContainer = article.querySelector('.video-container');
      const video = videoContainer.querySelector('video');
  
      const isVisible = videoContainer.style.display === 'block';
  
     
      document.querySelectorAll('.video-container').forEach(container => {
        const otherVideo = container.querySelector('video');
        if (container !== videoContainer) {
          otherVideo.pause();
          otherVideo.currentTime = 0;
          container.style.display = 'none';
  
          
          const otherButton = container.closest('article').querySelector('.show-video');
          if (otherButton) otherButton.textContent = '+';
        }
      });
  
      if (!isVisible) {
        videoContainer.style.display = 'block';
        video.currentTime = 0;
        video.play();
        this.textContent = '−'; 
      } else {
        video.pause();
        video.currentTime = 0;
        videoContainer.style.display = 'none';
        this.textContent = '+'; 
      }
    });
  });
  