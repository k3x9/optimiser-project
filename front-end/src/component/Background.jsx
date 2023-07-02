import "./bg.css"
const BGV = () => {
    return (
      <div className="flex justify-center w-screen h-screen">
          <video autoPlay loop muted className="fixed place-self-center brightness-75 ">
              <source src="/video01.mp4" type="video/mp4" />
          </video>
      </div>
    );
  };
  
  export default BGV