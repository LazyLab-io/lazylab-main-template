"use client";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";

interface RegFormTextInput {
  labelValue: string;
  textFieldId: string;
  helperTextValue?: string;
}

function RegFormInput({
  labelValue,
  textFieldId,
  helperTextValue = "",
}: RegFormTextInput) {
  return (
    <TextField
      required
      fullWidth
      id={textFieldId}
      label={labelValue}
      variant="outlined"
      helperText={helperTextValue}
    />
  );
}

function ButtonContained() {
  return (
    <Button
      variant="contained"
      onClick={() => {
        alert("clicked");
      }}
    >
      Register
    </Button>
  );
}

export default function HomePage() {
  return (
    <Container
      maxWidth="sm"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <form>
        <Stack spacing={2}>
          <label>Registration Form</label>
          <RegFormInput labelValue={"Email"} textFieldId={"email"} />
          <RegFormInput labelValue={"First Name"} textFieldId={"firstName"} />
          <RegFormInput labelValue={"Last Name"} textFieldId={"lastName"} />
          <RegFormInput labelValue={"Password"} textFieldId={"password"} />
          <RegFormInput
            labelValue={"Password"}
            textFieldId={"passwordRepeat"}
          />
          <ButtonContained />
        </Stack>
      </form>
    </Container>
  );
}
