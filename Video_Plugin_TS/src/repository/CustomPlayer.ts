interface SourceProps {
  src: string;
  type: string;
}

class CustomPlayer {
  witdh: number;
  height: number;
  errorMessage: string;
  sources: SourceProps[];

  public constructor(width: number, height: number, errorMessage: string) { 
    this.witdh = width;
    this.height = height;
    this.errorMessage = errorMessage;
    this.sources = [];
  };

  setSources(sources: SourceProps[]) {
    sources.map(({src, type}) => {
      this.sources.push({src: src, type: type})
    });
  }

  render(sectionId: string) {

    const sectionToAppend: HTMLElement | null = document.getElementById(`${sectionId}`);
    // const section = document.createElement('section');
    // section.setAttribute('id', sectionId);

    const videoPlayer = `
      <h1>Video Player</h1>
      <video width=${this.witdh} height=${this.height} controls>
        ${this.sources.map(({src, type}) => (
          `<source src=${src} type=${type}>`
        ))}
        ${this.errorMessage}
      </video>
    `

    if(sectionToAppend !== null){
      sectionToAppend.innerHTML = videoPlayer;
    }

    // section.innerHTML = videoPlayer;
  }
}

export default CustomPlayer;