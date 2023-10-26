import Intropg1 from "./Intropg1";
import About from "./About";
import Navbar1 from "./Navbar";
import { proxy } from "valtio";
import NewsItem from "./NewsItem";
import News from "./Newspg";

const state = proxy({
    intro: true,
    pg1: false,
    about: false,
    pg2: false,
    pg3: false,
    news: true,
});

export { Intropg1, About, Navbar1, NewsItem, News,
    state };
