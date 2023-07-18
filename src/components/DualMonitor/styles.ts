import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  color: #ffffff;
  border-radius: 100%;
  background: #000000;

  .monitoring {
    display: flex;
    align-items: center;
    justify-content: center;
    width: inherit;
    height: inherit;
    gap: 5px;
  }

  .info-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .info-separator {
    height: 100%;
    width: 1px;
    border-right: 1px solid rgba(255, 0, 0, 1);
  }

  .info-title {
    display: flex;
    flex-direction: column;
    color: red;
    align-items: center;
    justify-content: center;
    font-size: 1.6em;
    gap: 5px;
    margin-bottom: 10px;

    span {
    }
  }

  .info-label {
    color: white;
    font-size: 0.7em
  }

  .info-container div:nth-child(2) div:nth-child(1) {
    color: #00e5ff;
  }

  .info-container div:nth-child(3) div:nth-child(1) {
    color: #00e5ff;
  }

  .info-data {
    display: flex;
    justify-content: center;
    font-size: 5.7rem;

    .info-icon {
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        margin-right: 1px;
      }
    }

    .data {
      display: flex;
      align-items: baseline;
      min-width: 50px;

      span {
        font-size: 1.8rem;
      }
    }
  }

  .icon-color {
    color: red;
  }
`
