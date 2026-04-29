export const cardStyle = (
  i: number | string,
  hovered: number | string | null,
  bgColor?: string,
) => {
  const isHover = hovered === i;
  if (isHover) {
    return {
      border: "1px solid #E6D3AC",
      background: "#1A2339",
      borderRadius: "39px",
      overflow: "hidden",
      boxShadow: "-17px 20px 40.8px -20px #0000001A",
      transition:
        "border-color 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease",
    };
  }
  return {
    border: "1px solid #ffffff1f",
    background: bgColor || "#1A2339",
    borderRadius: "39px",
    overflow: "hidden",
    boxShadow: "none",
    transition:
      "border-color 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease",
  };
};
