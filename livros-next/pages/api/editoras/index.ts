import ControleEditora from "@/classes/controle/ControleEditora";
import { get } from "http";
import { NextApiRequest, NextApiResponse } from "next";

export const controleEditora = new ControleEditora;

export default (req: NextApiRequest, res: NextApiResponse) => { 
    var editoras = controleEditora.getEditoras();
    res.status(200).json({editoras})
}

