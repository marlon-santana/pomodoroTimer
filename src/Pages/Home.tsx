import { Button, Stack, Input, Card, Typography } from "@mui/material";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import { CardCount } from "../components/Count";

export function Home() {
  return (
    <Stack
      sx={{
        maxWidth: "648px",
        margin: "0 auto",
        mt: "20px",
      }}
    >
      <form>
        <Stack
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            mb: "57px",
          }}
        >
          <label
            style={{ color: "white", fontWeight: 600, flex: 1 }}
            htmlFor="task"
          >
            Vou trabalhar em
          </label>
          <Input
            sx={{ color: "white", padding: "10px" }}
            placeholder=" Nome do seu projeto"
            id="task"
          />

          <label
            style={{ color: "white", fontWeight: 600 }}
            htmlFor="minutesAmount"
          >
            durante
          </label>
          <Stack
            style={{
              width: "180px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              style={{
                height: "24px",
                padding: 0,
                fontSize: "24px",
                "&:hover": {},
              }}
            >
              +
            </Button>
            <Input
              style={{ width: "40px", color: "white", padding: "10px" }}
              id="minutesAmount"
              placeholder="00"
            />
            <Button style={{ height: "24px", padding: 0, fontSize: "24px" }}>
              -
            </Button>
          </Stack>

          <span style={{ color: "white", fontWeight: 600 }}>minutos</span>
        </Stack>
        <Stack
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <CardCount />
          <CardCount />
          <Typography sx={{ fontSize: "128px", color: "white", mb: "50px" }}>
            :
          </Typography>
          <CardCount />
          <CardCount />
        </Stack>
        <Button
          type="submit"
          sx={{
            width: "100%",
            height: "64px",
            backgroundColor: "#00875F",
            color: "white",
            mt: "700px,",
          }}
        >
          <PlayArrowOutlinedIcon
            style={{
              width: "54px",
              height: "54px",
              color: "white",
            }}
          />
          começar
        </Button>
      </form>
    </Stack>
  );
}
