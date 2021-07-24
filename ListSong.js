import { v4 as uuidv4 } from "uuid";
import MehradJam from "./Songs/MehradJam-Didi.mp3";

import CallMeNow from "./Songs/CallMeNow.mp3";
import AydaSonDurak from "./Songs/AydaSonDurak.mp3";
import RaghebShalat from "./Songs/RaghebShalat.mp3";
const ListSong = [
  {
    name: "Didi",
    cover:
      "https://apmusic.ir/wp-content/uploads/2020/03/music-video-mehraad-jam-badet.jpg",
    artist: "mehrad jam",
    audio: [MehradJam],
    color: ["#205950", "#2ab3bf"],
    id: uuidv4(),
    active: true,
  },
  {
    name: "2ja",
    cover:
      "https://cdn-tehran.wisgoon.com/dlir-s3/500x462_1574612109680659.jpeg",
    artist: "Ho3ein",
    audio: [CallMeNow],
    color: ["#000", "#fff"],
    id: uuidv4(),
    active: false,
  },
  {
    name: "travelbag",
    cover:
      "https://chillhop.com/wp-content/uploads/2021/05/1245c0271290a3196328c0cf4aaa910cd873dfe7-1024x1024.jpg",
    artist: "mommy, Sleepy Fish",
    audio: "https://mp3.chillhop.com/serve.php/?mp3=9363",
    color: ["#BA4A46", "#FDF0DD"],
    id: uuidv4(),
    active: false,
  },
  {
    name: "Lagoons",
    cover:
      "https://chillhop.com/wp-content/uploads/2021/05/2473c60e471fe9b40e246bf7711c87d3d6ea69a7-1024x1024.jpg",
    artist: "mehrad jam",
    audio: "https://chillhop.com/serve.php/?mp3=8266 ",
    color: ["#205950", "#2ab3bf"],
    id: uuidv4(),
    active: false,
  },
  {
    name: "call me now",
    cover:
      "https://www.androidha.com/wp-content/uploads/2014/11/Music-Sensor.jpg",
    artist: "CallMeNow",
    audio: [CallMeNow],
    color: ["#205950", "#2ab3bf"],
    id: uuidv4(),
    active: false,
  },
  {
    name: "Son Durak",
    cover: "https://i.scdn.co/image/e49bcf144383d7f48fb5a6c7fdbdad8c649c9a57",
    artist: "Ayda",
    audio: [AydaSonDurak],
    color: ["#205950", "#2ab3bf"],
    id: uuidv4(),
    active: false,
  },
  {
    name: "Son Durak",
    cover: "https://i.scdn.co/image/e49bcf144383d7f48fb5a6c7fdbdad8c649c9a57",
    artist: "Ayda",
    audio: [AydaSonDurak],
    color: ["#205950", "#2ab3bf"],
    id: uuidv4(),
    active: false,
  },
  {
    name: "Shalat",
    cover:
      "https://nex1music.ir/upload/2021-01-23/ragheb-avareh-2021-01-23-19-01-13.jpg",
    artist: "Ragheb",
    audio: [RaghebShalat],
    color: ["#205950", "#2ab3bf"],
    id: uuidv4(),
    active: false,
  },
];
export default ListSong;
