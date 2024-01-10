const data = {
    title: "Hampi",
    text: "Hampi is a UNESCO World Heritage Site located in Karnataka, India.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/The_elegant_stone_chariot.jpg/2560px-The_elegant_stone_chariot.jpg",
    link: "https://en.wikipedia.org/wiki/Hampi" 
};

export default function getData() {
    return new Promise(resolve => setTimeout(() => resolve(data), 2000));
}
