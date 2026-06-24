export interface Event {
  id: string;
  title: string;
  summary: string;
  date: string;
  start_time: string;
  end_time: string;
}
export interface GetEventsData {
  getEvents: Event[];
}
export interface searchData {
  search: Event[];
}
export interface ContextData {
  eventData: Event[];
  setEventData: React.Dispatch<React.SetStateAction<Event[]>>;
  loading: boolean;
  searchLoading:Boolean;
  err: string;
  setErr: React.Dispatch<React.SetStateAction<string>>;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  filterData: Event[];
  currentpage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  refetchEvents: () => Promise<any>;
}

export interface ItemData {
  id: number | string;
  title: string;
  summary: string;
  date: string;
  start_time: string;
  end_time: string;
}

export interface CurrentEvent {
  id: string;
  title: string;
  summary: string;
  date: string;
  start_time: string;
  end_time: string;
}
export interface GetData {
  getEvent: CurrentEvent
}

export interface FormType {
  title: string;
  summary: string;
  date: string;
  start_time: string;
  end_time: string;
}
export interface Errors {
  title?: string;
  summary?: string;
  date?: string;
  start_time?: string;
  end_time?: string;
}

export interface GetFormData {
  title: string;
  summary: string;
  date: string;
  start_time: string;
  end_time: string;
}

export interface FormErrors {
  title?: string;
  summary?: string;
  date?: string;
  start_time?: string;
  end_time?: string;
}