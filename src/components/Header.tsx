import { Stack } from "@mui/material";
import AlarmOnIcon from "@mui/icons-material/AlarmOn";
import TimelapseIcon from "@mui/icons-material/Timelapse";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <Stack
      sx={{
        width: "1120px",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        padding: "38px",
      }}
    >
      <TimelapseIcon
        sx={{
          width: "58px",
          height: "58px",
          color: "#00875F",
        }}
      />

      <NavLink to="/" title="timer">
        <AlarmOnIcon
          sx={{
            ml: "860px",
            width: "38px",
            height: "38px",
            color: "white",
            padding: "2px",
            borderBottom: "3px solid transparent",
            "&:hover": {
              borderBottom: "3px solid  #00875F",
              color: "#00875F",
            },
          }}
        />
      </NavLink>
      <NavLink to="History" title="histórico">
        <ReceiptLongIcon
          sx={{
            width: "35px",
            height: "35px",
            color: "white",
            padding: "2px",
            borderBottom: "3px solid transparent",
            "&:hover": {
              borderBottom: "3px solid  #00875F",
              color: "#00875F",
            },
          }}
        />
      </NavLink>
    </Stack>
  );
}
