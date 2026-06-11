import { useState, useEffect } from 'react';

interface UseWaitingTimeReturn {
  waitingTimeMinutes: number;
  waitingTimeFormatted: string;
  isExceeded: boolean;
}

export function useWaitingTime(createdAt: string, limitMinutes: number | null): UseWaitingTimeReturn {
  const [waitingTimeMinutes, setWaitingTimeMinutes] = useState(0);

  useEffect(() => {
    const updateWaitingTime = () => {
      const createdDate = new Date(createdAt);
      const now = new Date();
      const diffMs = now.getTime() - createdDate.getTime();
      const diffMinutes = Math.floor(diffMs / (1000 * 60));
      setWaitingTimeMinutes(diffMinutes);
    };

    // Atualizar imediatamente
    updateWaitingTime();

    // Atualizar a cada minuto
    const timerId = setInterval(updateWaitingTime, 60000);

    return () => clearInterval(timerId);
  }, [createdAt]);

  const hours = Math.floor(waitingTimeMinutes / 60);
  const minutes = waitingTimeMinutes % 60;
  const waitingTimeFormatted = hours > 0 
    ? `${hours}h ${minutes}min` 
    : `${minutes}min`;

  const isExceeded = limitMinutes !== null && waitingTimeMinutes > limitMinutes;

  return {
    waitingTimeMinutes,
    waitingTimeFormatted,
    isExceeded,
  };
}
