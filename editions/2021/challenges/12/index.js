export default function getMinJump(obstacles) {
  obstacles = obstacles.sort((a, b) => a - b);

  let jump = 1;
  let distance = 0;
  let finish = false;

  while (finish === false) {
    distance += jump;

    if (obstacles.includes(distance)) {
      distance = 0;
      jump++;
    }

    if (distance >= obstacles.at(-1)) finish = true;
  }

  return jump;
}
