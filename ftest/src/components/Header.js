import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import goBackIcon from "../images/goBackIcon";

const Header = () => {
    const navigate = useNavigate();
    const path = window.location.pathname;
};

return (
    <Wrapper>
        <img src={goBackIcon}></img>
    </Wrapper>
);
