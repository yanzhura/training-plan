import React from 'react';
import { useParams } from 'react-router-dom';
import Workout from '../pages/Workout';
import TrainingPlan from '../pages/TrainingPlan';
import HelpDrawer from '../components/HelpDrawer/HelpDrawer';
import { AboutWorkouts } from '../pages/QuickTour';
import { LayoutColumn, LayoutWrapper } from '../components/StyledComponents';
import { useSelector } from 'react-redux';
import { getUserLoadingStatus } from '../store/user';
import { Spin } from 'antd';

const Workouts = () => {
    const { seqNumber } = useParams();
    const userDataLoadingStatus = useSelector(getUserLoadingStatus());

    return (
        <LayoutWrapper>
            <LayoutColumn>
                {userDataLoadingStatus ? <Spin /> : <>{seqNumber ? <Workout /> : <TrainingPlan />}</>}
                <HelpDrawer>
                    <AboutWorkouts />
                </HelpDrawer>
            </LayoutColumn>
        </LayoutWrapper>
    );
};

export default Workouts;
