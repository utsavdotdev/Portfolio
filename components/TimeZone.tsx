"use client";
import { useEffect, useState } from "react";
import { Globe } from "@/components/Globe";

function TimeZone() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [timezone, setTimezone] = useState("");
  const [gmtOffset, setGmtOffset] = useState("");

  useEffect(() => {
    // Update time every second
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Get timezone and GMT offset
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setTimezone(tz);

    // Calculate GMT offset
    const offset = new Date().getTimezoneOffset();
    const hours = Math.floor(Math.abs(offset) / 60);
    const minutes = Math.abs(offset) % 60;
    const sign = offset <= 0 ? "+" : "-";
    const formattedOffset = `GMT${sign}${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
    setGmtOffset(formattedOffset);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <>
      <div className="relative z-10 px-6 md:px-8 py-6 h-full flex font-pops">
        {/* Left Side - Time Info */}
        <div className="flex-1 flex flex-col justify-between pr-4">
          {/* Header */}
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-black dark:bg-white rounded-full animate-pulse"></div>
            <span className="text-xs font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wide">
              Live Time
            </span>
          </div>

          {/* Time Display */}
          <div className="space-y-2">
            <div className="text-4xl font-bold text-black dark:text-white font-mono tracking-tight transition-colors duration-200">
              {formatTime(currentTime)}
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-200">
              {formatDate(currentTime)}
            </div>
          </div>

          {/* Timezone Info */}
          <div className="space-y-1">
            <div className="text-lg font-semibold text-black dark:text-white transition-colors duration-200">
              {gmtOffset}
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400 transition-colors duration-200">
              {timezone.replace(/_/g, " ").split("/").pop()}
            </div>
          </div>
        </div>

        <div className="pointer-events-none">
          <div className="absolute bottom-0 right-0 z-10 overflow-hidden w-[350px] h-[350px] rounded-tl-full">
            <Globe className="w-[450px] h-[450px] translate-x-1/2 translate-y-1/4  md:translate-x-1/6 md:translate-y-1/6" />
          </div>
        </div>
      </div>
    </>
  );
}

export default TimeZone;
