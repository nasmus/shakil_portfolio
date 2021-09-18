import axios from 'axios';
const person = {};


person.personDetailsSave = async(data) => {
    const urlSave = "https://nasmus.xyz/api"+"/create"
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
    const urlContact = "https://nasmus.xyz/api"+"/contactpage"
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
    const urlEdu = "https://nasmus.xyz/api"+"/education"
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
    const urlskils = "https://nasmus.xyz/api"+"/skills"
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
    const urlportfolio = "https://nasmus.xyz/api"+"/portfolio"
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
    const urlBody = "https://nasmus.xyz/api"+"/show";
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
    const urlskills = "https://nasmus.xyz/api"+"/skills";
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
    const urledu = "https://nasmus.xyz/api"+"/education";
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
    const urlPortfolioSave = "https://nasmus.xyz/api"+"/portfolioShow";
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
    const urlPortfolioDetails = "https://nasmus.xyz/api"+"/PortfolioDetails/"+id
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

