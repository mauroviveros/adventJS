/**
 * @param {string} fromTime - The current time in elf format
 * @param {string} takeOffTime - The take off time in elf format
 * @returns {number} The time in seconds until take off
 */
function timeUntilTakeOff(fromTime, takeOffTime) {
  function parseElfTime(elfTime) {
    elfTime = elfTime.replace(' NP', '');

    const [datePart, timePart] = elfTime.split('@');
    const [year, month, day] = datePart.split('*').map(Number);
    const [hour, minute, second] = timePart.split('|').map(Number);

    return new Date(Date.UTC(year, month - 1, day, hour, minute, second));
  }

  const fromDate = parseElfTime(fromTime);
  const takeOffDate = parseElfTime(takeOffTime);

  return Math.floor((takeOffDate - fromDate) / 1000);
}
