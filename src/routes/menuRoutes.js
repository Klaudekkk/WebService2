
import { MenuService } from "../services/menuService.js";

export const getOneMenu = async (req, res) => {
    const { params } = req;
    if (!params?.id) return res.json({ data: [] });
    return res.json({ data: await MenuService.read(params.id) });
};

export const getAllMenu = async (req, res) => {
    return res.json({ data: await MenuService.readAll() });
};

export const postMenu = async (req, res) => {
    const { body } = req;

    const { id, name} = body || {};
    console.log("req tu jesss: "+id + name);

    try {
        await MenuService.create(id, name);
        res.status(201);
    } catch (err) {
        res.status(500);
    }

    return res.send();
    console.log("req tu jesss: "+req);
};

export const deleteMenu = async (req, res) => {
    const { params } = req;
    const { id } = params || {};
    await MenuService.delete(id);
    return res.send();
};
