"use client";

import { Component } from "react";

export class Navbar extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: '<!--# include virtual="/fragments/navbar/" -->',
        }}
      />
    );
  }
}
