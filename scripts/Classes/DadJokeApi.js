class DadJokeApi {
    constructor() {
        this.baseUrl = "https://icanhazdadjoke.com/";
    }

    async getPictures() {
        try {
            const response = await axios.get(`${this.baseUrl}`);
            console.log(response);
            return response.data;
        } catch (error) {
            console.error();
        }
    }
}
