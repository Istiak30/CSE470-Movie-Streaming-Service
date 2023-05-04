import React from "react";
import { render, screen } from "@testing-library/react";
import configureMockStore from "redux-mock-store";
import Netflix from "../pages/Netflix";
import { BrowserRouter } from "react-router-dom";

const mockStore = configureMockStore();

describe("Netflix", () => {

  beforeEach(() => {
      // eslint-disable-next-line testing-library/no-render-in-setup
      render(
        <BrowserRouter>
          <Netflix />
        </BrowserRouter>
      );
    const store = mockStore({
      netflix: {
        movies: [
          {
            id: 1,
            title: "Movie 1",
            image: "movie1.jpg",
            genre: "Action",
          },
          {
            id: 2,
            title: "Movie 2",
            image: "movie2.jpg",
            genre: "Comedy",
          },
        ],
        genres: ["Action", "Comedy"],
        genresLoaded: true,
      },
    });
  });

  test("renders navbar, hero section, and slider", () => {
    expect(screen.getByTestId("navbar")).toBeInTheDocument();
    expect(screen.getByTestId("hero")).toBeInTheDocument();
    expect(screen.getByTestId("slider")).toBeInTheDocument();
  });
});
