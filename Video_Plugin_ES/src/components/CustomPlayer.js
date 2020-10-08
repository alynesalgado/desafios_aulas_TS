class CustomPlayer {
  constructor(width, height, errorMessage) {
    this.width = width || 320;
    this.height = height || 240;
    this.errorMessage = errorMessage || "Your browser does not support the video tag.";
    this.sources = [];
  };

  setSources(sources) {
    if (sources || sources.length > 0) {
      sources.map(({src, type}) => {
        this.sources.push({src: src, type: type})
      });
    }
  }

  render(playerId) {

    const container = document.getElementById('container');

    const videoPlayer = `
    <section id=${playerId ? playerId : 'videoPlayer'}>
      <h1>Video Player</h1>
      <video width=${this.width} height=${this.height} controls>
        ${this.sources.map(({src, type}) => (
          `<source src=${src} type=${type}>`
        ))}
        ${this.errorMessage}
      </video>
    </section>
    `

    container.innerHTML = videoPlayer;
  }
}

export default CustomPlayer;