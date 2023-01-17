import MainComent from "./mainComent/mainComent";
import MainKons from "./mainKons/mainKons";
import MainPluse from "./mainPluse/mainPluse";
import MainSkills from "./mainSkills/mainSkills";
import MainTeam from "./mainTeam/mainTeam";

function Main() {
    return (
      <div className="main">
        <MainPluse/>
        <MainSkills/>
        <MainTeam/>
        <MainKons/>
        <MainComent/>
      </div>
    );
  }
  
  export default Main;