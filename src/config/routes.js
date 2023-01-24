import FindJournals from "../pages/FindJournals/FindJournals";
import Journals from "../pages/Journals/Journals";
import { Paths } from "../routes/Paths";

export const routes = [
  {
    path: Paths.HOME_PAGE,
    component: FindJournals,
  },
  {
    path: Paths.JOURNALS_PAGE,
    component: Journals,
  },
];
