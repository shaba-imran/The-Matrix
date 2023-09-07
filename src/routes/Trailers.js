import YoutubeEmbed from "../components/YoutubeEmbed/YoutubeEmbed";

const Trailers = () => {
  return (
    <div>
      <YoutubeEmbed
        src={"https://www.youtube.com/embed/m8e-FF8MsqU"}
        title={"THE MATRIX"}
      />
      <YoutubeEmbed
        src={"https://www.youtube.com/embed/zsgrsiZoymA"}
        title={"THE MATRIX RELOADED"}
      />
      <YoutubeEmbed
        src={"https://www.youtube.com/embed/hMbexEPAOQI"}
        title={"THE MATRIX REVOLUTIONS"}
      />
      <YoutubeEmbed
        src={"https://www.youtube.com/embed/9ix7TUGVYIo"}
        title={"THE MATRIX RESURRECTIONS"}
      />
    </div>
  );
};

export default Trailers;
