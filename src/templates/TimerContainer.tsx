import { Stack } from "@mui/material";

type Props = {
  children: React.ReactNode;
};

export function TimerContainer({ children }: Props) {
  return (
    <Stack
      sx={{
        height: "600px",
        width: "1120px",
        margin: "0 auto",
        mt: "80px",
        backgroundColor: "#202024",
      }}
    >
      {children}
    </Stack>
  );
}
