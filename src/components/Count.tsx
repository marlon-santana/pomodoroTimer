import { Stack, Typography, Card } from "@mui/material";

export function CardCount() {
  return (
    <Stack>
      <Card
        sx={{
          backgroundColor: "#29292E",
          width: "128px",
          height: "198px",
          display: "flex",
          alignItems: "center",
          justifyContent: " center",
          mb: "57px",
        }}
      >
        <Typography
          sx={{
            fontSize: "128px",
            color: "white",
            fontWeight: 600,
            fontFamily: "Roboto ",
          }}
        >
          0
        </Typography>
      </Card>
    </Stack>
  );
}
