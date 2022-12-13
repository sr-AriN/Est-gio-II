import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background-color: #272727;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  height: 25%;
  background-color: #181818;
`;

export const Logo = styled.img`
  padding-top: 40px;
  /* padding-bottom: 20px; */
  height: 70%;
`;

export const ProMin = styled.img`
  height: 70%;
`;

export const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 10px;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #393939;
  width: 350px;
  height: 15vh;
  gap: 10px;
  border-radius: 5px;
`;


export const Title = styled.h2`
  font-size: 1,5em;
`;

export const subTitle = styled.h3`
  font-size: 1em;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  background-color: #181818;
`;