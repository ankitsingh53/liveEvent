import { createContext, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Product from "./Product";
import CreateEvent from "./CreateEvent";
import Update from "./Update";
import ProductDetails from "./ProductDetails";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLazyQuery, useQuery } from "@apollo/client/react";
import {GET_ALL_EVENTS} from '../apollo/graphql/queries/evenQueries'
import {GET_SEARCH_EVENT} from '../apollo/graphql/queries/evenQueries'
import type { Event, GetEventsData, searchData, ContextData }  from "../types/eventTypes";

export const NameContext = createContext<ContextData | null>(null);


const Home = () => {
  const [eventData, setEventData] = useState<Event[]>([]);
  const [err, setErr] = useState<string>("");
  const [currentpage, setCurrentPage] = useState<number>(1);
  const [search, setSearch] = useState<string>("");
  const [debounceSearch, setDebouncedSearch] = useState("");

  const { data, loading, error, refetch } =
    useQuery<GetEventsData>(GET_ALL_EVENTS);

 const [searchEvent, {data:searchData, loading:searchLoading}] = useLazyQuery<searchData>(GET_SEARCH_EVENT);
   
console.log(searchData)
  useEffect(() => {
    if (error) {
      setErr(error.message);
    }
  }, [error]);

  useEffect(() => {
    if (data?.getEvents) {
      setEventData(data.getEvents);
    }
  }, [data]);

  useEffect(()=>{
    if(!search.trim())
        return;

    const timer = setTimeout(()=>{
        setDebouncedSearch(search.trim())
    }, 1000)
    return ()=>clearTimeout(timer);
  }, [search]);

  useEffect(()=>{
    if(!debounceSearch)
        return;
    if(debounceSearch.length<2)
        return;
    searchEvent({
            variables:{
                word: debounceSearch
            }
        })
  }, [debounceSearch, searchEvent])

  const filterData = search.trim() ? searchData?.search || [] : eventData || []


  return (
    <NameContext.Provider
      value={{
        eventData,
        setEventData,
        loading,
        searchLoading,
        err,
        setErr,
        search,
        setSearch,
        filterData,
        currentpage,
        setCurrentPage,
        refetchEvents: refetch,
      }}
    >
      <ToastContainer />
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/create" element={<CreateEvent />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/productdetails/:id" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </NameContext.Provider>
  );
};

export default Home;