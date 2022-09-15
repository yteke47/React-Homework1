import axios from 'axios';

const getData = async (number) => {
    try {
        const { data: user } = await axios(`https://jsonplaceholder.typicode.com/users/${number}`)
        const { data: post } = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${number}`)
        return { user, post };
    } catch (e) {
        console.log("Bir Hata Aldınız : ", e);
    }
}

export { getData }
