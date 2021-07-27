import { useContext } from "react";
import { NotasContext } from "../context/NotasContext";

function useNotas() {
    const context = useContext(NotasContext);
    return context;
}

export default useNotas;