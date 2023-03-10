import { NextApiRequest, NextApiResponse } from "next"
import { controleEditora } from "."

export default (req: NextApiRequest, res: NextApiResponse) => { 
    var cod = req.query.codEditora;
    var nome = controleEditora.getNomeEditora(Number(cod));
    
    
    res.status(200).json({nome})
}