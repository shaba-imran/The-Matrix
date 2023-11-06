import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./ImageCarousel.css";

const ImageCarousel = () => {
  return (
    <Carousel
      autoPlay="true"
      interval={5000}
      centerMode="true"
      centerSlidePercentage={70}
      dynamicHeight="true"
    >
      <div>
        <img src="quote/quote1.jpg" alt="Quote by The Architect" />
        <p className="legend">
          Denial is the most predictable of all human responses - The Architect
          (The Matrix Reloaded)
        </p>
      </div>
      <div>
        <img src="quote/quote2.jpg" alt="Quote by Merovingian" />
        <p className="legend">
          Choice is an illusion created between those with power and those
          without - Merovingian (The Matrix Reloaded)
        </p>
      </div>
      <div>
        <img src="quote/quote3.jpg" alt="Quote by Neo" />
        <p className="legend">
          Choice. The problem is choice - Neo (The Matrix Reloaded)
        </p>
      </div>
      <div>
        <img src="quote/quote4.jpg" alt="Quote by The Oracle" />
        <p className="legend">
          What do all men with power want? More power - The Oracle (The Matrix
          Reloaded)
        </p>
      </div>
      <div>
        <img src="quote/quote5.jpg" alt="Quote by Mouse" />
        <p className="legend">
          To deny our own impulses is to deny the very thing that makes us
          human" - Mouse (The Matrix)
        </p>
      </div>
      <div>
        <img src="quote/quote6.jpg" alt="Quote by The Oracle" />
        <p className="legend">
          What's really going to bake your noodle later on is, would you still
          have broken it if I hadn't said anything? - The Oracle
        </p>
      </div>
      <div>
        <img src="quote/quote7.jpg" alt="Quote by Morpheus" />
        <p className="legend">
          The body cannot live without the mind - Morpheus (The Matrix)
        </p>
      </div>
      <div>
        <img src="quote/quote8.jpg" alt="Quote by Agent Smith" />
        <p className="legend">
          Human beings are a disease. A cancer of this planet - Agent Smith (The
          Matrix)
        </p>
      </div>
      <div>
        <img src="quote/quote9.jpg" alt="Quote by Morpheus" />
        <p className="legend">
          The Matrix is everywhere. It is all around us. Even now in this very
          room - Morpheus (The Matrix)
        </p>
      </div>
      <div>
        <img src="quote/quote10.jpg" alt="Quote by Cypher" />
        <p className="legend">Ignorance is bliss - Cypher (The Matrix)</p>
      </div>
      <div>
        <img src="quote/quote11.jpg" alt="Quote by Morpheus" />
        <p className="legend">
          What you know you can't explain, but you feel it. You've felt it your
          entire life - Morpheus (The Matrix)
        </p>
      </div>
      <div>
        <img src="quote/quote12.jpg" alt="Quote by Trinity" />
        <p className="legend">
          It's the question that drives us, Neo. It's the question that brought
          you here. You know the question, just as I did - Trinity (The Matrix)
        </p>
      </div>
      <div>
        <img src="quote/quote13.jpg" alt="Quote by Morpheus" />
        <p className="legend">
          Do you think that's air you're breathing now? - Morpheus (The Matrix)
        </p>
      </div>
      <div>
        <img src="quote/quote14.jpg" alt="Quote by Agent Smith" />
        <p className="legend">
          Never send a human to do a machine's job - Agent Smith (The Matrix)
        </p>
      </div>
      <div>
        <img src="quote/quote15.jpg" alt="Quote by Morpheus" />
        <p className="legend">
          What was said was for you, and you alone - Morpheus (The Matrix)
        </p>
      </div>
      <div>
        <img src="quote/quote16.jpg" alt="Quote by Morpheus" />
        <p className="legend">
          Remember... all I'm offering is the truth. Nothing more - Morpheus
          (The Matrix)
        </p>
      </div>
      <div>
        <img src="quote/quote17.jpg" alt="Quote by Morpheus" />
        <p className="legend">
          Fate, it seems, is not without a sense of irony - Morpheus (The
          Matrix)
        </p>
      </div>
      <div>
        <img src="quote/quote18.jpg" alt="Quote by Morpheus" />
        <p className="legend">
          You have to let it all go, Neo - fear, doubt, and disbelief. Free your
          mind! - Morpheus (The Matrix)
        </p>
      </div>
      <div>
        <img src="quote/quote19.jpg" alt="Quote by Morpheus" />
        <p className="legend">
          Neo, sooner or later you're going to realize just as I did that
          there's a difference between knowing the path and walking the path -
          Morpheus (The Matrix)
        </p>
      </div>
      <div>
        <img src="quote/quote20.jpg" alt="Quote by Morpheus" />
        <p className="legend">
          I can only show you the door, you're the one that has to walk through
          it - Morpheus (The Matrix)
        </p>
      </div>
      <div>
        <img src="quote/quote21.jpg" alt="Quote by Morpheus" />
        <p className="legend">
          You take the blue pill... the story ends, you wake up in your bed and
          believe whatever you want to believe. You take the red pill... you
          stay in Wonderland, and I show you how deep the rabbit hole goes -
          Morpheus (The Matrix)
        </p>
      </div>
    </Carousel>
  );
};

export default ImageCarousel;
