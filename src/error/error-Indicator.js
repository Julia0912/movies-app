import React from "react";

import { Alert, Space } from "antd";
const onClose = (e) => {
  console.log(e, "I was closed.");
};
const ErrorIndicator = () => {
  return (
    <Space
      direction="vertical"
      style={{
        width: "100%",
        alignItems: "center",
      }}
    >
      <Alert
        message="Error"
        description="Everything is broken, what a shame"
        type="error"
        closable
        onClose={onClose}
      />
    </Space>
  );
};
export default ErrorIndicator;
