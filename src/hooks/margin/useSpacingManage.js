import { useContext } from "react";
import { MarginContext } from "../../context/MarginContext"

export const useSpacingManage = () => useContext(MarginContext);