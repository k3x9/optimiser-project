import Card from "../component/card";
import Backward from "../component/Backward";
import Forward from "../component/Forward";

export default function P1() {
  
  return (
    <div className="">
      <Card
        Heading={"Movie"}
        Content={" Looking for a fun way to spend your free time? Why not head out to catch a movie! Whether you're in the mood for action-packed adventures, heartwarming romances, or gripping thrillers, the cinema offers a perfect escape. Sit back, relax, and immerse yourself in a world of storytelling and entertainment on the big screen."}
        videoPath={"/video11.mp4"}
        css = {"bg-transparent border-2 border-black m-4 w-[50%] fixed left-8 min-h-[45%] p-2"}
        routePath={'/movie/register'}
      />
      <Card
        Heading={"Food"}
        Content={
          " Looking to satisfy your culinary cravings? Step out and embark on a delectable adventure by trying new food in your free time. Discover hidden gems, indulge in unique flavors, and expand your palate with exciting dining experiences. Don't let your taste buds miss out on the delicious surprises that await you."
        }
        videoPath={"/video12.mp4"}
        css = {"bg-transparent border-2 border-black m-4 w-[50%] fixed bottom-0 right-8 p-2 inline"}
        routePath={'/food/register'}
      />
      <Backward bwdPath={"/"} />
      <Forward fwdPath={"/p2"} />
    </div>
  );
}
