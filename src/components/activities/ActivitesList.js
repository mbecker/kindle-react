import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import * as actions from "./../../actions";
import Spinner from "react-spinkit";

class ActivitiesList extends Component {
  constructor(props) {
    super(props);
    const { activities } = this.props;
    console.log("ActivitiesList: ", activities);
    if (Object.keys(activities).length === 0) {
      this.props.fetchActivites();
    }
  }

  state = {};

  renderVolumes() {
    const { activities } = this.props;

    let activityItems = [];

    if(typeof activities.listOfActivities !== "undefined" && activities.listOfActivities.length > 0 ){
        activities.listOfActivities.forEach(element => {
            /* Element 'activity' in state may look as follows
            activityType: "Run"
            createdAt: "September 15, 2018 at 11:17AM"
            distanceMeters: "5444.1"
            elapsedTime: "27 minutes, 31 seconds"
            elapsedTimeInSeconds: "1651"
            linkToActivity: "http://www.strava.com/activities/1842398505"
            name: "Mittagslauf"
            routeMapImageUrl: "https://maps.googleapis.com/maps/api/staticmap?size=400x400&path=weight:3%7Ccolor:0xFC4C02FF%7Cenc:ggepHsdnq@qFu@aAdD_KiOgP%7CMe[%7Ca@uEvRmCn@%7B@jEsCpAwPdc@gE%60AgDnGlIsIdJ%5CzE_CbCtAhTah@xDfDfXo%60@dCDdBqDhCx@jL%7DZ"
            */
           activityItems.push(
            <div key={element} className="col-md-12" style={{textAlign: "center"}}>
                    {activities[element].activityType} - <img src={activities[element].routeMapImageUrl} />
                </div>
            )
            
        });
        return activityItems;
    }
    return (
      <div className="col s10 offset-s1 center-align">
        <h4>No activity exist</h4>
      </div>
    );
  }

  render() {
    const { loading, activities } = this.props;
    console.log("ActivitiesList: ", activities);
    return (
      <div>
        <section className="jumbotron text-center">
          <div className="container">
            <h1 className="jumbotron-heading">Kindle Ebooks</h1>
            <p className="lead text-muted">
              Hopefully most of my Kindle ebooks with their highlights or notes marked.
              The older ones doesn't have so much highlights since I've started to mark paragraphes just a while ago.
              Trying to change that in the next time.
            </p>
          </div>
        </section>
        <div className="album py-5 bg-light">
          <div className="container">
          {loading ? (
                <div className="row">
                <div className="col-md-12" style={{textAlign: "center"}}>
                    <Spinner name="line-scale" fadeIn="none" />
                </div>
                </div>
              ) : (
                this.renderVolumes()
              )}
            
              
            
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ loading, activities }) => {
  return {
    loading,
    activities
  };
};

export default connect(
  mapStateToProps,
  actions
)(ActivitiesList);