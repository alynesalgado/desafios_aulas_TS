import CustomPlayer from './repository/CustomPlayer';

const video: CustomPlayer = new CustomPlayer(320, 240, "Ola");

video.setSources([{src: 'teste', type:"mp4"},]);

video.render("teste");
