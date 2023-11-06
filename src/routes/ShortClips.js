import YoutubeEmbed from "../components/YoutubeEmbed/YoutubeEmbed";

const ShortClips = () => {
  return (
    <div>
      <YoutubeEmbed
        src={"https://www.youtube.com/embed/ggFKLxAQBbc?si=eXOJ4RrK4axhn-og"}
        title={"The Matrix: Dodge this"}
      />
      <YoutubeEmbed
        src={"https://www.youtube.com/embed/zE7PKRjrid4?si=aWSAlGapoOc1czLQ"}
        title={"Blue Pill or Red Pill - The Matrix"}
      />
      <YoutubeEmbed
        src={"https://www.youtube.com/embed/J4072lFVPw8?si=S-x2B-QsCWpfbu4A"}
        title={"The Chase: Enter the Trinity | The Matrix Reloaded"}
      />
      <YoutubeEmbed
        src={"https://www.youtube.com/embed/Z2eCmhBgsyI?si=nhjBbxbA9BNi0Ipn"}
        title={"Shootout in the lobby | The Matrix"}
      />
    </div>
  );
};

export default ShortClips;
