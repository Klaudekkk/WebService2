// src/services/Menu.js

import {
    getAllMenu,
    getOneMenu,
    deleteMenu,
    createMenu,
} from "../models/menu.js";

export const MenuService = {
    read: async (id) => (await getOneMenu({ where: { id } })) || null,
    readAll: async () => (await getAllMenu()) || [],
    create: async (id, name, data) =>
        await createMenu({
            id,
            name
        }),
    delete: async (id) => await deleteMenu({ where: { id } }),
};