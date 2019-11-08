import React from "react";
import { connect } from "react-redux";
import { fetchSmurfs} from "../actions";

function SmurfList(props) {

  return (
    <>
      <button onClick={() => props.dispatch(fetchSmurfs())}>Display Smurfs</button>

      {props.isFetching && <div>CHILL DUDE UR smurfS ARE COMING...</div>}
      {props.error && <div>{props.error.message}</div>}
      <ul className="smurfs">
        {props.smurfs.map(smurf => (
            <div key={smurf.id} className = "smurf">
            <h3>
            {smurf.name}
            </h3>
            <p>Age: {smurf.age}</p>
            <p>Height: {smurf.height}</p>
            </div>
        ))}
      </ul>
    </>
  );
}

export default connect(state => {
  console.log("mapStateToProps.STATE", state);
  return state;})(SmurfList);