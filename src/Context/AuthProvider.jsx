import React, { useRef } from 'react';
import { AuthContext } from './AuthContext';

const AuthProvider = ({ children }) => {



    const targetRef = useRef(null);
    const aboutRef = useRef(null)
    const SkillRef = useRef(null)
    const contactRef = useRef(null)
    const homeRef = useRef(null)

    const goToProjectSection = (value) => {
        if (value?.current) {
            value.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    const value = {
        goToProjectSection,
        targetRef,
        aboutRef,
        SkillRef,
        contactRef,
        homeRef
    }



    return (
        <AuthContext value={value}>
            {
                children
            }
        </AuthContext>
    );
};

export default AuthProvider;