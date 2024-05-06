import { useEffect } from "react";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";

interface Props {
  data: number;
}
export const IncrementAnimation = ({ data }: Props) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, data, { duration: 1 });

    return () => {
      if (controls) {
        controls.stop();
      }
    };
  }, []);

  return (
    <>
      <motion.span>{rounded}</motion.span>
    </>
  );
};
