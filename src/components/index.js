import About from "./About";
import { proxy } from "valtio";
import NewsItem from "./NewsItem";
import News from "./Newspg";
import Trends from "./Trends";

const state = proxy({
    intro: true,
    pg1: false,
    about: false,
    pg2: false,
    pg3: false,
    news: true,
});

export {About, NewsItem, News,Trends,
    state };
