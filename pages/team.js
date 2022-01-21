import styles from "../styles/team.module.css";
import { Team_Cards } from "../components/constants.js";

const Card = (member) => {
    return (
        <div className="card">
        <div className="row no-gutters">
          <div className="col-md-3">
            <img src={member.src} />
          </div>
          <div className="col-md-9">
            <div className="card-body">
              <h5 className="card-title"><b>{member.Name}</b></h5>
              <p className="card-text">{member.Bio}</p>
            </div>
          </div>
        </div>
      </div>
    )
};
  

export default function team() {
    return (
        <>
            <div className={`container text-center py-5 ${styles.TeamHeader}`}>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10">
                        <h1 className={`mb-1 ${styles.TeamHeader__Title}`}>Meet the Team</h1>
                        <hr/>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-12 col-md-8" >
                    <div className="card" >
                        {
                            Team_Cards.map((member) =>
                                <Card 
                                    key={member.Name} 
                                    src={member.src}
                                    Name={member.Name}
                                    Bio={member.Bio}
                                />
                            )
                        }
                    </div>
                </div>
            </div>
            <br/>
        </>
    )
}