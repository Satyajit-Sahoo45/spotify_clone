"use client";

import Box from "@/components/Box";
import { CircleLoader } from "react-spinners";

const Loading = () => {
  return (
    <Box className="h-full flex items-center justify-center">
      <CircleLoader color="#22c55e" size={50} />
    </Box>
  );
};

export default Loading;
