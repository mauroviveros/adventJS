export default function fixFiles(files) {
  const aux = {};

  return files.map((file) => {
    if (!aux[file]) aux[file] = 0;

    const newFilename = aux[file] ? `${file}(${aux[file]})` : file;
    aux[file]++;

    return newFilename;
  });
}
