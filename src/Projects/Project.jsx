import React, { useContext } from 'react';
import SpotlightCard from './SpotlightCard';
import { AuthContext } from '../Context/AuthContext';

const Project = () => {


    const {targetRef} = useContext(AuthContext)

    return (
        <div ref={targetRef}>
            <SpotlightCard></SpotlightCard>
        </div>
    );
};

export default Project;