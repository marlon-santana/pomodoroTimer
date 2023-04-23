import { useEffect, useState } from "react";

const getReturnValues = (countDown) => {
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24)).toLocaleString(
    "pt-BR",
    {
      minimumIntegerDigits: 2,
      useGrouping: false,
    }
  );
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  ).toLocaleString("pt-BR", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
  const minutes = Math.floor(
    (countDown % (1000 * 60 * 60)) / (1000 * 60)
  ).toLocaleString("pt-BR", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000).toLocaleString(
    "pt-BR",
    {
      minimumIntegerDigits: 2,
      useGrouping: false,
    }
  );

  return [days, hours, minutes, seconds];
};

const useCountdown = (targetDate) => {
  const countDownDate = new Date(targetDate).getTime();

  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return getReturnValues(countDown);
};

export { useCountdown };
