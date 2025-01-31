import React from "react";
import NavigationMenu from "../components/NavigationMenu.jsx";
import LoginWrapper from "../components/LoginWrapper.jsx";
import Container from "../components/Container";
import MainLoginImage from "../components/MainLoginImage.jsx";

const LoginPage = () => {
    return <div>
        <NavigationMenu/>
        <Container>
            <div className="flex gap-5 max-md:flex-col">
                <MainLoginImage />
                <LoginWrapper />
            </div>
        </Container>
    </div>;
};

export default LoginPage;
