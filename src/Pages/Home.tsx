import { useEffect, useState } from "react";
import { Button, Stack, Input, Card, Typography } from "@mui/material";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import DoDisturbOnIcon from '@mui/icons-material/DoDisturbOn';
import { CardCount } from "../components/Count";
import { useForm } from "react-hook-form";
import { differenceInSeconds } from "date-fns/fp";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

interface taskProps {
  task: string;
  minutesAmount: number;
}

interface cycleProps {
  id: string;
  task: string;
  minutesAmount: number;
  startDate: Date;
  cycleinterrupetedDate?: Date;
  finishedDate?: Date;
}

export function Home() {
  const { register, handleSubmit, watch, reset } = useForm<taskProps>();
  const [cycle, setCycle] = useState<cycleProps[]>([]);
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null);
  const [amountSeconsPassed, setAmountSeconsPassed] = useState(0);



  const activeCycle = cycle.find((cycle) => cycle.id === activeCycleId);

  function handleSubmitNewCycle(data: taskProps) {
    const id = String(new Date().getTime());

    const newCycle: cycleProps = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    };

    setCycle((state) => [...state, newCycle]); // pegando toda lista de ciclos antigos e adicionando o novo ciclo
    setActiveCycleId(newCycle.id);
    setAmountSeconsPassed(0);

    reset();
  }


  function handleInteruptCycle() {
    setCycle(prop =>
      prop.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return {
            ...cycle, cycleinterrupetedDate: new Date()
          }
        } else {
          return cycle
        }

      }))
    setActiveCycleId(null)

  };


  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0;
  const currentSeconds = activeCycle ? totalSeconds + amountSeconsPassed : 0; // segundo atual, total de segundos menos o que já passou

  const minutesAmount = Math.floor(currentSeconds / 60);
  const secondsAmount = currentSeconds % 60;

  const minutes = String(minutesAmount).padStart(2, "0");
  const seconds = String(secondsAmount).padStart(2, "0");

const stopTimer = (interval) => {
  setAmountSeconsPassed(0)
  clearInterval(interval);
}

  useEffect(() => {
    let interval: number
    if (activeCycle) {
      interval = setInterval(() => {
        const diferenceSeconds = differenceInSeconds(new Date(), activeCycle.startDate)

        if(Math.abs(diferenceSeconds) === totalSeconds) stopTimer(interval);
       

        if(diferenceSeconds > totalSeconds) {
          setCycle((state) =>
            state.map((cycle) => {
              if (cycle.id === activeCycleId) {
                return {
                  ...cycle, finishedDate: new Date()
                }
              } else {
                return cycle
              }
            }
            ))
            stopTimer(interval);
        }else {
          setAmountSeconsPassed(diferenceSeconds)
        }

      }, 1000)
    }
    return () => {
      clearInterval(interval)
    }
  }, [activeCycle, totalSeconds, activeCycleId])




  useEffect(() => {
    if (!activeCycle) return;
    document.title = `${minutes}:${seconds}`
  }, [activeCycle, minutes, seconds])

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
          <CardCount value={minutes[0]} />
          <CardCount value={minutes[1]} />
          <Typography sx={{ fontSize: "128px", color: "white", mb: "50px" }}>
            :
          </Typography>
          <CardCount value={seconds[0]} />
          <CardCount value={seconds[1]} />
        </Stack>

        {activeCycleId ? (
          <Button
            onClick={handleInteruptCycle}
            type="button"
            sx={{
              width: "100%",
              height: "64px",
              backgroundColor: "red",
              color: "#fffff",
              fontWeight: 700,
              mt: "700px,",
            }}
          // disabled={isSubmitDesabled}
          >
            <DoDisturbOnIcon
              style={{
                width: "34px",
                height: "34px",
                color: "#ffffff",
                marginRight: '5px',
                opacity: 0.8,
              }}
            />
            Interromper
          </Button>
        ) : (
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
        )}
      </form>
    </Stack>
  );
}
