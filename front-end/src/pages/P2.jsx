import Card from "../component/card";
import Backward from "../component/Backward";
import Forward from "../component/Forward";

export default function P2() {
  return (
    <div className="">
      <Card
        Heading={"SightSeeing"}
        Content={" Discover the world around you and indulge in the joy of sightseeing during your free time. Unleash your inner explorer as you venture out to iconic landmarks, immerse yourself in local cultures, and create lasting memories. Whether it's admiring architectural marvels, exploring breathtaking landscapes, or savoring diverse cuisines, every outing promises to be a thrilling adventure for the curious soul."}
        videoPath={"/video21.mp4"}
        css = {{"backgroundImage": "url(/pic1.jpg)", "border": "2px solid black", "margin": "4rem", "width": "50%", "position": "fixed", "left": "8rem", "minHeight": "45%", "padding": "2rem"}}
        registerPath={'/sight-seeing/register'}
        backgroundImage={"/pic6.jpg"}
      />
      <Card
        Heading={"Adventure"}
        Content={
          "Looking to spice up your free time with a thrilling adventure? Look no further! Embark on an exhilarating journey into the great outdoors, where hiking trails lead to hidden wonders, rock faces beg to be conquered, and rivers whisper tales of excitement. Unleash your inner explorer and embrace the call of adventure today!"
        }
        videoPath={"/video22.mp4"}
        css = {{"backgroundImage": "url(/pic1.jpg)", "border": "2px solid black", "margin": "4rem", "width": "50%", "position": "fixed", "left": "8rem", "minHeight": "45%", "padding": "2rem"}}
        registerPath={"/adventure/register"}
        backgroundImage={"/pic8.jpg"}
      />
      <Backward bwdPath={"/p1"} />
      <Forward fwdPath={"/p3"} />
    </div>
  );
}
