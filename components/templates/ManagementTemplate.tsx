import React, { ReactElement } from "react";
import { css } from "@emotion/react";

const hello = css`
  margin-top: 144px;
`;

interface Props {
  appBar: ReactElement;
  navigation: ReactElement;
  mainContent: ReactElement;
}

export const ManagementTemplate: React.FC<Props> = ({
  appBar,
  navigation,
  mainContent,
}) => {
  return (
    <div>
      {appBar}
      <div css={hello}>
        <div>{navigation}</div>
        <div>{mainContent}</div>
      </div>
    </div>
  );
};
