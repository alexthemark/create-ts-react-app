import { TypedAction, TypedReducer, setWith } from "redoodle";

export type PAGE = "home" | "search" | "products";
export const PAGE = {
  home: "home" as PAGE,
  search: "search" as PAGE,
  products: "products" as PAGE
};

export interface IPageState {
  openPage: PAGE;
}

export const initialPageState = {
  openPage: PAGE.home
};

export const setPage = TypedAction.define("testapp.page.setPage")<PAGE>();

export const pageStateReducer = TypedReducer.builder<IPageState>()
  .withDefaultHandler(() => initialPageState)
  .withHandler(setPage.TYPE, (state, page) => {
    return setWith(state, { openPage: page });
  })
  .build();
