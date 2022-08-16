import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: auto;
  margin-right: auto;
  width: 80%;

  justify-content: center;
`;

export const Poster = styled.div`
  img {
    width: 100%;
    max-width: 900px;
    height: auto;
    transition: all .3s ease;
    opacity: 0.6;
    border-radius: 5px;
    &:hover {
      opacity: 1;
    }
  }
`;

export const DetailMovie = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;

  strong {
    color: #fff;
    font-size: 35px;
    font-weight: bold;
  }

  div {
    span {
      color: #fff;
      font-size: 35px;
      margin-left: 20px;
    }
  }

  p {
    color: #fff;
    font-size: 16px;
  }
`;
