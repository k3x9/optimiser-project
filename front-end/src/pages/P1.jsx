import Card from "../component/card";
import Backward from "../component/Backward";
import Forward from "../component/Forward";

export default function P1() {
  
  return (
    <div className=" ">
      <Card
        Heading={"MOVIE"}
        Content={"Looking for a fun way to spend your free time? Why not head out to catch a movie! Whether you're in the mood for action-packed adventures, heartwarming romances, or gripping thrillers, the cinema offers a perfect escape. Sit back, relax, and immerse yourself in a world of storytelling and entertainment on the big screen."}
        videoPath={"/video11.mp4"}
        css={{"backgroundColor": "black", "border": "2px solid black", "margin": "4rem", "width": "50%", "position": "fixed", "left": "8rem", "minHeight": "45%", "padding": "2rem"}}
        registerPath={'/movie/register'}
        searchPath={'/movie/search'}
        backgroundImage={"/pic2.jpg"}
      />
      <Card
        Heading={"FOOD"}
        Content={
          " Looking to satisfy your culinary cravings? Step out and embark on a delectable adventure by trying new food in your free time. Discover hidden gems, indulge in unique flavors, and expand your palate with exciting dining experiences. Don't let your taste buds miss out on the delicious surprises that await you."
        }
        videoPath={"/video12.mp4"}
        css = {{"backgroundImage": "url(/pic1.jpg)", "border": "2px solid black", "margin": "4rem", "width": "50%", "position": "fixed", "left": "8rem", "minHeight": "45%", "padding": "2rem"}}
        registerPath={'/food/register'}
        searchPath={'/food/search'}
        backgroundImage={"/pic7.jpg"}
      />
      <Backward bwdPath={"/"} />
      <Forward fwdPath={"/p2"} />
    </div>
  );
}
