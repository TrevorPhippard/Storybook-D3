import React from "react";
import styled from "styled-components";
import classnames from "classnames";

function btnTxtStle(props) {
  if (props.theme.text) {
    return props.theme.text;
  }
}

const Flex_Cont = props => (
  <main className={classnames(props.className)}>
          {props.children}
  </main>
);

export default styled(Flex_Cont)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color:#fff;
`;
