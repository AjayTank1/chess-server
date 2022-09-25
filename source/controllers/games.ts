import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';

const saveGame = async (req: Request, res: Response, next: NextFunction) => {
	var fs = require('fs');
 
	console.log(req.body);
	fs.writeFile('./db/game.json', JSON.stringify(req.body), function (err : any) {
	  if (err) throw err;
	  console.log('File is created successfully.');
	});
	return res.status(200).json({
        message: "done"
    });
}

// const getGame = async (req: Request, res: Response, next: NextFunction) => {
//     var fs = require('fs');
//     let ans = [];
//     try {
//         const files = await fs.promises.readdir('db');
//         for(let file of files) {
//             console.log(file);
//             const data = await fs.promises.readFile(`./db/${file}`, 'utf8');
//             ans.push(data);
//         }
//         return res.status(200).json(ans);
//     } catch (err) {
//         console.error('Error occurred while reading directory!', err);
//     }
// }

const getGame = async (req: Request, res: Response, next: NextFunction) => {
    var fs = require('fs');
    try {
        const data = await fs.promises.readFile('./db/game.json', 'utf8');
        return res.status(200).json({data});
    } catch (err) {
        console.error('Error occurred while reading directory!', err);
        return res.status(200).json({data: ''});
    }
}

export default { saveGame, getGame };