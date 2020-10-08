import CustomPlayer from './components/CustomPlayer';

import './style.css';

const video = new CustomPlayer("");

video.setSources([
  {src: "https://www.youtube.com/watch?v=u1kCtkVR7cE", type: "video/mp4"},
  {src: "movie.ogg", type: "video/ogg"}
]);

video.render();