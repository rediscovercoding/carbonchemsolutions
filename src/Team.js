import Sandra from "./Sandra.jpg";
import Koustubh from "./Koustubh.jpg";
import Chris from "./Chris.jpg";

export default function Team() {
  return (
    <div className="team" id="teamID">
      <div className="cofounder">
        <img src={Sandra} alt="Sandra" className="cofounderImg"></img>
        <div className="cofounderInfo">
          <p>Sandra Astete Morales</p>
          <p>
            <i>co-founder</i>
          </p>
          <p>Sandra has a background in Mathematics and Data Science</p>
        </div>
      </div>
      <div className="cofounder">
        <img src={Koustubh} alt="Koustubh" className="cofounderImg"></img>
        <div className="cofounderInfo">
          <p>Koustubh Dube</p>
          <p>
            <i>co-founder</i>
          </p>
          <p>Koustubh has a background in Chemistry</p>
        </div>
      </div>
      <div className="cofounder">
        <img src={Chris} alt="Chris" className="cofounderImg"></img>
        <div className="cofounderInfo">
          <p>Chris Bell</p>
          <p>
            <i>co-founder</i>
          </p>
          <p>Chris has a background in Business and Product Management</p>
        </div>
      </div>
    </div>
  );
}
