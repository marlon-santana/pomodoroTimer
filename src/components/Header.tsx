import { Stack } from "@mui/material";
import AlarmOnIcon from "@mui/icons-material/AlarmOn";
import TimelapseIcon from "@mui/icons-material/Timelapse";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";

export function Header() {
  return (
    <Stack
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        padding: "48px",
      }}
    >
      <AlarmOnIcon
        sx={{
          width: "48px",
          height: "48px",
          color: "green",
        }}
      />
      <TimelapseIcon
        sx={{
          mr: "-860px",
          width: "48px",
          height: "48px",
          color: "green",
        }}
      />
      <ReceiptLongIcon
        sx={{
          width: "48px",
          height: "48px",
          color: "green",
        }}
      />
    </Stack>
  );
}
