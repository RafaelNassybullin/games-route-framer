import { motion } from "framer-motion";
import { IData } from "interfaces";

interface ICardProps {
  data: IData;
}

export function Card({ data }: ICardProps) {
  return (
    <motion.div layoutId={data._id} className="wrapper">
      <img src={data.image} alt={data.title} />
    </motion.div>
  );
}
