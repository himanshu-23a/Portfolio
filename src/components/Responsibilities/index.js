
import React from 'react'
import styled from 'styled-components'
import ExperienceCard from '../Cards/ExperienceCard';
import { responsibilities } from '../../data/constants';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 10px;
    @media (max-width: 960px) {
        padding: 0px;
    }
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 10px 0px 40px 0px;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

const Title = styled.div`
font-size: 42px;
text-align: center;
margin-bottom: 20px;
font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;



const index = () => {
    return (
        <Container id="responsibilities">
            <Wrapper>
                <Title>Responsibility</Title>
                {responsibilities.map((responsibility, index) => (
                    <ExperienceCard experience={responsibility} />
                ))}
            </Wrapper>
        </Container>
    )
}

export default index