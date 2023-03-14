export function generateRandom(min, max)
{
    return Math.random() * (max - min) + min;
}

export default generateRandom;