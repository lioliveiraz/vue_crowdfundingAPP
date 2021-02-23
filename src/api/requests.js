import http from './http.services';

export const fetchData = async () => {
    const response = await http.get("projects");
    return response.data;

};

export const fetchDataPerID = async (id) => {
    const response = await http.get(`projects?id=${id}`);
    return response.data;

};

export const changeDonatedValue = async (id, projectObj) => {
    const response = await http.put(`projects/${id}`, projectObj);
    return response;

};

export const createProject = async (projectObj) => {
    const response = await http.post(`projects`, projectObj);
    return response;

}; 