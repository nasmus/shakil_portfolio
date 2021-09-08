const baseUrl = "http://127.0.0.1:8000/api";
import axios from 'axios';
const person = {};


person.personDetailsSave = async(data) => {
    const urlSave = baseUrl+"/create"
    const res = await axios.post(urlSave,data)
    .then(response => {
        return response.data;
    })
    .catch( err => {
        return err;
    })
    return res;
}
person.sendMessage = async(data) => {
    const urlContact = baseUrl+"/contactpage"
    const res = await axios.post(urlContact, data)
    .then(response => {
        return response.data;
    })
    .catch(err => {
        return err
    })
    return res;
}
person.educationSave = async(data) => {
    const urlEdu = baseUrl+"/education"
    const res = await axios.post(urlEdu, data)
    .then(response => {
        return response.data;
    })
    .catch(err => {
        return err
    })
    return res;
}
person.saveSkils = async(data) => {
    const urlskils = baseUrl+"/skills"
    const res = await axios.post(urlskils, data)
    .then(response => {
        return response.data
    })
    .catch(err => {
        return err
    })
    return res;
} 
person.saveportfolio = async(data) => {
    const urlportfolio = baseUrl+"/portfolio"
    const res = await axios.post(urlportfolio, data)
    .then(response => {
        return response.data
    })
    .catch(err => {
        return err
    })
    return res;
}

person.showBody = async () => {
    const urlBody = baseUrl+"/show";
    const res = await axios.get(urlBody)
    .then(response => {
        return response.data;
    })
    .catch(err => {
        return err;
    })
    return res;
}
person.skillShow = async() => {
    const urlskills = baseUrl+"/skills";
    const res = await axios.get(urlskills)
    .then(response => {
        return response.data
    })
    .catch(err =>{
        return err
    })
    return res
}
person.eduShow = async() => {
    const urledu = baseUrl+"/education";
    const res = await axios.get(urledu)
    .then(response =>{
        return response.data
    })
    .catch(err => {
        return err
    })
    return res;
}
person.portfolioShow = async() => {
    const urlPortfolioSave = baseUrl+"/portfolioShow";
    const res = await axios.get(urlPortfolioSave)
    .then((response) => {
        return response.data
    })
    .catch(err => {
        return err
    })
    return res;
}

person.portfolioDetailsShow = async (id) => {
    const urlPortfolioDetails = baseUrl+"/PortfolioDetails/"+id
    const res = await axios.get(urlPortfolioDetails)
    .then(response => {
        return response.data
    })
    .catch(err => {
        return err
    })
    return res;
}

export default person;

