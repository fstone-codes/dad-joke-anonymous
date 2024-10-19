class RandomImage {
    constructor() {
        this.url = "https://thispersondoesnotexist.com/";
    }

    async getPictures() {
        try {
            const response = await axios.get(this.url, {
                responseType: "blob",
            });
            // console.log(response);

            const imgUrl = URL.createObjectURL(response.data);
            return imgUrl;
        } catch (error) {
            console.error();
        }
    }
}
