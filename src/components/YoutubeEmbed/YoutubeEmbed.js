import "./YoutubeEmbed.css";

const YoutubeEmbed = ({ src, title }) => {
  return (
    <div className="iframeWrapper">
      <iframe
        src={src}
        height={400}
        width={650}
        frameBorder="1"
        allowFullScreen
        title={title}
      />
    </div>
  );
};

export default YoutubeEmbed;
