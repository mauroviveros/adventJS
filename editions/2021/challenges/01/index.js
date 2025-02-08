export default function contarOvejas(ovejas) {
  const regex = /^(?=.*[aA])(?=.*[nN]).+$/i;
  return ovejas.filter((oveja) => {
    return oveja.color === 'rojo' && regex.test(oveja.name);
  });
}
