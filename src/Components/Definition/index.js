import React from "react";
import styled from "styled-components";

const DefinitionWrapper = styled.div`
  margin: 0 50px;
`;

const Defs = styled.div`
  background: #5de9ff;
  border-radius: 10px;
  margin-top: 20px;
  padding: 1px;
  padding-left: 10px;
  padding-right: 10px;
  width: 100%;
  opacity: 1;
  animation: sliding 1s;

  @keyframes sliding {
    from {
      opacity: 0;
      width: 0%;
    }
    to {
      opacity: 1;
      width: 100%;
    }
  }
`;

const Exp = styled.div`
  background: #5de9ff;
  border-radius: 10px;
  margin-top: 20px;
  padding: 1px;
  padding-left: 10px;
  padding-right: 10px;
  width: 100%;
  opacity: 1;
  animation: sliding 1.5s;
`;

const Syns = styled.div`
  background: #5de9ff;
  border-radius: 10px;
  margin-top: 20px;
  padding: 1px;
  padding-left: 10px;
  padding-right: 10px;
  width: 100%;
  opacity: 1;
  animation: sliding 2s;
`;

const Definition = ({ defs }) => {
  let theKey = 0;

  return (
    <DefinitionWrapper>
      <Defs>
        <h4>Definitions :</h4>
        <ul>
          {defs &&
            defs.map((sense) => <li key={theKey++}>{sense.definitions}</li>)}
        </ul>
      </Defs>

      <Exp>
        <h4>Examples :</h4>
        <ul>
          {defs &&
            defs.map(
              (sense) =>
                sense.examples !== undefined && (
                  <li key={theKey++}>{sense.examples[0].text}</li>
                )
            )}
        </ul>
      </Exp>

      <Syns>
        <h4>Synonyms :</h4>
        <ul>
          {defs &&
            defs.map(
              (sense) =>
                sense.synonyms !== undefined &&
                sense.synonyms.map((syn) => <li key={theKey++}>{syn.text}</li>)
            )}
        </ul>
      </Syns>
    </DefinitionWrapper>
  );
};

export default Definition;
