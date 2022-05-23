import styled from "styled-components";
import wallpaper from "../../assets/wallpaper.png"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height:100%;
    min-height:100vh;
    background: url(${wallpaper});
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
`;

export const SectionContainer = styled.section`
    display: flex;
    flex-direction:column;

    margin-top:30px;
    justify-content: center;
    align-items: center;
    height: 80%;
`;