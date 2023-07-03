import Card from "../component/card";
import Backward from "../component/Backward";

export default function P3() {
  return (
    <div className="">
      <Card
        Heading={"Events"}
        Content={" Looking for something exciting to do in your free time? Why not explore the vibrant world of events happening around you? From live music concerts and art exhibitions to food festivals and sports matches, there's always something to suit your interests. Step out, immerse yourself in the atmosphere, and create memorable experiences. Don't miss out on the opportunity to discover new passions and connect with like-minded individuals!"}
        videoPath={"/video31.mp4"}
        css = {{"backgroundImage": "url(/pic1.jpg)", "border": "2px solid black", "margin": "4rem", "width": "50%", "position": "fixed", "left": "8rem", "minHeight": "45%", "padding": "2rem"}}
        routePath={"/event/register"}
        backgroundImage={"/pic10.jpg"}
      />
      <Card
        Heading={"Massive Open Online Courses"}
        Content={
          "Discover a world of knowledge and expand your horizons by venturing into the realm of Massive Open Online Courses (MOOCs) during your free time. Unleash your potential by enrolling in a diverse range of courses covering various subjects, conveniently accessible from anywhere. Embrace the joy of learning and embark on a transformative journey of personal growth through MOOCs today!"
        }
        videoPath={"/video32.mp4"}
        css = {{"backgroundImage": "url(/pic1.jpg)", "border": "2px solid black", "margin": "4rem", "width": "50%", "position": "fixed", "left": "8rem", "minHeight": "45%", "padding": "2rem"}}
        routePath={'/mooc/register'}
        backgroundImage={"/pic11.jpg"}
      />
      <Backward bwdPath={"/p2"} />
      
    </div>
  );
}
