export const widthSetter = (format) => {
  switch (format) {
    case "A3":
      return 1123;

    case "A4":
      return 794;

    case "A5":
      return 559;

    default:
      return 0;
  }
}