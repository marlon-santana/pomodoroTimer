import { Stack } from "@mui/material";

type Props = {
  children: React.ReactNode;
};

export function TimerContainer({ children }: Props) {
  return (
    <Stack
      sx={{
        height: "744px",
        width: "1120px",
        margin: " 80px 160px",
        backgroundColor: "#202024",
      }}
    >
      {children}
    </Stack>
  );
}
