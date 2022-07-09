import express from "express";
import { getResult } from "../controllers/warikan.controller.js";

export const warikanRouter = express.Router();

warikanRouter.post("/", (req, res) => getResult(req, res));