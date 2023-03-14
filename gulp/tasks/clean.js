import del from "del";
import config from "../config";

export const cleanTask = () => del(config.dest.root);
