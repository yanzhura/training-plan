import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import Dashboard from '../pages/Dashboard';
import Welcome from '../pages/Welcome';
import { getTrainingPlanErrors, getTrainingPlanLoadingStatus, resetTrainingPlanError } from '../store/trainingPlan';
import {
    getShowWelcomePage,
    getUserCurrentWorkout,
    getUserErrors,
    getUserLoadingStatus,
    resetUserError
} from '../store/user';
import {
    getWorkoutByNumber,
    getWorkoutsErrors,
    getWorkoutsLoadingStatus,
    loadWorkout,
    resetWorkoutError
} from '../store/workouts';
import showErrorToast from '../utils/errorToast';
import { LayoutColumn, LayoutWrapper } from '../components/StyledComponents';

const Home = () => {
    const dispatch = useDispatch();

    const userLoadingStatus = useSelector(getUserLoadingStatus());
    const workoutLoadingStatus = useSelector(getWorkoutsLoadingStatus());
    const trainigplanLoadingStatus = useSelector(getTrainingPlanLoadingStatus());

    const userLoadngErrors = useSelector(getUserErrors());
    const workoutLoadingErrors = useSelector(getWorkoutsErrors());
    const trainigplanLoadingErrors = useSelector(getTrainingPlanErrors());

    const userCurrentWorkout = useSelector(getUserCurrentWorkout());
    const workout = useSelector(getWorkoutByNumber(userCurrentWorkout));
    const isWelcomePageOpen = useSelector(getShowWelcomePage());

    useEffect(() => {
        if (userCurrentWorkout) {
            dispatch(loadWorkout(userCurrentWorkout));
        }
    }, [userCurrentWorkout]);

    useEffect(() => {
        if (workoutLoadingErrors) {
            showErrorToast(workoutLoadingErrors);
            dispatch(resetWorkoutError());
        } else if (userLoadngErrors) {
            showErrorToast(userLoadngErrors);
            dispatch(resetUserError());
        } else if (trainigplanLoadingErrors) {
            showErrorToast(trainigplanLoadingErrors);
            dispatch(resetTrainingPlanError());
        }
    }, [trainigplanLoadingErrors, userLoadngErrors, workoutLoadingErrors]);

    const isDataReady = !userLoadingStatus && !workoutLoadingStatus && !trainigplanLoadingStatus && workout;

    return (
        <LayoutWrapper>
            <LayoutColumn>
                {!isDataReady ? <Loader /> : <>{isWelcomePageOpen ? <Welcome /> : <Dashboard />}</>}
            </LayoutColumn>
        </LayoutWrapper>
    );
};

export default Home;