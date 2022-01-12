import styles from "../styles/Blog.module.css";
import { Team_Cards } from "../components/constants.js";

const Card = (member) => {
    return (
        <div class="card">
        <div class="row no-gutters">
          <div class="col-md-3">
            <img src={member.src} />
          </div>
          <div class="col-md-9">
            <div class="card-body">
              <h5 class="card-title"><b>{member.Name}</b></h5>
              <p class="card-text">{member.Bio}</p>
            </div>
          </div>
        </div>
      </div>
    )
};

export default function team() {
    return (
        <>
            <div className={`container text-center py-5 ${styles.BlogHeader}`}>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10">
                        <h1 className={`mb-1 ${styles.BlogHeader__Title}`}>Meet the Team</h1>
                        <hr />
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div class="col-12 col-md-8 ">
                    <div class="card">
                        {
                            Team_Cards.map((member) =>
                                <Card
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