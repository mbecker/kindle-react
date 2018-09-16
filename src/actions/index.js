import { volumesRef, updateVolume, highlightsRef, activitiesRef } from "../config/firebase";
import { START_FETCH_VOLUMES, FETCH_VOLUMES, FETCH_HIGHLIGHTS, UPDATE_VOLUMES, START_FETCH_ACTIVITIES, FECTH_ACTIVITES } from "./types";

export const updateVolumeId = (volumeKey, volumeId) => async dispatch => {
    updateVolume(volumeKey, volumeId)
        // .then((value) => {
        //     console.log("actions/index.js - updateVolume: ", value);
        //     dispatch({
        //          type: UPDATE_VOLUMES,
        //          payload: value
        //     });
        // })
        .then(function () {
            console.log("Document successfully updated!");
            dispatch({
                type: UPDATE_VOLUMES,
                payload: {
                    volumeKey: volumeKey,
                    volumeId: volumeId
                }
            });
        })
        .catch(function (error) {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
        });
};

export const fetchVolumes = () => async dispatch => {
    dispatch({
        type: START_FETCH_VOLUMES,
        payload: true
    })
    volumesRef.get().then((querySnapshot) => {
        const payload = querySnapshot.docs.map(function (documentSnapshot) {
            return {
                id: documentSnapshot.id,
                data: documentSnapshot.data()
            }
        });


        dispatch({
            type: FETCH_VOLUMES,
            payload: payload
        });
    });
};

/**
   * @param {String} volumeId
   * @returns {Void} Redux Store
   */
export const fetchVolume = (volumeId) => async dispatch => {
    volumesRef.get().then((querySnapshot) => {
        const payload = querySnapshot.docs.map(function (documentSnapshot) {
            return {
                id: documentSnapshot.id,
                data: documentSnapshot.data()
            }
        });
        dispatch({
            type: FETCH_VOLUMES,
            payload: payload
        });
    });
};

export const fetchHighlights = (volumeId) => async dispatch => {
    highlightsRef(volumeId).get().then((querySnapshot) => {
        const payload = querySnapshot.docs.map(function (documentSnapshot) {
            return documentSnapshot.data();
        });
        dispatch({
            type: FETCH_HIGHLIGHTS,
            payload: payload
        });
    })
};

export const fetchActivites = () => async dispatch => {
    dispatch({
        type: START_FETCH_ACTIVITIES,
        payload: true
    })
    activitiesRef.get().then((querySnapshot) => {
        const payload = querySnapshot.docs.map(function (documentSnapshot) {
            return {
                id: documentSnapshot.id,
                data: documentSnapshot.data()
            }
        });

        let docsPayloed = {};
        docsPayloed['listOfActivities'] = [];
        querySnapshot.docs.forEach(element => {
            docsPayloed[element.id] = element.data();
            docsPayloed['listOfActivities'].push(element.id);
        });
        console.log("docsPayloed: ", docsPayloed);

        dispatch({
            type: FECTH_ACTIVITES,
            payload: docsPayloed
        });
    });
};