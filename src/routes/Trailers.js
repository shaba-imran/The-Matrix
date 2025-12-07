import YoutubeEmbed from "../components/YoutubeEmbed/YoutubeEmbed";

const Trailers = () => {
  return (
    <div>
      <YoutubeEmbed
        src={"https://www.youtube.com/embed/4sakBNFBINE"}
        title={"THE MATRIX"}
      />
      <YoutubeEmbed
        src={"https://www.youtube.com/embed/wdCmzHRTTnE"}
        title={"THE MATRIX RELOADED"}
      />
      <YoutubeEmbed
        src={"https://www.youtube.com/embed/04fcZO1-9qI"}
        title={"THE MATRIX REVOLUTIONS"}
      />
      <YoutubeEmbed
        src={"https://www.youtube.com/embed/603Gw9Uucmc"}
        title={"THE MATRIX RESURRECTIONS"}
      />
    </div>
  );
};

export default Trailers;
