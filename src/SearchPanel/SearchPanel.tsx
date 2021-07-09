import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { asyncSetState } from "../store/main.store";
import SearchListPanel from "./SearchListPanel/SearchListPanel";
import styled from "styled-components";

const SearchPanelWrapper = styled.div`
  background-color: black;
  color: white;

  & input {
    height: 3rem;
    width: 10rem;
    border-radius: 30px;
    background-color: darkgrey;
    color: white;
    padding-left: 2rem;
  }
  & button {
    width: 4rem;
    border-radius: 4rem;
    background-color: darkgrey;
  }
  & form {
    padding: 2rem;
    display: flex;
    justify-content: space-around;
  }
`;
const SearchPanel: React.FC<{}> = (props) => {
  const dispatch = useDispatch();
  const query: any = useRef();

  const submitHandler = async (event: any) => {
    event.preventDefault();

    const finalQuery = query.current.value
      .trim()
      .replace(/\s+/g, " ")
      .replace(/\s/g, "+");

    if (finalQuery.length) {
      dispatch(asyncSetState(2, finalQuery));
    }
  };
  return (
    <SearchPanelWrapper>
      <form>
        <input ref={query} placeholder="Search..." type="text" />
        <button onClick={submitHandler}>go</button>
      </form>
      <SearchListPanel />
    </SearchPanelWrapper>
  );
};

export default SearchPanel;
