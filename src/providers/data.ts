// import { createSimpleRestDataProvider } from "@refinedev/rest/simple-rest";
// import { API_URL } from "./constants";
// export const { dataProvider, kyInstance } = createSimpleRestDataProvider({
//   apiURL: API_URL,
// });

import { BaseRecord, DataProvider, GetListParams, GetListResponse } from "@refinedev/core";
import { Subject } from "@/types";

const subjects: Subject[] = [
  {
    id: 1,
    code: "CS101",
    name: "Introduction to Computer Science",
    department: "CS",
    description: "An introduction to programming, algorithms, and computational problem-solving.",
    created_at: "2026-01-15T00:00:00.000Z",
  },
  {
    id: 2,
    code: "MATH201",
    name: "Calculus II",
    department: "Math",
    description: "Applications of integration, sequences, series, and introductory differential equations.",
    created_at: "2026-01-15T00:00:00.000Z",
  },
  {
    id: 3,
    code: "ENG105",
    name: "Academic Writing",
    department: "English",
    description: "Research, composition, and critical writing for university-level academic work.",
    created_at: "2026-01-15T00:00:00.000Z",
  },
];

export const dataProvider: DataProvider = {
  getList: async <TData extends BaseRecord = BaseRecord>({resource}: 
    GetListParams): Promise<GetListResponse<TData>> => {
      if (resource === "subjects") {
        return {data: subjects as unknown as TData[], total: subjects.length};
      }
       
      return {
        data: [], 
        total: 0,  
      } 
    },

    getOne: async () =>{throw new Error('This function is not present in mock') },
    create: async () =>{throw new Error('This function is not present in mock') },
    update: async () =>{throw new Error('This function is not present in mock') },
    deleteOne: async () =>{throw new Error('This function is not present in mock') },

    getApiUrl: () => '',
    
    deleteMany: async () =>{throw new Error('This function is not present in mock') },
    custom: async () =>{throw new Error('This function is not present in mock') },
    getMany: async () =>{throw new Error('This function is not present in mock') },
}