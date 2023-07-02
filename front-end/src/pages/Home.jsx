import BGV from "../component/Background"
import Welcome from "../component/Welcome"
import Forward from "../component/Forward"

const Home = () => {
    return (
        <div className="background border-l-amber-200">
            <BGV />
            <Welcome />
            <Forward fwdPath={"/p1"} />
            
        </div>
    )
}

export default Home