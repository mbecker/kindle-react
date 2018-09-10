import { volumesRef, volumeRefSet, highlightsRef } from "../config/firebase";
import { START_FETCH_VOLUMES, FETCH_VOLUMES, FETCH_HIGHLIGHTS, UPDATE_VOLUMES } from "./types";

export const updateVolumeId = (volumeKey, volumeId) => async dispatch => {
    volumeRefSet(volumeKey, volumeId).then((value) => {
        console.log("actions/index.js - updateVolume: ", value);
        dispatch({
             type: UPDATE_VOLUMES,
             payload: value
        });
    })
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

