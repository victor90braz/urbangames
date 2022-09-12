const getFirst3Words = (prop) => prop.fact?.split(" ").slice(0, 3).join(" ");

export default getFirst3Words;
