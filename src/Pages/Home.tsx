import { useState } from "react";
import { Button, Stack, Input, Card, Typography } from "@mui/material";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import { CardCount } from "../components/Count";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { ZodStringDef } from "zod";

interface taskProps {
  task: string;
  minutesAmount: number;
}

interface cycleProps {
  id: string;
  task: string;
  minutesAmount: number;
}

export function Home() {
  const { register, handleSubmit, watch, reset } = useForm<taskProps>();
  const [cycle, setCycle] = useState<cycleProps[]>([]);
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null);

  function handleSubmitNewCycle(data: taskProps) {
    const id = String(new Date().getTime());

    const newCycle: cycleProps = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
    };

    setCycle((state) => [...state, newCycle]); // pgando toda lista de ciclos antigos e adicionando o novo ciclo
    setActiveCycleId(newCycle.id);

    reset();
  }

  const activeCycle = cycle.find((cycle) => cycle.id === activeCycleId);

  const task = watch("task");
  const isSubmitDesabled = !task;

  return (
    <Stack
      sx={{
        maxWidth: "648px",
        margin: "0 auto",
        mt: "20px",
      }}
    >
      <form onSubmit={handleSubmit(handleSubmitNewCycle)}>
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
            sx={{
              color: "white",
              padding: "10px",
              "&.MuiInput-root:after": {
                borderBottom: "2px solid #00875F",
              },
            }}
            placeholder=" Nome do seu projeto"
            id="task"
            {...register("task")}
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
                color: "#00875F",
              }}
            >
              +
            </Button>
            <Input
              sx={{
                width: "80px",
                color: "white",
                padding: "10px",
                "&.MuiInput-root:after": {
                  borderBottom: "2px solid #00875F",
                },
              }}
              id="minutesAmount"
              inputProps={{ max: 60 }}
              placeholder="00"
              {...register("minutesAmount", { valueAsNumber: true })}
            />
            <Button
              style={{
                height: "24px",
                padding: 0,
                fontSize: "30px",
                color: "#00875F",
              }}
            >
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
          disabled={isSubmitDesabled}
        >
          <PlayArrowOutlinedIcon
            style={{
              width: "54px",
              height: "54px",
              color: "white",
              opacity: task ? 1 : 0.2,
            }}
          />
          começar
        </Button>
      </form>
    </Stack>
  );
}
