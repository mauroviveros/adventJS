export default function countPackages(carriers, carrierID) {
  const carrier = carriers.find((carrier) => carrier[0] === carrierID);
  if (!carrier) return 0;

  const [_, packages, subordinates] = carrier;
  const subordinatesPackages = subordinates.reduce((total, subordinate) => {
    return total + countPackages(carriers, subordinate);
  }, 0);

  return packages + subordinatesPackages;
}
